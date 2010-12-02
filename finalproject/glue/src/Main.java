import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
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

public class Main {

    private static String grammarFile;

    private static String source;

    private static Adjectivizer adjectivizer;
    
    private static CS448bStemmer stemmer = new CS448bStemmer();

    public static void main(String[] args) throws IOException, Exception {
        
        if (args.length != 2) {
            System.err.println("Usage: Main <source file> <grammar file>");
            System.exit(-1);
        }
        
        source = args[0];
        grammarFile = args[1];

        System.err.println("Initializing the parser.");
        adjectivizer = new Adjectivizer(grammarFile, stemmer);
        System.err.println("Parser initialized.");

        List<String> allText = new ArrayList<String>();

        System.err.println("Building the network");
        Graph g = buildNetwork(allText);
        
        System.out.println("%%nodes%%");
        for (String node : g.getNodes()) {
            System.out.println(node);
        }
        System.out.println("%%edges%%");
        for (Entry<Edge, Integer> edge : g.getEdges().entrySet()) {
            System.out.println(edge.getKey().getSource() + "\t" + edge.getKey().getDest() + "\t" + edge.getValue());
        }
        System.out.println("%%stems%%");
        for (Entry<String, List<String>> stem : stemmer.getStems().entrySet()) {
            System.out.println(stem.getKey());
            for (String origin : stem.getValue()) {
                System.out.println("\t" + origin);
            }
        }
    }

    private static Graph buildNetwork(List<String> allText) throws ParserConfigurationException, SAXException,
            IOException {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        factory.setValidating(false);
        DocumentBuilder builder = factory.newDocumentBuilder();
        builder.setErrorHandler(new ErrorHandler() {
            @Override
            public void warning(SAXParseException exception) throws SAXException {
            }

            @Override
            public void fatalError(SAXParseException exception) throws SAXException {
                System.err.println(exception.getLineNumber());
            }

            @Override
            public void error(SAXParseException exception) throws SAXException {
                System.err.println(exception.getLineNumber());
            }
        });
        Document document = builder.parse(new File(source));

        NodeList childNodes = document.getChildNodes();

        Graph g = new Graph();

        for (int i = 0; i < childNodes.getLength(); i++) {
            Node root = childNodes.item(i);
            NodeList entries = root.getChildNodes();
            for (int j = 0; j < entries.getLength(); j++) {
                Node item = entries.item(j);
                if (item.getNodeName().equals("RawData")) {
                    System.err.println("persons= " + j);
                    NodeList person = item.getChildNodes();
                    List<String> iamWords = new ArrayList<String>();
                    List<String> lookingforWords = new ArrayList<String>();
                    for (int k = 0; k < person.getLength(); k++) {
                        Node theOne = person.item(k);
                        final String textContent = theOne.getTextContent().toLowerCase().trim();
                        if (!"".equals(textContent)) {
                            if (theOne.getNodeName().equals("IAm")) {
                                iamWords = adjectivizer.adjectivize(textContent);
                            }
                            if (theOne.getNodeName().equals("IAmLookingFor")) {
                                lookingforWords = adjectivizer.adjectivize(textContent);
                            }
                        }
                    }
                    for (String iam : iamWords) {
                        for (String looking : lookingforWords) {
                            g.addEdge(iam, looking);
                        }
                    }
                }
            }
        }
        return g;
    }



}