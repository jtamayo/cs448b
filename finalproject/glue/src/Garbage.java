//import java.io.FileInputStream;
//import java.io.IOException;
//import java.io.InputStream;
//import java.io.InputStreamReader;
//import java.io.Reader;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.Collection;
//import java.util.Formatter;
//import java.util.HashMap;
//import java.util.HashSet;
//import java.util.List;
//import java.util.Map;
//import java.util.Set;
//import java.util.Map.Entry;
//
//import cue.lang.NGramIterator;
//
///**
// * Old code, just in case we need it
// * @author jtamayo
// */
//public class Garbage {
//
////  private static class WordNode {
////      final String name;
////
////      Map<String, Integer> outgoing = new HashMap<String, Integer>();
////      Map<String, Integer> incoming = new HashMap<String, Integer>();
////
////      public WordNode(String name) {
////          this.name = name;
////      }
////
////      public void addEdgeTo(WordNode toNode) {
////          Integer count = outgoing.get(toNode.name);
////          if (count == null) {
////              count = 0;
////          }
////          outgoing.put(toNode.name, count + 1);
////      }
////
////      public void addEdgeFrom(WordNode fromNode) {
////          Integer count = incoming.get(fromNode.name);
////          if (count == null) {
////              count = 0;
////          }
////          incoming.put(fromNode.name, count + 1);
////      }
////
////      public int assymetry() {
////          int outDegree = outDegree();
////          int inDegree = inDegree();
////          return outDegree == 0 ? 0 : inDegree / outDegree;
////      }
////
////      private int outDegree() {
////          int outDegree = 0;
////          for (int i : outgoing.values()) {
////              outDegree += i;
////          }
////          return outDegree;
////      }
////
////      private int inDegree() {
////          int inDegree = 0;
////          for (int i : incoming.values()) {
////              inDegree += i;
////          }
////          return inDegree;
////      }
////
////      @Override
////      public String toString() {
////          StringBuilder sb = new StringBuilder();
////          sb.append(name);
////          sb.append("\nIncoming:");
////          for (Entry<String, Integer> e : incoming.entrySet()) {
////              sb.append("\n\t" + e.getKey() + ": " + e.getValue());
////          }
////          sb.append("\nOutgoing:");
////          for (Entry<String, Integer> e : outgoing.entrySet()) {
////              sb.append("\n\t" + e.getKey() + ": " + e.getValue());
////          }
////          return sb.toString();
////      }
////  }
////
////  private static class Graph {
////      final Map<String, WordNode> nodes = new HashMap<String, WordNode>();
////
////      public void addEdge(String from, String to) {
////          WordNode fromNode = getNode(from);
////          WordNode toNode = getNode(to);
////          fromNode.addEdgeTo(toNode);
////          toNode.addEdgeFrom(fromNode);
////      }
////
////      private WordNode getNode(String name) {
////          WordNode n = nodes.get(name);
////          if (n == null) {
////              n = new WordNode(name);
////              nodes.put(name, n);
////          }
////          return n;
////      }
////
////  }
//    
//    private static final HashSet<String> IGNORE = new HashSet<String>(Arrays.asList(new String[] { "looking", "for",
//            "i", "am", "a", "and", "to", "i'm", "who", "someone", "that", "with", "the", "of", "is", "can", "or", "in",
//            "my", "not", "me", "want", "up", "down", "at", "as", "has", "but", "have", "it", "if", "be", "but", "you",
//            "on", "so", "go", "do" }));
//    
//
//    private static final int MAX_NGRAM_LENGTH = 1;
//    
//
////  List<WordNode> sortedByAssymetry = new ArrayList<WordNode>();
////  sortedByAssymetry.addAll(g.nodes.values());
////  Collections.sort(sortedByAssymetry, new Comparator<WordNode>() {
////      @Override
////      public int compare(WordNode o1, WordNode o2) {
////          return o1.assymetry() - o2.assymetry();
////      }
////  });
////  for (WordNode wordNode : sortedByAssymetry) {
////      System.out.println(wordNode);
////  }
//  // Map from a node to allthe things it wants, with count the number of times it shows up
//    
//
//    private static Map<String, Map<String, Integer>> reverseNetwork(Map<String, Map<String, Integer>> iamToIwant) {
//        // Ok, so I take a map that for each node has the edges and the weights. I need to build a map that for each
//        // node 
//        Map<String, Map<String, Integer>> output = new HashMap<String, Map<String, Integer>>();
//        ;
//        for (Entry<String, Map<String, Integer>> entry : iamToIwant.entrySet()) {
//            String iam = entry.getKey();
//            final Map<String, Integer> iamLinks = entry.getValue();
//            for (Entry<String, Integer> entry2 : iamLinks.entrySet()) {
//                String iwant = entry2.getKey();
//                int count = entry2.getValue();
//                Map<String, Integer> iwantLinks = output.get(iwant);
//                if (iwantLinks == null) {
//                    iwantLinks = new HashMap<String, Integer>();
//                    output.put(iwant, iwantLinks);
//                }
//                if (iwantLinks.containsKey(iam)) {
//                    throw new RuntimeException("The map shouldn't contain this...");
//                }
//                iwantLinks.put(iam, count);
//            }
//        }
//        return output;
//    }
//    
//
//    private static void printNetwork(Map<String, Map<String, Integer>> network) {
//        Set<Entry<String, Map<String, Integer>>> entrySet = network.entrySet();
//        for (Entry<String, Map<String, Integer>> entry : entrySet) {
//            final String iam = entry.getKey();
//            Map<String, Integer> map = entry.getValue();
//            Set<Entry<String, Integer>> set = map.entrySet();
//            for (Entry<String, Integer> other : set) {
//                if (other.getValue() < 3)
//                    continue;
//                System.out.println(new Formatter().format("%s\t%s\t%d", iam, other.getKey(), other.getValue()));
//            }
//        }
//    }
//    
//
//    private static String[] tokenize(String input) {
//        List<String> tokens = new ArrayList<String>();
//        for (int n = 1; n <= MAX_NGRAM_LENGTH; n++) {
//            tokens.addAll(tokenizeNGrams(input, n));
//        }
//        return tokens.toArray(new String[] {});
//    }
//
//    private static Collection<String> tokenizeNGrams(String input, int n) {
//        ArrayList<String> output = new ArrayList<String>();
//        NGramIterator it = new NGramIterator(n, input);
//        ngram: while (it.hasNext()) {
//            String string = (String) it.next();
//            String[] components = string.split(" ");
//            StringBuilder result = new StringBuilder();
//            for (int i = 0; i < components.length; i++) {
//                final String component = components[i];
//                if (IGNORE.contains(component))
//                    continue ngram;
//                result.append(stem(component));
//                if (i != components.length - 1) {
//                    result.append(" ");
//                }
//            }
//            output.add(result.toString());
//        }
//        return output;
//    }
//
//    
//    private static String readFile(String fileName) throws IOException {
//        final InputStream in = new FileInputStream(fileName);
//        return readStream(in);
//    }
//
//    private static String readStream(final InputStream in) throws IOException {
//        Reader r = new InputStreamReader(in);
//        try {
//            StringBuilder output = new StringBuilder();
//            char[] buffer = new char[1024];
//            int count;
//            while ((count = r.read(buffer)) != -1) {
//                output.append(buffer, 0, count);
//            }
//            return output.toString();
//        } finally {
//            r.close();
//        }
//    }
//
//
//    private static void printAllText(List<String> allText) {
//        for (String string : allText) {
//            System.out.println(string);
//        }
//    }
//    
//}
