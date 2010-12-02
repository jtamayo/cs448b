import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Stemmer for CS448b. Uses code from Stemmer, the original Porter stemmer
 * algorithm, but keeps track of which words were stemmed to which roots.
 */
public class CS448bStemmer {
    private Map<String, List<String>> stems = new HashMap<String, List<String>>();

    public String stem(String word) {
        Stemmer stemmer = new Stemmer();
        for (int i = 0; i < word.length(); i++) {
            stemmer.add(word.charAt(i));
        }
        stemmer.stem();
        final String stem = stemmer.toString();
        List<String> origins = stems.get(stem);
        if (origins == null) {
            origins = new ArrayList<String>();
            stems.put(stem, origins);
        }
        origins.add(word);
        return stem;
    }

    public Map<String, List<String>> getStems() {
        return stems;
    }
}

