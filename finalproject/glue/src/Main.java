import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
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

public class Main {

    private static String grammarFile;

    private static String source;

    private static Adjectivizer adjectivizer;
    
    private static CS448bStemmer stemmer = new CS448bStemmer();

    private static Map<Edge, List<Person>> peopleGraph = new HashMap<Edge, List<Person>>();
    
    private static Set<Person> allPeople = new HashSet<Person>();

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
        
        printGraphAsJson(g);
//        printGraphAsTxt(g);
    }

    private static void printGraphAsJson(Graph g) {
        final Map<String, Integer> indegrees = new HashMap<String, Integer>();
        final Map<String, Integer> outdegrees = new HashMap<String, Integer>();

        for (Entry<Edge, Integer> edges : g.getEdges().entrySet()) {
            Integer srcDegree = outdegrees.get(edges.getKey().getSource());
            if (srcDegree == null) {
                srcDegree = 0;
            }
            outdegrees.put(edges.getKey().getSource(), srcDegree + edges.getValue());

            Integer destDegree = indegrees.get(edges.getKey().getDest());
            if (destDegree == null) {
                destDegree = 0;
            }
            indegrees.put(edges.getKey().getDest(), destDegree + edges.getValue());
        }

        final Map<String, List<Edge>> inedges = new HashMap<String, List<Edge>>();
        final Map<String, List<Edge>> outedges = new HashMap<String, List<Edge>>();
        for (Entry<Edge, Integer> edge : g.getEdges().entrySet()) {
            edge.getKey().setCount(edge.getValue());

            List<Edge> outedgeList = outedges.get(edge.getKey().getSource());
            if (outedgeList == null) {
                outedgeList = new ArrayList<Edge>();
                outedges.put(edge.getKey().getSource(), outedgeList);
            }
            outedgeList.add(edge.getKey());

            List<Edge> inedgeList = inedges.get(edge.getKey().getDest());
            if (inedgeList == null) {
                inedgeList = new ArrayList<Edge>();
                inedges.put(edge.getKey().getDest(), inedgeList);
            }
            inedgeList.add(edge.getKey());
        }

        System.out.println("var nodes = [");
        for (String node : g.getNodes()) {
            System.out.println("{node: \"" + node + "\", indegree: " + indegrees.get(node) + ", outdegree: "
                    + outdegrees.get(node) + "},");
        }
        System.out.println("];");

        System.out.println("inedges = {");
        printEdges(g, inedges);
        System.out.println("};");
        
        System.out.println("outedges = {");
        printEdges(g, outedges);
        System.out.println("};");
        
        System.out.println("people = {");
        for (Person p : allPeople) {
            StringBuilder sb = new StringBuilder();
            sb.append(System.identityHashCode(p));
            sb.append(":");
            print(p, sb);
            sb.append(",");
            System.out.println(sb);
        }
        System.out.println("};");
        
        System.out.println("stems = {");
        for (Entry<String, List<String>> e : stemmer.getStems().entrySet()) {
            StringBuilder sb = new StringBuilder();
            sb.append("\"");
            sb.append(e.getKey());
            sb.append("\": \"");
            sb.append(mostPopular(e.getValue()));
            sb.append("\",");
            System.out.println(sb);
        }
        System.out.println("};");
    }

    private static String mostPopular(List<String> strings) {
        Map<String, Integer> counts = new HashMap<String, Integer>();
        for (String s : strings) {
            Integer count = counts.get(s);
            if (count == null) count = 0;
            counts.put(s, count + 1);
        }
        Entry<String, Integer> max = Collections.max(counts.entrySet(), new Comparator<Entry<String, Integer>>() {
            public int compare(Entry<String, Integer> o1, Entry<String, Integer> o2) {
                return o1.getValue() - o2.getValue();
            }
        });
        return max.getKey();
    }

    private static void printEdges(Graph g, final Map<String, List<Edge>> edges) {
        for (String node : g.getNodes()) {
            System.out.println("\"" + node + "\":[");
            if (edges.get(node) != null) {
                for (Edge e : edges.get(node)) {
                    StringBuilder sb = new StringBuilder();
                    sb.append("{src: \"");
                    sb.append(e.getSource());
                    sb.append("\", dest: \"");
                    sb.append(e.getDest());
                    sb.append("\", count: ");
                    sb.append(e.getCount());
                    sb.append(", people: [");
                    for (Person p : peopleGraph.get(e)) {
                        sb.append(System.identityHashCode(p));
                        sb.append(",");
                    }
                    sb.append("]},");
                    System.out.println(sb);
                }
            }
            System.out.println("],");
        }
    }
    
    private static void print(Person p, StringBuilder sb) {
        sb.append("{");
        sb.append("age: " + p.age + ", ");
        sb.append("gender: " + p.gender + ", ");
        sb.append("lookingGender: " + p.lookingGender + ", ");
        sb.append("location: \"" + escape(p.location) + "\", ");
        sb.append("iam: \"" + escape(p.iam) + "\", ");
        sb.append("looking: \"" + escape(p.looking) + "\", ");
        sb.append("title: \"" + escape(p.title) + "\", ");
        sb.append("}");
    }
    
    private static String escape(String input) {
        return input
            .replace("\"", "\\\"")
            .replaceAll("\\s", " ");//regexp
    }

    private static void printGraphAsTxt(Graph g) {
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
//                if (j > 200) break;
                Node item = entries.item(j);
                if (item.getNodeName().equals("RawData")) {
                    System.err.println("persons= " + j);
                    List<String> iamWords = new ArrayList<String>();
                    List<String> lookingforWords = new ArrayList<String>();
                    Person p = new Person(item.getChildNodes());
                    lookingforWords = adjectivizer.adjectivize(p.looking);
                    iamWords = adjectivizer.adjectivize(p.iam);
                    for (String iam : iamWords) {
                        for (String looking : lookingforWords) {
                            g.addEdge(iam, looking);
                            Edge e = new Edge(iam, looking);
                            List<Person> people = peopleGraph.get(e);
                            if (people == null) {
                                people = new ArrayList<Person>();
                                peopleGraph.put(e, people);
                            }
                            people.add(p);
                            allPeople.add(p);
                        }
                    }
                }
            }
        }
        return g;
    }

    private static class Person {
        String title = "";
        String text = "";
        String iam = "";
        String looking = "";
        int gender;
        int age;
        String location = "";
        int lookingGender;
        
        Person(NodeList person) {
            for (int k = 0; k < person.getLength(); k++) {
                Node theOne = person.item(k);
                final String textContent = theOne.getTextContent().toLowerCase().trim().replace("/", "-");
                if (!"".equals(textContent)) {
                    if (theOne.getNodeName().equals("IAm")) {
                        this.iam = textContent;
                    }
                    if (theOne.getNodeName().equals("Age")) {
                        this.age = Integer.parseInt(textContent);
                    }
                    if (theOne.getNodeName().equals("IAmLookingFor")) {
                        this.looking = textContent;
                    }
                    if (theOne.getNodeName().equals("Title")) {
                        this.title = textContent;
                    }
                    if (theOne.getNodeName().equals("CleanText")) {
                        this.text = textContent;
                    }
                    if (theOne.getNodeName().equals("Gender")) {
                        this.gender = Integer.parseInt(textContent);
                    }
                    if (theOne.getNodeName().equals("Location")) {
                        this.location = textContent;
                    }
                    if (theOne.getNodeName().equals("LookingFor")) {
                        this.lookingGender = Integer.parseInt(textContent);
                    }
                }
            }
        }
    }

}