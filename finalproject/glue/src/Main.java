import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Formatter;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.ErrorHandler;
import org.xml.sax.SAXException;
import org.xml.sax.SAXParseException;

import cue.lang.NGramIterator;

public class Main {

    private static class WordNode {
	final String name;
	
	Map<String, Integer> outgoing = new HashMap<String, Integer>();
	Map<String, Integer> incoming = new HashMap<String, Integer>();
	
	public WordNode(String name) {
	    this.name = name;
	}
	
	public void addEdgeTo(WordNode toNode) {
	    Integer count = outgoing.get(toNode.name);
	    if (count == null) {
		count = 0;
	    }
	    outgoing.put(toNode.name, count);
	}

	public void addEdgeFrom(WordNode fromNode) {
	    Integer count = incoming.get(fromNode.name);
	    if (count == 0) {
		count = 0;
	    }
	    incoming.put(fromNode.name, count);
	}
    }
    
    private static class Graph {
	final Map<String, WordNode> nodes = new HashMap<String, WordNode>();
	
	public void addEdge(String from, String to) {
	    WordNode fromNode = getNode(from);
	    WordNode toNode = getNode(to);
	    fromNode.addEdgeTo(toNode);
	    toNode.addEdgeFrom(fromNode);
	}

	private WordNode getNode(String name) {
	    WordNode n = nodes.get(name);
	    if (n == null) {
		n = new WordNode(name);
		nodes.put(name, n);
	    }
	    return n;
	}
    }

    private static final HashSet<String> IGNORE = new HashSet<String>(Arrays.asList(new String[] { "looking", "for", "i",
	    "am", "a", "and", "to", "i'm", "who", "someone", "that", "with", "the", "of", "is", "can", "or", "in", "my",
	    "not", "me", "want", "up", "down", "at", "as", "has", "but", "have", "it", "if", "be", "but", "you", "on", "so", "go", "do" }));
    
    private static final int MAX_NGRAM_LENGTH = 1;

    public static void main(String[] args) throws IOException, Exception {

	List<String> allText = new ArrayList<String>();

	Map<String, Map<String, Integer>> iamToIwant = buildNetwork(allText);
	// Map from a node to allthe things it wants, with count the number of times it shows up
	
	Map<String, Integer> inDegrees = new HashMap<String, Integer>();
	Map<String, Integer> outDegree = new HashMap<String, Integer>();
	
	/*
	 * Ok, so the out degree is, for each node, the sum of 
	 */
	
	for (Entry<String, Map<String, Integer>> iamNode : iamToIwant.entrySet()) {
	    String iam = iamNode.getKey();
	    final Map<String, Integer> iamLinks = iamNode.getValue();
	    for (Entry<String, Integer> iamToIwantEdge : iamLinks.entrySet()) {
		String iwant = iamToIwantEdge.getKey();
		int count = iamToIwantEdge.getValue();
		Integer inDegree = inDegrees.get(iam);
		if (inDegree == null) {
		    inDegree = 0;
		}
		inDegrees.put(iam, inDegree + count);
		
		
	    }
	}
	
	Map<String, Map<String, Integer>> iwantToIam = reverseNetwork(iamToIwant);
	
	

	printNetwork(iamToIwant);
	
	/*
	 * Building the assymetries. I need to compute for each node the in and out degree. there are two ways of computing this,
	 * one is by using just the number of edges, another by using the sum of each edge. There's also the problem that I need
	 * to revert the map, because right now I only have the out degree, not the in degree. Perhaps I need a different representation
	 * of the graph, something more explicit.
	 * 
	 * Ok, let's say I have a Graph class. The class has Nodes, the nodes have Edges. It's still an adjacency-list representation. Or is there a
	 * better representation? A matrix would be n^2= 
	 */
	
//	printAllText(allText);
    }

    private static Map<String, Map<String, Integer>> reverseNetwork(Map<String, Map<String, Integer>> iamToIwant) {
	// Ok, so I take a map that for each node has the edges and the weights. I need to build a map that for each
	// node 
	Map<String, Map<String, Integer>> output = new HashMap<String, Map<String,Integer>>();;
	for (Entry<String, Map<String, Integer>> entry : iamToIwant.entrySet()) {
	    String iam = entry.getKey();
	    final Map<String, Integer> iamLinks = entry.getValue();
	    for (Entry<String, Integer> entry2 : iamLinks.entrySet()) {
		String iwant = entry2.getKey();
		int count = entry2.getValue();
		Map<String, Integer> iwantLinks = output.get(iwant);
		if (iwantLinks == null)	 {
		    iwantLinks = new HashMap<String, Integer>();
		    output.put(iwant, iwantLinks);
		}
		if (iwantLinks.containsKey(iam)) {
		    throw new RuntimeException("The map shouldn't contain this...");
		}
		iwantLinks.put(iam, count);
	    }
	}
	return output;
    }

    private static Map<String, Map<String, Integer>> buildNetwork(List<String> allText)
	    throws ParserConfigurationException, SAXException, IOException {
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
		System.out.println(exception.getLineNumber());
	    }
	});
	Document document = builder.parse(new File("/afs/ir/users/j/t/jtamayo/shared/cs448b/ciwant.xml"));
	
	NodeList childNodes = document.getChildNodes();

	Graph g = new Graph();
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
			    g.addEdge(word, looking);
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
	return network;
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
