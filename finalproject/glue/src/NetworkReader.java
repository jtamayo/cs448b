import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;


public class NetworkReader {

    public static Graph read(String fileName) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(fileName));
        String line;
        State state = State.START;

        Graph g = new Graph();
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
                    g.addEdge(parts[0], parts[1], Integer.parseInt(parts[2]));
                }
                break;
            }
        }
        reader.close();
        
        return g;

    }
    
    enum State {
        START, NODES, EDGES
    }
}
