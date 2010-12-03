import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;


/**
 * Keeps a list of nodes and a list of edges, nothing more.
 * @author jtamayo
 */
public class Graph {
	Set<String> nodes = new HashSet<String>();
	Map<Edge, Integer> edges = new HashMap<Edge, Integer>();
	
	public void addEdge(String source, String dest) {
		Edge e = new Edge(source, dest);
		Integer weight = edges.get(e);
		if (weight == null) {
			weight = 0;
		}
		edges.put(e, weight + 1);
		nodes.add(source);
		nodes.add(dest);
	}

    public Set<String> getNodes() {
        return Collections.unmodifiableSet(nodes);
    }

    public Map<Edge, Integer> getEdges() {
        return Collections.unmodifiableMap(edges);
    }

    public void addEdge(String source, String dest, int weight) {
        Edge e = new Edge(source, dest);
        Integer oldWeight = edges.get(e);
        if (oldWeight == null) {
            oldWeight = 0;
        }
        edges.put(e, oldWeight + weight);
        nodes.add(source);
        nodes.add(dest);
    }
	
	
}
