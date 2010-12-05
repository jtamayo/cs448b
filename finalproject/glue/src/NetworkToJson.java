import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public class NetworkToJson {
    //    
    //    private static class Edge {
    //        String otherNode;
    //        int count;
    //    }

    public static void main(String[] args) throws IOException {

        if (args.length != 1) {
            System.err.println("Use: Class file");
            System.exit(-1);
        }

        Graph g = NetworkReader.read(args[0]);
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
        
        
        
    }

    private static void printEdges(Graph g, final Map<String, List<Edge>> edges) {
        for (String node : g.getNodes()) {
            System.out.println("\"" + node + "\":[");
            if (edges.get(node) != null) {
                for (Edge e : edges.get(node)) {
                    System.out.println("{src: \"" + e.getSource() + "\", dest: \"" + e.getDest() + "\", count: "
                            + e.getCount() + "},");
                }
            }
            System.out.println("],");
        }
    }

}
