var nodes = [
{node: "hairi", indegree: null, outdegree: 1},
{node: "old", indegree: null, outdegree: 8},
{node: "sexi", indegree: null, outdegree: 1},
{node: "simpl", indegree: null, outdegree: 2},
{node: "singl", indegree: 3, outdegree: 8},
{node: "intellig", indegree: null, outdegree: 1},
{node: "blond", indegree: null, outdegree: 2},
{node: "mesomeon", indegree: 2, outdegree: null},
{node: "nice", indegree: 6, outdegree: 2},
{node: "good", indegree: 9, outdegree: 4},
{node: "same", indegree: null, outdegree: 1},
{node: "honest", indegree: 2, outdegree: 1},
{node: "free", indegree: 1, outdegree: null},
{node: "more", indegree: null, outdegree: 2},
{node: "blockbust", indegree: null, outdegree: 1},
{node: "unselfish", indegree: 2, outdegree: null},
{node: "basic", indegree: 5, outdegree: null},
{node: "commit", indegree: 2, outdegree: null},
{node: "artsi", indegree: null, outdegree: 1},
{node: "interest", indegree: 2, outdegree: 1},
{node: "funni", indegree: null, outdegree: 2},
{node: "dark", indegree: null, outdegree: 1},
{node: "old-fashion", indegree: 8, outdegree: null},
{node: "younger", indegree: 13, outdegree: null},
{node: "video", indegree: null, outdegree: 1},
{node: "black", indegree: null, outdegree: 1},
{node: "sure", indegree: null, outdegree: 1},
{node: "shallow", indegree: null, outdegree: 3},
{node: "self-suffici", indegree: null, outdegree: 1},
{node: "part-tim", indegree: null, outdegree: 8},
{node: "hard-work", indegree: null, outdegree: 1},
{node: "signific", indegree: null, outdegree: 1},
{node: "open-mind", indegree: null, outdegree: 1},
{node: "quiet", indegree: null, outdegree: 2},
{node: "attract", indegree: null, outdegree: 4},
{node: "marri", indegree: 13, outdegree: null},
{node: "tire", indegree: null, outdegree: 14},
{node: "inlov", indegree: null, outdegree: 11},
{node: "afraid", indegree: 2, outdegree: null},
{node: "positive-idealist", indegree: null, outdegree: 3},
{node: "outgo", indegree: null, outdegree: 1},
{node: "explicit", indegree: 4, outdegree: null},
{node: "strong", indegree: 2, outdegree: null},
{node: "better", indegree: null, outdegree: 1},
{node: "preppi", indegree: null, outdegree: 1},
{node: "blue-green", indegree: null, outdegree: 1},
{node: "own", indegree: null, outdegree: 1},
{node: "spontan", indegree: null, outdegree: 1},
{node: "posit", indegree: 4, outdegree: null},
{node: "compat", indegree: null, outdegree: 1},
{node: "femal", indegree: 6, outdegree: null},
{node: "romant", indegree: null, outdegree: 2},
{node: "rug", indegree: null, outdegree: 1},
{node: "other", indegree: null, outdegree: 1},
{node: "suc", indegree: 2, outdegree: null},
{node: "warm", indegree: null, outdegree: 1},
{node: "most", indegree: 2, outdegree: 3},
{node: "thick-heavi", indegree: null, outdegree: 1},
{node: "punk", indegree: null, outdegree: 1},
{node: "short", indegree: null, outdegree: 1},
{node: "real", indegree: null, outdegree: 1},
{node: "clean", indegree: null, outdegree: 1},
{node: "easi", indegree: 1, outdegree: null},
{node: "full", indegree: null, outdegree: 8},
{node: "beauti", indegree: 2, outdegree: null},
{node: "materialist", indegree: null, outdegree: 3},
{node: "passion", indegree: 2, outdegree: null},
{node: "hard", indegree: 6, outdegree: null},
{node: "major", indegree: null, outdegree: 1},
{node: "tall", indegree: 2, outdegree: 1},
{node: "sarcast", indegree: null, outdegree: 1},
{node: "hillbilli", indegree: null, outdegree: 1},
{node: "happi", indegree: 4, outdegree: null},
{node: "physic", indegree: null, outdegree: 1},
{node: "divorc", indegree: 4, outdegree: null},
{node: "new", indegree: 2, outdegree: 3},
{node: "orient", indegree: 4, outdegree: null},
{node: "quick-wit", indegree: null, outdegree: 1},
{node: "fanci", indegree: 6, outdegree: null},
{node: "attach", indegree: 4, outdegree: null},
{node: "career-ori", indegree: null, outdegree: 1},
{node: "high", indegree: 10, outdegree: 3},
{node: "sociabl", indegree: null, outdegree: 1},
{node: "financi", indegree: null, outdegree: 1},
];
inedges = {
"hairi":[
],
"old":[
],
"sexi":[
],
"simpl":[
],
"singl":[
{src: "other", dest: "singl", count: 1, people: [299608569,]},
{src: "physic", dest: "singl", count: 1, people: [299608569,]},
{src: "signific", dest: "singl", count: 1, people: [299608569,]},
],
"intellig":[
],
"blond":[
],
"mesomeon":[
{src: "inlov", dest: "mesomeon", count: 1, people: [2067899183,]},
{src: "tire", dest: "mesomeon", count: 1, people: [2067899183,]},
],
"nice":[
{src: "tire", dest: "nice", count: 1, people: [1363395619,]},
{src: "attract", dest: "nice", count: 1, people: [1363395619,]},
{src: "materialist", dest: "nice", count: 1, people: [1363395619,]},
{src: "high", dest: "nice", count: 1, people: [1363395619,]},
{src: "most", dest: "nice", count: 1, people: [1363395619,]},
{src: "shallow", dest: "nice", count: 1, people: [1363395619,]},
],
"good":[
{src: "sure", dest: "good", count: 1, people: [2053544335,]},
{src: "career-ori", dest: "good", count: 1, people: [2053544335,]},
{src: "old", dest: "good", count: 1, people: [107130125,]},
{src: "full", dest: "good", count: 1, people: [107130125,]},
{src: "hairi", dest: "good", count: 1, people: [2053544335,]},
{src: "tire", dest: "good", count: 1, people: [2067899183,]},
{src: "singl", dest: "good", count: 1, people: [107130125,]},
{src: "inlov", dest: "good", count: 1, people: [2067899183,]},
{src: "part-tim", dest: "good", count: 1, people: [107130125,]},
],
"same":[
],
"honest":[
{src: "tire", dest: "honest", count: 1, people: [2067899183,]},
{src: "inlov", dest: "honest", count: 1, people: [2067899183,]},
],
"free":[
{src: "new", dest: "free", count: 1, people: [1588859510,]},
],
"more":[
],
"blockbust":[
],
"unselfish":[
{src: "inlov", dest: "unselfish", count: 1, people: [2067899183,]},
{src: "tire", dest: "unselfish", count: 1, people: [2067899183,]},
],
"basic":[
{src: "preppi", dest: "basic", count: 1, people: [813306895,]},
{src: "rug", dest: "basic", count: 1, people: [813306895,]},
{src: "hillbilli", dest: "basic", count: 1, people: [813306895,]},
{src: "artsi", dest: "basic", count: 1, people: [813306895,]},
{src: "punk", dest: "basic", count: 1, people: [813306895,]},
],
"commit":[
{src: "good", dest: "commit", count: 1, people: [1459922102,]},
{src: "positive-idealist", dest: "commit", count: 1, people: [1459922102,]},
],
"artsi":[
],
"interest":[
{src: "good", dest: "interest", count: 1, people: [1459922102,]},
{src: "positive-idealist", dest: "interest", count: 1, people: [1459922102,]},
],
"funni":[
],
"dark":[
],
"old-fashion":[
{src: "same", dest: "old-fashion", count: 1, people: [362029778,]},
{src: "funni", dest: "old-fashion", count: 1, people: [362029778,]},
{src: "romant", dest: "old-fashion", count: 1, people: [362029778,]},
{src: "warm", dest: "old-fashion", count: 1, people: [362029778,]},
{src: "intellig", dest: "old-fashion", count: 1, people: [362029778,]},
{src: "interest", dest: "old-fashion", count: 1, people: [362029778,]},
{src: "honest", dest: "old-fashion", count: 1, people: [362029778,]},
{src: "real", dest: "old-fashion", count: 1, people: [362029778,]},
],
"younger":[
{src: "dark", dest: "younger", count: 1, people: [1985391866,]},
{src: "clean", dest: "younger", count: 1, people: [1985391866,]},
{src: "own", dest: "younger", count: 1, people: [1985391866,]},
{src: "short", dest: "younger", count: 1, people: [1985391866,]},
{src: "black", dest: "younger", count: 1, people: [1985391866,]},
{src: "funni", dest: "younger", count: 1, people: [1985391866,]},
{src: "better", dest: "younger", count: 1, people: [1985391866,]},
{src: "more", dest: "younger", count: 1, people: [1985391866,]},
{src: "hard-work", dest: "younger", count: 1, people: [1985391866,]},
{src: "quiet", dest: "younger", count: 1, people: [1985391866,]},
{src: "romant", dest: "younger", count: 1, people: [1985391866,]},
{src: "tall", dest: "younger", count: 1, people: [1985391866,]},
{src: "thick-heavi", dest: "younger", count: 1, people: [1985391866,]},
],
"video":[
],
"black":[
],
"sure":[
],
"shallow":[
],
"self-suffici":[
],
"part-tim":[
],
"hard-work":[
],
"signific":[
],
"open-mind":[
],
"quiet":[
],
"attract":[
],
"marri":[
{src: "quick-wit", dest: "marri", count: 1, people: [815019603,]},
{src: "open-mind", dest: "marri", count: 1, people: [815019603,]},
{src: "sarcast", dest: "marri", count: 1, people: [815019603,]},
{src: "blond", dest: "marri", count: 1, people: [815019603,]},
{src: "spontan", dest: "marri", count: 1, people: [815019603,]},
{src: "singl", dest: "marri", count: 1, people: [107130125,]},
{src: "old", dest: "marri", count: 1, people: [107130125,]},
{src: "part-tim", dest: "marri", count: 1, people: [107130125,]},
{src: "tire", dest: "marri", count: 1, people: [2067899183,]},
{src: "inlov", dest: "marri", count: 1, people: [2067899183,]},
{src: "blue-green", dest: "marri", count: 1, people: [815019603,]},
{src: "full", dest: "marri", count: 1, people: [107130125,]},
{src: "self-suffici", dest: "marri", count: 1, people: [815019603,]},
],
"tire":[
],
"inlov":[
],
"afraid":[
{src: "positive-idealist", dest: "afraid", count: 1, people: [1459922102,]},
{src: "good", dest: "afraid", count: 1, people: [1459922102,]},
],
"positive-idealist":[
],
"outgo":[
],
"explicit":[
{src: "singl", dest: "explicit", count: 1, people: [107130125,]},
{src: "old", dest: "explicit", count: 1, people: [107130125,]},
{src: "part-tim", dest: "explicit", count: 1, people: [107130125,]},
{src: "full", dest: "explicit", count: 1, people: [107130125,]},
],
"strong":[
{src: "inlov", dest: "strong", count: 1, people: [2067899183,]},
{src: "tire", dest: "strong", count: 1, people: [2067899183,]},
],
"better":[
],
"preppi":[
],
"blue-green":[
],
"own":[
],
"spontan":[
],
"posit":[
{src: "singl", dest: "posit", count: 1, people: [107130125,]},
{src: "part-tim", dest: "posit", count: 1, people: [107130125,]},
{src: "old", dest: "posit", count: 1, people: [107130125,]},
{src: "full", dest: "posit", count: 1, people: [107130125,]},
],
"compat":[
],
"femal":[
{src: "simpl", dest: "femal", count: 2, people: [1120490363,1120490363,]},
{src: "blockbust", dest: "femal", count: 1, people: [1120490363,]},
{src: "more", dest: "femal", count: 1, people: [1120490363,]},
{src: "quiet", dest: "femal", count: 1, people: [1120490363,]},
{src: "video", dest: "femal", count: 1, people: [1120490363,]},
],
"romant":[
],
"rug":[
],
"other":[
],
"suc":[
{src: "tire", dest: "suc", count: 1, people: [2067899183,]},
{src: "inlov", dest: "suc", count: 1, people: [2067899183,]},
],
"warm":[
],
"most":[
{src: "inlov", dest: "most", count: 1, people: [2067899183,]},
{src: "tire", dest: "most", count: 1, people: [2067899183,]},
],
"thick-heavi":[
],
"punk":[
],
"short":[
],
"real":[
],
"clean":[
],
"easi":[
{src: "new", dest: "easi", count: 1, people: [1588859510,]},
],
"full":[
],
"beauti":[
{src: "tire", dest: "beauti", count: 1, people: [2067899183,]},
{src: "inlov", dest: "beauti", count: 1, people: [2067899183,]},
],
"materialist":[
],
"passion":[
{src: "tire", dest: "passion", count: 1, people: [2067899183,]},
{src: "inlov", dest: "passion", count: 1, people: [2067899183,]},
],
"hard":[
{src: "most", dest: "hard", count: 1, people: [1363395619,]},
{src: "high", dest: "hard", count: 1, people: [1363395619,]},
{src: "tire", dest: "hard", count: 1, people: [1363395619,]},
{src: "materialist", dest: "hard", count: 1, people: [1363395619,]},
{src: "shallow", dest: "hard", count: 1, people: [1363395619,]},
{src: "attract", dest: "hard", count: 1, people: [1363395619,]},
],
"major":[
],
"tall":[
{src: "inlov", dest: "tall", count: 1, people: [2067899183,]},
{src: "tire", dest: "tall", count: 1, people: [2067899183,]},
],
"sarcast":[
],
"hillbilli":[
],
"happi":[
{src: "singl", dest: "happi", count: 1, people: [107130125,]},
{src: "old", dest: "happi", count: 1, people: [107130125,]},
{src: "full", dest: "happi", count: 1, people: [107130125,]},
{src: "part-tim", dest: "happi", count: 1, people: [107130125,]},
],
"physic":[
],
"divorc":[
{src: "singl", dest: "divorc", count: 1, people: [107130125,]},
{src: "part-tim", dest: "divorc", count: 1, people: [107130125,]},
{src: "full", dest: "divorc", count: 1, people: [107130125,]},
{src: "old", dest: "divorc", count: 1, people: [107130125,]},
],
"new":[
{src: "good", dest: "new", count: 1, people: [933048171,]},
{src: "nice", dest: "new", count: 1, people: [933048171,]},
],
"orient":[
{src: "full", dest: "orient", count: 1, people: [107130125,]},
{src: "part-tim", dest: "orient", count: 1, people: [107130125,]},
{src: "old", dest: "orient", count: 1, people: [107130125,]},
{src: "singl", dest: "orient", count: 1, people: [107130125,]},
],
"quick-wit":[
],
"fanci":[
{src: "shallow", dest: "fanci", count: 1, people: [1363395619,]},
{src: "tire", dest: "fanci", count: 1, people: [1363395619,]},
{src: "most", dest: "fanci", count: 1, people: [1363395619,]},
{src: "materialist", dest: "fanci", count: 1, people: [1363395619,]},
{src: "attract", dest: "fanci", count: 1, people: [1363395619,]},
{src: "high", dest: "fanci", count: 1, people: [1363395619,]},
],
"attach":[
{src: "old", dest: "attach", count: 1, people: [107130125,]},
{src: "singl", dest: "attach", count: 1, people: [107130125,]},
{src: "part-tim", dest: "attach", count: 1, people: [107130125,]},
{src: "full", dest: "attach", count: 1, people: [107130125,]},
],
"career-ori":[
],
"high":[
{src: "new", dest: "high", count: 1, people: [2073285362,]},
{src: "blond", dest: "high", count: 1, people: [2073285362,]},
{src: "nice", dest: "high", count: 1, people: [2073285362,]},
{src: "sexi", dest: "high", count: 1, people: [2073285362,]},
{src: "sociabl", dest: "high", count: 1, people: [2073285362,]},
{src: "financi", dest: "high", count: 1, people: [2073285362,]},
{src: "attract", dest: "high", count: 1, people: [2073285362,]},
{src: "major", dest: "high", count: 1, people: [2073285362,]},
{src: "outgo", dest: "high", count: 1, people: [2073285362,]},
{src: "compat", dest: "high", count: 1, people: [2073285362,]},
],
"sociabl":[
],
"financi":[
],
};
outedges = {
"hairi":[
{src: "hairi", dest: "good", count: 1, people: [2053544335,]},
],
"old":[
{src: "old", dest: "attach", count: 1, people: [107130125,]},
{src: "old", dest: "explicit", count: 1, people: [107130125,]},
{src: "old", dest: "happi", count: 1, people: [107130125,]},
{src: "old", dest: "posit", count: 1, people: [107130125,]},
{src: "old", dest: "orient", count: 1, people: [107130125,]},
{src: "old", dest: "marri", count: 1, people: [107130125,]},
{src: "old", dest: "divorc", count: 1, people: [107130125,]},
{src: "old", dest: "good", count: 1, people: [107130125,]},
],
"sexi":[
{src: "sexi", dest: "high", count: 1, people: [2073285362,]},
],
"simpl":[
{src: "simpl", dest: "femal", count: 2, people: [1120490363,1120490363,]},
],
"singl":[
{src: "singl", dest: "posit", count: 1, people: [107130125,]},
{src: "singl", dest: "explicit", count: 1, people: [107130125,]},
{src: "singl", dest: "happi", count: 1, people: [107130125,]},
{src: "singl", dest: "divorc", count: 1, people: [107130125,]},
{src: "singl", dest: "marri", count: 1, people: [107130125,]},
{src: "singl", dest: "attach", count: 1, people: [107130125,]},
{src: "singl", dest: "orient", count: 1, people: [107130125,]},
{src: "singl", dest: "good", count: 1, people: [107130125,]},
],
"intellig":[
{src: "intellig", dest: "old-fashion", count: 1, people: [362029778,]},
],
"blond":[
{src: "blond", dest: "high", count: 1, people: [2073285362,]},
{src: "blond", dest: "marri", count: 1, people: [815019603,]},
],
"mesomeon":[
],
"nice":[
{src: "nice", dest: "high", count: 1, people: [2073285362,]},
{src: "nice", dest: "new", count: 1, people: [933048171,]},
],
"good":[
{src: "good", dest: "new", count: 1, people: [933048171,]},
{src: "good", dest: "commit", count: 1, people: [1459922102,]},
{src: "good", dest: "interest", count: 1, people: [1459922102,]},
{src: "good", dest: "afraid", count: 1, people: [1459922102,]},
],
"same":[
{src: "same", dest: "old-fashion", count: 1, people: [362029778,]},
],
"honest":[
{src: "honest", dest: "old-fashion", count: 1, people: [362029778,]},
],
"free":[
],
"more":[
{src: "more", dest: "femal", count: 1, people: [1120490363,]},
{src: "more", dest: "younger", count: 1, people: [1985391866,]},
],
"blockbust":[
{src: "blockbust", dest: "femal", count: 1, people: [1120490363,]},
],
"unselfish":[
],
"basic":[
],
"commit":[
],
"artsi":[
{src: "artsi", dest: "basic", count: 1, people: [813306895,]},
],
"interest":[
{src: "interest", dest: "old-fashion", count: 1, people: [362029778,]},
],
"funni":[
{src: "funni", dest: "old-fashion", count: 1, people: [362029778,]},
{src: "funni", dest: "younger", count: 1, people: [1985391866,]},
],
"dark":[
{src: "dark", dest: "younger", count: 1, people: [1985391866,]},
],
"old-fashion":[
],
"younger":[
],
"video":[
{src: "video", dest: "femal", count: 1, people: [1120490363,]},
],
"black":[
{src: "black", dest: "younger", count: 1, people: [1985391866,]},
],
"sure":[
{src: "sure", dest: "good", count: 1, people: [2053544335,]},
],
"shallow":[
{src: "shallow", dest: "fanci", count: 1, people: [1363395619,]},
{src: "shallow", dest: "nice", count: 1, people: [1363395619,]},
{src: "shallow", dest: "hard", count: 1, people: [1363395619,]},
],
"self-suffici":[
{src: "self-suffici", dest: "marri", count: 1, people: [815019603,]},
],
"part-tim":[
{src: "part-tim", dest: "posit", count: 1, people: [107130125,]},
{src: "part-tim", dest: "orient", count: 1, people: [107130125,]},
{src: "part-tim", dest: "divorc", count: 1, people: [107130125,]},
{src: "part-tim", dest: "explicit", count: 1, people: [107130125,]},
{src: "part-tim", dest: "happi", count: 1, people: [107130125,]},
{src: "part-tim", dest: "marri", count: 1, people: [107130125,]},
{src: "part-tim", dest: "attach", count: 1, people: [107130125,]},
{src: "part-tim", dest: "good", count: 1, people: [107130125,]},
],
"hard-work":[
{src: "hard-work", dest: "younger", count: 1, people: [1985391866,]},
],
"signific":[
{src: "signific", dest: "singl", count: 1, people: [299608569,]},
],
"open-mind":[
{src: "open-mind", dest: "marri", count: 1, people: [815019603,]},
],
"quiet":[
{src: "quiet", dest: "femal", count: 1, people: [1120490363,]},
{src: "quiet", dest: "younger", count: 1, people: [1985391866,]},
],
"attract":[
{src: "attract", dest: "nice", count: 1, people: [1363395619,]},
{src: "attract", dest: "fanci", count: 1, people: [1363395619,]},
{src: "attract", dest: "high", count: 1, people: [2073285362,]},
{src: "attract", dest: "hard", count: 1, people: [1363395619,]},
],
"marri":[
],
"tire":[
{src: "tire", dest: "honest", count: 1, people: [2067899183,]},
{src: "tire", dest: "nice", count: 1, people: [1363395619,]},
{src: "tire", dest: "passion", count: 1, people: [2067899183,]},
{src: "tire", dest: "beauti", count: 1, people: [2067899183,]},
{src: "tire", dest: "strong", count: 1, people: [2067899183,]},
{src: "tire", dest: "suc", count: 1, people: [2067899183,]},
{src: "tire", dest: "hard", count: 1, people: [1363395619,]},
{src: "tire", dest: "fanci", count: 1, people: [1363395619,]},
{src: "tire", dest: "most", count: 1, people: [2067899183,]},
{src: "tire", dest: "unselfish", count: 1, people: [2067899183,]},
{src: "tire", dest: "marri", count: 1, people: [2067899183,]},
{src: "tire", dest: "good", count: 1, people: [2067899183,]},
{src: "tire", dest: "mesomeon", count: 1, people: [2067899183,]},
{src: "tire", dest: "tall", count: 1, people: [2067899183,]},
],
"inlov":[
{src: "inlov", dest: "mesomeon", count: 1, people: [2067899183,]},
{src: "inlov", dest: "tall", count: 1, people: [2067899183,]},
{src: "inlov", dest: "strong", count: 1, people: [2067899183,]},
{src: "inlov", dest: "honest", count: 1, people: [2067899183,]},
{src: "inlov", dest: "most", count: 1, people: [2067899183,]},
{src: "inlov", dest: "passion", count: 1, people: [2067899183,]},
{src: "inlov", dest: "unselfish", count: 1, people: [2067899183,]},
{src: "inlov", dest: "marri", count: 1, people: [2067899183,]},
{src: "inlov", dest: "beauti", count: 1, people: [2067899183,]},
{src: "inlov", dest: "suc", count: 1, people: [2067899183,]},
{src: "inlov", dest: "good", count: 1, people: [2067899183,]},
],
"afraid":[
],
"positive-idealist":[
{src: "positive-idealist", dest: "afraid", count: 1, people: [1459922102,]},
{src: "positive-idealist", dest: "interest", count: 1, people: [1459922102,]},
{src: "positive-idealist", dest: "commit", count: 1, people: [1459922102,]},
],
"outgo":[
{src: "outgo", dest: "high", count: 1, people: [2073285362,]},
],
"explicit":[
],
"strong":[
],
"better":[
{src: "better", dest: "younger", count: 1, people: [1985391866,]},
],
"preppi":[
{src: "preppi", dest: "basic", count: 1, people: [813306895,]},
],
"blue-green":[
{src: "blue-green", dest: "marri", count: 1, people: [815019603,]},
],
"own":[
{src: "own", dest: "younger", count: 1, people: [1985391866,]},
],
"spontan":[
{src: "spontan", dest: "marri", count: 1, people: [815019603,]},
],
"posit":[
],
"compat":[
{src: "compat", dest: "high", count: 1, people: [2073285362,]},
],
"femal":[
],
"romant":[
{src: "romant", dest: "old-fashion", count: 1, people: [362029778,]},
{src: "romant", dest: "younger", count: 1, people: [1985391866,]},
],
"rug":[
{src: "rug", dest: "basic", count: 1, people: [813306895,]},
],
"other":[
{src: "other", dest: "singl", count: 1, people: [299608569,]},
],
"suc":[
],
"warm":[
{src: "warm", dest: "old-fashion", count: 1, people: [362029778,]},
],
"most":[
{src: "most", dest: "hard", count: 1, people: [1363395619,]},
{src: "most", dest: "nice", count: 1, people: [1363395619,]},
{src: "most", dest: "fanci", count: 1, people: [1363395619,]},
],
"thick-heavi":[
{src: "thick-heavi", dest: "younger", count: 1, people: [1985391866,]},
],
"punk":[
{src: "punk", dest: "basic", count: 1, people: [813306895,]},
],
"short":[
{src: "short", dest: "younger", count: 1, people: [1985391866,]},
],
"real":[
{src: "real", dest: "old-fashion", count: 1, people: [362029778,]},
],
"clean":[
{src: "clean", dest: "younger", count: 1, people: [1985391866,]},
],
"easi":[
],
"full":[
{src: "full", dest: "orient", count: 1, people: [107130125,]},
{src: "full", dest: "posit", count: 1, people: [107130125,]},
{src: "full", dest: "happi", count: 1, people: [107130125,]},
{src: "full", dest: "divorc", count: 1, people: [107130125,]},
{src: "full", dest: "explicit", count: 1, people: [107130125,]},
{src: "full", dest: "good", count: 1, people: [107130125,]},
{src: "full", dest: "marri", count: 1, people: [107130125,]},
{src: "full", dest: "attach", count: 1, people: [107130125,]},
],
"beauti":[
],
"materialist":[
{src: "materialist", dest: "nice", count: 1, people: [1363395619,]},
{src: "materialist", dest: "hard", count: 1, people: [1363395619,]},
{src: "materialist", dest: "fanci", count: 1, people: [1363395619,]},
],
"passion":[
],
"hard":[
],
"major":[
{src: "major", dest: "high", count: 1, people: [2073285362,]},
],
"tall":[
{src: "tall", dest: "younger", count: 1, people: [1985391866,]},
],
"sarcast":[
{src: "sarcast", dest: "marri", count: 1, people: [815019603,]},
],
"hillbilli":[
{src: "hillbilli", dest: "basic", count: 1, people: [813306895,]},
],
"happi":[
],
"physic":[
{src: "physic", dest: "singl", count: 1, people: [299608569,]},
],
"divorc":[
],
"new":[
{src: "new", dest: "high", count: 1, people: [2073285362,]},
{src: "new", dest: "free", count: 1, people: [1588859510,]},
{src: "new", dest: "easi", count: 1, people: [1588859510,]},
],
"orient":[
],
"quick-wit":[
{src: "quick-wit", dest: "marri", count: 1, people: [815019603,]},
],
"fanci":[
],
"attach":[
],
"career-ori":[
{src: "career-ori", dest: "good", count: 1, people: [2053544335,]},
],
"high":[
{src: "high", dest: "hard", count: 1, people: [1363395619,]},
{src: "high", dest: "nice", count: 1, people: [1363395619,]},
{src: "high", dest: "fanci", count: 1, people: [1363395619,]},
],
"sociabl":[
{src: "sociabl", dest: "high", count: 1, people: [2073285362,]},
],
"financi":[
{src: "financi", dest: "high", count: 1, people: [2073285362,]},
],
};
people = {
815019603:{age: 0, gender: 0, location: "atlanta", iam: "i am seeking a man who enjoys life. i am a swf, 5'3', curly blonde hair with blue-green eyes and yes gentlemen, i am a bbw. i am open-minded, spontaneous, quick-witted, have a rather sarcastic sense of humor, and like you should be, i am self-sufficient.", looking: "i am looking for a swm; sorry no married men need apply.", title: "seeking mature swm", },
299608569:{age: 0, gender: 0, location: "atlanta", iam: "i am in a relationship and am lacking the physical attention i desire from  my significant other.", looking: "i am looking for a man, preferably single,  to become friends, get to know and potentially fill that void that is missing from my life.", title: "i need  a fwb right away", },
813306895:{age: 0, gender: 0, location: "atlanta", iam: "i am attracted to rugged or preppy guys, not artsy, punk or hillbilly.", looking: "i am looking for will read through this and recognize the things i am asking for are pretty basic and it describes him.", title: "looking for specifics....", },
107130125:{age: 0, gender: 0, location: "atlanta", iam: "i am 24 yrs - old single (no attachment issues) female with no children. i am college student pursuing a degree in accounting with a year and half left of school. i am an accountant intern part-time with a full time job in manufacturing.", looking: "i am looking for a man with: ? no children? no married, divorced or attached man ? no smoker? happy & positive ? good conversation ? career oriented? ages: 25-30? all men are welcomeplease no explicit emails.", title: "try me...............petite,smart &amp; sexy", },
1985391866:{age: 0, gender: 1, location: "atlanta", iam: "i am black male that have a job, have my own place, have a car and no kids. i am caring, hard-working, romantic, like to cook, trustworthy and funny person. i am a more of a homebody; i will prefer to have a quiet evening at home better than going to the club or bars. i am 6 feet tall, dark skin, short hair, very clean cut, and i am on the thick-heavy side(i have meat on my bones).", looking: "i am looking for female that is between the age of 27 and 48 that will not mind a company of a younger man.", title: "young black male seekin a mature older female", },
2067899183:{age: 0, gender: 0, location: "atlanta", iam: "i am not inlove anymore. i am still waiting for my flowers. i am tired of crying and being depressed.", looking: "i am looking for:a person that understand that i am married and getting a divorcesomeone that can make me laugh and says i am beautiful an honest person that has strong family valuesa goal oriented man that has dreams even though he accomplished most of them and can share his thoughts with me. i am looking for a tall man from 5\"10 and upsomeone that like all types of musicsomeone that will sing karaoke with me drunksomeone that likes sports and can show me how to play bball and maybe golf ?soemone that gives me attention but does not smother mesomeone that will love me or grow to love the person i amsomeone that believs in giving back to there communitysomone who is unselfish and wants to know what i want in life and helps me succed instead of draining everything about mesomeone who can make passionate love to me for years to comesomeone who allows me to be openminded and not offended by it \"bi\"someone who believs in mesomeone with a good jobsomeone who loves there jobsomeone who does not live in there parents basementsomeone that wants to know how my day wentsomeone who can save me from myself.", title: "one mans junk is, another mans treasure", },
1588859510:{age: 0, gender: 0, location: "atlanta", iam: "i am new to this so  go easy on me.", looking: "i am free and easy with my body or anything, but i am looking for some needs to be met.", title: "sweet and sexy single female looking for dates in atlanta", },
1120490363:{age: 0, gender: 1, location: "atlanta", iam: "i am more of the type of person that will like to stay at home and do blockbuster nights, play video games, or do a card games (poker or spades). i am the quiet and simple person that likes to do simple things in life.", looking: "i am looking for female friend with benefits to get to know and to chill with time to time.", title: "looking for a female friend to chill with", },
2073285362:{age: 0, gender: 0, location: "atlanta", iam: "i am accustomed to the finerthings in life and wish to be accomodated by a man who is notintimidated by my standard of living. i am 35, 5'7\", 140 and a consultant fora major financial instituation. i am a nice mix of all of the worlds of wonder. i am educated , but not a bookworm. i am attractive, but not a blonde without brains. i am seeking a sexy charmer for a compatible relationship filled with fun and companionship. i am in a sociable mood. i am very outgoing and love to meet new people who i can learn from.", looking: "i am looking for a ugar daddy in the atlantaarea to pamper and hold in high esteem.", title: "let me be your new year's resolution!", },
362029778:{age: 0, gender: 0, location: "atlanta", iam: "i am a swf,46, who is warm, funny, honest, romantic, and intelligent, and i am searching for a swm,43-52,with the same qualities for a ltr. i am searching for my soul mate. i am interested in the real person, not the packaging.", looking: "i am looking for an old-fashioned man who believes that he wears the pants in the relationship, and believes that he has the right to put his lady over his knee for any reason.", title: "search for knight with a strong hand", },
1363395619:{age: 0, gender: 0, location: "atlanta", iam: "i am tired of it. i am an attractive woman, and because of that men think that i am either: taken, shallow, materialistic or high maintenence. i am definately none of those things. i am one of the most down to earth people you will ever meet.", looking: "i am looking for someone tall (because i am 5'10\"), dark (thats just what i like) with a nice smile, motivation, a job (doesn't have to be anything fancy but i work hard, and i need someone who can relate to that).", title: "need a man for the new year", },
2053544335:{age: 0, gender: 0, location: "atlanta", iam: "i am not sure about that one!! still looking. i am currently trying to be a firefighter so i do allot of studying, but i need breaks to enjoy life. i am not into the hairy body types ie. i am very career-oriented.", looking: "i am looking for a good friend first and well if the chemistry is there.", title: "lets talk and get to know each other first", },
1459922102:{age: 0, gender: 0, location: "atlanta", iam: "i am at the point in my life that i would like to someday settle down and have a family (and no, that doesn't mean tomorrow). i am a very positive-idealist type of person and try to see the good in every person and situation.", looking: "i am looking for someone who is interested in a committed relationship and not afraid of the what the future may hold.", title: "do i really need an intro line", },
933048171:{age: 0, gender: 0, location: "atlanta", iam: "i am 5\" 7 120 lbs, love to go out to movies, football and play video games, i have a nice body (love my butt) and my looks are good. i am looking to meet a guy asap, i do not really care how you look, if you are a fun lovin guy (who does not cheat on girls) send me an email.", looking: "i am looking for a new friend (date). i am looking for fun guys who love to go out and party, i work and go to school but the weekends are mine, i do not smoke but i do drink and i have no kids.", title: "new in town looking for a friend or more..", },
};
stems = {
"hairi": "hairy",
"sexi": "sexy",
"singl": "single",
"blond": "blonde",
"mesomeon": "mesomeone",
"nice": "nice",
"amateur": "amateur",
"blunt": "blunt",
"abl": "able",
"open": "open",
"free": "free",
"blockbust": "blockbuster",
"artsi": "artsy",
"funni": "funny",
"interest": "interested",
"old-fashion": "old-fashioned",
"right": "right",
"video": "video",
"black": "black",
"cool": "cool",
"affection": "affectionate",
"multipl": "multiple",
"extra": "extra",
"part-tim": "part-time",
"hard-work": "hard-working",
"random": "random",
"busti": "busty",
"open-mind": "open-minded",
"petit": "petite",
"quiet": "quiet",
"selfless": "selfless",
"attract": "attractive",
"few": "few",
"outgo": "outgoing",
"afraid": "afraid",
"explicit": "explicit",
"preppi": "preppy",
"will": "willing",
"own": "own",
"big": "big",
"posit": "positive",
"readi": "ready",
"decent": "decent",
"romant": "romantic",
"rug": "rugged",
"enjoy-explor": "enjoy-explore",
"typic": "typical",
"most": "most",
"astrolog": "astrologically",
"thick-heavi": "thick-heavy",
"punk": "punk",
"short": "short",
"pleas": "please",
"clean": "clean",
"gorgou": "gorgous",
"realist": "realistic",
"casual": "casual",
"best": "best",
"mind": "minded",
"materialist": "materialistic",
"hard": "hard",
"sarcast": "sarcastic",
"sincer": "sincere",
"okai": "okay",
"happi": "happy",
"physic": "physical",
"healthi": "healthy",
"ambiti": "ambitious",
"sorri": "sorry",
"true": "true",
"lazi": "lazy",
"front": "front",
"i": "i",
"new": "new",
"attach": "attached",
"larg": "large",
"career-ori": "career-oriented",
"mid": "mid",
"sociabl": "sociable",
"multiraci": "multiracial",
"financi": "financial",
"motiv": "motivated",
"old": "old",
"simpl": "simple",
"non-materialist": "non-materialistic",
"intellig": "intelligent",
"natur": "natural",
"kate": "kate",
"good": "good",
"honest": "honest",
"same": "same",
"emploi": "employed",
"uniqu": "unique",
"more": "more",
"brillant": "brillant",
"unselfish": "unselfish",
"basic": "basic",
"rare": "rare",
"commit": "committed",
"dark": "dark",
"younger": "younger",
"sure": "sure",
"work": "working",
"matur": "mature",
"shallow": "shallow",
"self-suffici": "self-sufficient",
"fat": "fat",
"signific": "significant",
"white": "white",
"fun": "fun",
"marri": "married",
"tire": "tired",
"sweet": "sweet",
"positive-idealist": "positive-idealist",
"inlov": "inlove",
"thick": "thick",
"strong": "strong",
"better": "better",
"blue-green": "blue-green",
"odd": "odd",
"spontan": "spontaneous",
"compat": "compatible",
"femal": "female",
"benefici": "beneficial",
"warm": "warm",
"other": "other",
"suc": "succed",
"crazi": "crazy",
"african": "african",
"occasion": "occasional",
"ass": "ass",
"housekeep": "housekeeping",
"real": "real",
"easi": "easy",
"full": "full",
"beauti": "beautiful",
"exclus": "exclusive",
"passion": "passionate",
"tall": "tall",
"major": "major",
"hillbilli": "hillbilly",
"rich": "rich",
"lame": "lame",
"divorc": "divorced",
"orient": "oriented",
"great": "great",
"quick-wit": "quick-witted",
"blue": "blue",
"fanci": "fancy",
"high": "high",
};
