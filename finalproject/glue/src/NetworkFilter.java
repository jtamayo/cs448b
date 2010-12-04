import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

enum State {
    START, NODES, EDGES
}

public class NetworkFilter {
    public static void main(String[] args) throws IOException {
        if (args.length != 1) {
            System.err.println("Use: MatrixViewSorter file");
            System.exit(-1);
        }

        Graph g = NetworkReader.read(args[0]);
        final Map<String, Integer> degree = new HashMap<String, Integer>();

        for (Entry<Edge, Integer> edges : g.getEdges().entrySet()) {
            Integer srcDegree = degree.get(edges.getKey().getSource());
            if (srcDegree == null) {
                srcDegree = 0;
            }
            degree.put(edges.getKey().getSource(), srcDegree + edges.getValue());

            Integer destDegree = degree.get(edges.getKey().getDest());
            if (destDegree == null) {
                destDegree = 0;
            }
            degree.put(edges.getKey().getDest(), destDegree + edges.getValue());
        }

        List<String> sortedNodes = new ArrayList<String>(g.getNodes());
        Collections.sort(sortedNodes, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return degree.get(o2) - degree.get(o1);
            }
        });
        

        System.out.println("%%nodes%%");
        final List<String> subList = sortedNodes.subList(0, 100);
        for (String node : subList) {
            System.out.println(node);
        }
        System.out.println("%%edges%%");
        for (Entry<Edge, Integer> edge : g.getEdges().entrySet()) {
            final String source = edge.getKey().getSource();
            final String dest = edge.getKey().getDest();
            if (subList.contains(source) && subList.contains(dest)) {
                System.out.println(source + "\t" + dest + "\t" + edge.getValue());
            }
        }
        System.out.println("%%stems%%");
    }
}
