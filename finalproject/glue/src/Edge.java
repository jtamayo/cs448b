
/**
 * An edge in a node. All edges with the same source and destination are the
 * same.
 * 
 * @author jtamayo
 */
public class Edge {

	private final String dest;
	private final String source;
	private int count;

	public Edge(String source, String dest, int count) {
		this.source = source;
		this.dest = dest;
		this.count = 0;
	}
	
	public Edge(String source, String dest) {
	    this(source, dest, 0);
	}

	public String getDest() {
		return dest;
	}

	public String getSource() {
		return source;
	}
	
	public int getCount() {
        return count;
    }
	
	public void setCount(int count) {
        this.count = count;
    }

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dest == null) ? 0 : dest.hashCode());
		result = prime * result + ((source == null) ? 0 : source.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof Edge))
			return false;
		Edge other = (Edge) obj;
		if (dest == null) {
			if (other.dest != null)
				return false;
		} else if (!dest.equals(other.dest))
			return false;
		if (source == null) {
			if (other.source != null)
				return false;
		} else if (!source.equals(other.source))
			return false;
		return true;
	}

}
