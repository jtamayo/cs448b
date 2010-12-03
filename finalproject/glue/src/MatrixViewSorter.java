import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import edu.stanford.vis.graph.EdgeTable;
import edu.stanford.vis.graph.cluster.CommunityGreedy;

/**
 * This class takes a network file and sorts the node so that the clustering
 * structure is visible in a matrix view.
 * 
 * @author jtamayo
 */
public class MatrixViewSorter {
    enum State {
        START, NODES, EDGES
    }

    public static void main(String[] args) throws IOException {
        if (args.length != 1) {
            System.err.println("Use: MatrixViewSorter file");
            System.exit(-1);
        }
        BufferedReader reader = new BufferedReader(new FileReader(args[0]));
        String line;
        State state = State.START;

        List<String> nodes = new ArrayList<String>();
        List<Integer> sources = new ArrayList<Integer>();
        List<Integer> targets = new ArrayList<Integer>();
        List<Integer> weights = new ArrayList<Integer>();
        int lineNumber = 0;
        http://google.com
        while ((line = reader.readLine()) != null) {
            lineNumber++;
            line = line.trim();
            switch (state) {
            case START:
                if ("%%nodes%%".equals(line.trim())) {
                    state = State.NODES;
                } else {
                    throw new RuntimeException();
                }
                break;
            case NODES:
                if ("%%edges%%".equals(line.trim())) {
                    state = State.EDGES;
                } else {
                    nodes.add(line);
                }
                break;
            case EDGES:
                if ("%%stems%%".equals(line.trim())) {
                    break http;
                } else {
                    String[] parts = line.split("\t");
                    if (parts.length != 3) {
                        System.out.println(lineNumber + ":" + line);
                    }
                    int source = nodes.indexOf(parts[0]);
                    int target = nodes.indexOf(parts[1]);
                    sources.add(source);
                    targets.add(target);
                    weights.add(Integer.parseInt(parts[2]));
                }
                break;
            }
        }
        
        int n = nodes.size(); // number of nodes
        int src[] = new int[sources.size()]; // edges: source nodes
        for (int i = 0; i < sources.size(); i++) {
            src[i] = sources.get(i);
        }
        int trg[] = new int[targets.size()]; // edges: target nodes
        for (int i = 0; i < targets.size(); i++) {
            trg[i] = targets.get(i);
        }
        
        EdgeTable t = new EdgeTable(n, src, trg, false);
        CommunityGreedy c = new CommunityGreedy(t);
        
        // get sorted indices for nodes
        int[] s = c.sort();
        int[] g = c.groups();
        
//        printTextFile(nodes, sources, targets, weights, src, s, g);
        printJsonFile(nodes, sources, targets, weights, src, s, g);
    }

    private static void printJsonFile(List<String> nodes, List<Integer> sources, List<Integer> targets,
            List<Integer> weights, int[] src, int[] s, int[] g) {
        System.out.println("var wantme = {");
        System.out.println("nodes: [");
        for (int i = 0; i < s.length; i++) {
            System.out.println("{nodeName: \"" + nodes.get(s[i]) + "\", group: " + g[i] + "},");
        }
        System.out.println("],");
        System.out.println("links: [");

        for (int i = 0; i < src.length; i++) {
            System.out.println("{source:" + sources.get(i) +", target:" + targets.get(i) + ", value:" + weights.get(i) + "},");
        }
        
        System.out.println("]");
        System.out.println("};");
    }

    private static void printTextFile(List<String> nodes, List<Integer> sources, List<Integer> targets,
            List<Integer> weights, int[] src, int[] s, int[] g) {
        System.out.println("%%nodes%%");
        for (int i = 0; i < s.length; i++) {
            System.out.println(nodes.get(s[i]) + "\t" + g[i]);
        }
        System.out.println("%%edges%%");
        for (int i = 0; i < src.length; i++) {
            System.out.println(nodes.get(sources.get(i)) + "\t" + nodes.get(targets.get(i)) + "\t" + weights.get(i));
        }
        System.out.println("%%stems%%");
    }
}
