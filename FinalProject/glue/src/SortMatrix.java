import edu.stanford.vis.graph.EdgeTable;
import edu.stanford.vis.graph.cluster.CommunityGreedy;

public class SortMatrix {

	public static void main(String[] args) {
		// assumes nodes are numbered from 0 to n-1
		// source and target arrays contain node indices
		// to represent edge end points
		
		// TODO: replace definitions of n, src, trg
		// with actual network data
		
		int n = 3; // number of nodes
		int src[] = {0, 0}; // edges: source nodes
		int trg[] = {1, 2}; // edges: target nodes
		
		EdgeTable t = new EdgeTable(n, src, trg, false);
		CommunityGreedy c = new CommunityGreedy(t);
		
		// get sorted indices for nodes
		int[] s = c.sort();
		
		// get cluster (community) memberships for each nodes
		// int[] g = c.groups();
		
		System.out.print("[");
		for (int i=0; i<s.length; ++i) {
			if (i > 0) System.out.print(",");
			System.out.print(s[i]);
		}
		System.out.println("]");
	}

}
