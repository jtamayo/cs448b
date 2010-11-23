import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Formatter;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.ErrorHandler;
import org.xml.sax.SAXException;
import org.xml.sax.SAXParseException;

import cue.lang.NGramIterator;
import cue.lang.WordIterator;

public class Main {

    private static final HashSet<String> IGNORE = new HashSet<String>(Arrays.asList(new String[] { "looking", "for", "i",
	    "am", "a", "and", "to", "i'm", "who", "someone", "that", "with", "the", "of", "is", "can", "or", "in", "my",
	    "not", "me", "want", "up", "down", "at", "as", "has", "but", "have", "it", "if", "be", "but", "you", "on", "so", "go", "do" }));
    
    private static final String DATER_REGEXP = "<dater\\s+iam=\"(.*?)\"\\s+iamlookingfor=\"(.*?)\".*/>";

    private static final int MAX_NGRAM_LENGTH = 1;

    public static void main(String[] args) throws IOException, Exception {
//	String input;
//	if (args.length == 1) {
//	    // Read from a file
//	    input = readFile(args[0]);
//	} else if (args.length == 0) {
//	    input = readStream(System .in);
//	} else {
//	    System.err.println("Invalid number of arguments");
//	    return;
//	}

	DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	factory.setValidating(false);
	DocumentBuilder builder = factory.newDocumentBuilder();
	builder.setErrorHandler(new ErrorHandler() {
	    
	    @Override
	    public void warning(SAXParseException exception) throws SAXException {
	    }
	    
	    @Override
	    public void fatalError(SAXParseException exception) throws SAXException {
		System.out.println(exception.getLineNumber());
	    }
	    
	    @Override
	    public void error(SAXParseException exception) throws SAXException {
		
	    }
	});
	Document document = builder.parse(new File("/afs/ir/users/j/t/jtamayo/shared/cs448b/ciwant.xml"));
	
	NodeList childNodes = document.getChildNodes();

	List<String> allText = new ArrayList<String>();
	
	Map<String, Map<String, Integer>> network = new HashMap<String, Map<String,Integer>>();
	
	for (int i = 0; i < childNodes.getLength(); i++) {
	    Node root = childNodes.item(i);
	    NodeList entries = root.getChildNodes();
	    for (int j = 0; j < entries.getLength(); j++) {
		Node item = entries.item(j);
		if (item.getNodeName().equals("RawData")) {
		    NodeList person = item.getChildNodes();
		    String[] iAm = null, iAmLookingFor = null;
		    for (int k = 0; k < person.getLength(); k++) {
			Node theOne = person.item(k);
			if (theOne.getNodeName().equals("IAm")) {
			    iAm = tokenize(theOne.getTextContent().toLowerCase());
			    allText.add(theOne.getTextContent());
			}
			if (theOne.getNodeName().equals("IAmLookingFor")) {
			    iAmLookingFor = tokenize(theOne.getTextContent().toLowerCase());
			    allText.add(theOne.getTextContent());
			}
		    }
		    for (String word : iAm) {
			Map<String, Integer> map = network.get(word);
			if (map == null) {
			    map = new HashMap<String, Integer>();
			    network.put(word, map);
			}
			for (String looking : iAmLookingFor) {
			    Integer count = map.get(looking);
			    if (count == null) {
				count = 0;
			    }
			    map.put(looking, count + 1);
			}
		    }
		}
	    }
	}
//	
//	
//	Pattern p = Pattern.compile(DATER_REGEXP);
//	Matcher m = p.matcher(input);
//	while (m.find()) {
//	    String[] iam = tokenize(StringEscapeUtils.unescapeXml(m.group(1).toLowerCase()));
//	    String[] iamlookingfor = tokenize(StringEscapeUtils.unescapeXml(m.group(2).toLowerCase()));
//	    
//	}
//	
//	printNetwork(network);
	
	printAllText(allText);
    }

    private static void printAllText(List<String> allText) {
	for (String string : allText) {
	    System.out.println(string);
	}
    }

    private static void printNetwork(Map<String, Map<String, Integer>> network) {
	Set<Entry<String, Map<String, Integer>>> entrySet = network.entrySet();
	for (Entry<String, Map<String, Integer>> entry : entrySet) {
	    final String iam = entry.getKey();
	    Map<String, Integer> map = entry.getValue();
	    Set<Entry<String, Integer>> set = map.entrySet();
	    for (Entry<String, Integer> other : set) {
		if (other.getValue() < 3) continue;
		System.out.println(new Formatter().format("%s\t%s\t%d", iam, other.getKey(), other.getValue()));
	    }
	}
    }

    private static String stem(String string) {
	Stemmer stemmer = new Stemmer();
	for (int i = 0; i < string.length(); i++) {
	    stemmer.add(string.charAt(i));
	}
	stemmer.stem();
	return stemmer.toString();
    }

    private static String readFile(String fileName) throws IOException {
	final InputStream in = new FileInputStream(fileName);
	return readStream(in);
    }

    private static String[] tokenize(String input) {
	List<String> tokens = new ArrayList<String>();
	for (int n = 1; n <= MAX_NGRAM_LENGTH; n++) {
	    tokens.addAll(tokenizeNGrams(input, n));
	}
	return tokens.toArray(new String[]{});
    }

    private static Collection<String> tokenizeNGrams(String input, int n) {
	ArrayList<String> output = new ArrayList<String>();
	NGramIterator it = new NGramIterator(n, input);
	ngram:
	while (it.hasNext()) {
	    String string = (String) it.next();
	    String[] components = string.split(" ");
	    StringBuilder result = new StringBuilder();
	    for (int i = 0; i < components.length; i++) {
		final String component = components[i];
		if (IGNORE.contains(component)) continue ngram;
		result.append(stem(component));
		if (i != components.length - 1) {
		    result.append(" ");
		}
	    }
	    output.add(result.toString());
	}
	return output;
    }

    private static String readStream(final InputStream in) throws IOException {
	Reader r = new InputStreamReader(in);
	try {
	    StringBuilder output = new StringBuilder();
	    char[] buffer = new char[1024];
	    int count;
	    while ((count = r.read(buffer)) != -1) {
		output.append(buffer, 0, count);
	    }
	    return output.toString();
	} finally {
	    r.close();
	}
    }

}
