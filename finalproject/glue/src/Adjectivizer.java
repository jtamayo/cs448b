import java.io.Reader;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;

import edu.stanford.nlp.ling.HasWord;
import edu.stanford.nlp.ling.Sentence;
import edu.stanford.nlp.ling.TaggedWord;
import edu.stanford.nlp.parser.lexparser.LexicalizedParser;
import edu.stanford.nlp.process.DocumentPreprocessor;
import edu.stanford.nlp.trees.Tree;

/**
 * Takes a bunch of text and returns the adjectives contained in them. It also
 * remembers in which sentences a word appeared.
 */
public class Adjectivizer {

    private final LexicalizedParser lp;
    private final CS448bStemmer stemmer;
//    private final Map<String, List<String>> stemsToSentences = new HashMap<String, List<String>>();
    
    
    public Adjectivizer(String grammarFile, CS448bStemmer stemmer) {
        this.stemmer = stemmer;
        lp = new LexicalizedParser(grammarFile);
        lp.setOptionFlags(new String[] { "-maxLength", "140", "-retainTmpSubcategories" });
    }
    
    public List<String> adjectivize(String lowerCase) {
        final List<List<? extends HasWord>> sentences = splitSentences(lowerCase);

        List<String> adjectives = new ArrayList<String>();

        for (List<? extends HasWord> sentence : sentences) {
            final Tree parse = (Tree) lp.apply(sentence);
            Sentence<TaggedWord> sent = parse.taggedYield();

            for (TaggedWord taggedWord : sent) {
                final String tag = taggedWord.tag();
                if ("JJ".equals(tag) || "JJR".equals(tag) || "JJS".equals(tag) || "NN".equals(tag) || "NNS".equals(tag)) {
                    final String stem = stemmer.stem(taggedWord.value());
//                    remember(stem, sentence);
                    adjectives.add(stem);
                }
            }
        }
        return adjectives;
    }

//    private void remember(String stem, List<? extends HasWord> sentence) {
//        StringBuilder sb = new StringBuilder();
//        for (HasWord word : sentence) {
//            sb.append(word.word());
//            sb.append(" ");
//        }
//        List<String> sentences = stemsToSentences.get(stem);
//        if (sentences == null) {
//            sentences = new ArrayList<String>();
//            stemsToSentences.put(stem, sentences);
//        }
//        sentences.add(sb.toString());
//    }

    private static List<List<? extends HasWord>> splitSentences(String lowerCase) {
        DocumentPreprocessor p = new DocumentPreprocessor();
        Reader r = new StringReader(lowerCase);
        return p.getSentencesFromText(r);
    }
}