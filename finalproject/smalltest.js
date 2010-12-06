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
{src: "other", dest: "singl", count: 1, people: [102016534,]},
{src: "physic", dest: "singl", count: 1, people: [102016534,]},
{src: "signific", dest: "singl", count: 1, people: [102016534,]},
],
"intellig":[
],
"blond":[
],
"mesomeon":[
{src: "inlov", dest: "mesomeon", count: 1, people: [450467833,]},
{src: "tire", dest: "mesomeon", count: 1, people: [450467833,]},
],
"nice":[
{src: "tire", dest: "nice", count: 1, people: [198563685,]},
{src: "attract", dest: "nice", count: 1, people: [198563685,]},
{src: "materialist", dest: "nice", count: 1, people: [198563685,]},
{src: "high", dest: "nice", count: 1, people: [198563685,]},
{src: "most", dest: "nice", count: 1, people: [198563685,]},
{src: "shallow", dest: "nice", count: 1, people: [198563685,]},
],
"good":[
{src: "sure", dest: "good", count: 1, people: [1330799835,]},
{src: "career-ori", dest: "good", count: 1, people: [1330799835,]},
{src: "old", dest: "good", count: 1, people: [1020053025,]},
{src: "full", dest: "good", count: 1, people: [1020053025,]},
{src: "hairi", dest: "good", count: 1, people: [1330799835,]},
{src: "tire", dest: "good", count: 1, people: [450467833,]},
{src: "singl", dest: "good", count: 1, people: [1020053025,]},
{src: "inlov", dest: "good", count: 1, people: [450467833,]},
{src: "part-tim", dest: "good", count: 1, people: [1020053025,]},
],
"same":[
],
"honest":[
{src: "tire", dest: "honest", count: 1, people: [450467833,]},
{src: "inlov", dest: "honest", count: 1, people: [450467833,]},
],
"free":[
{src: "new", dest: "free", count: 1, people: [669237174,]},
],
"more":[
],
"blockbust":[
],
"unselfish":[
{src: "inlov", dest: "unselfish", count: 1, people: [450467833,]},
{src: "tire", dest: "unselfish", count: 1, people: [450467833,]},
],
"basic":[
{src: "preppi", dest: "basic", count: 1, people: [299608569,]},
{src: "rug", dest: "basic", count: 1, people: [299608569,]},
{src: "hillbilli", dest: "basic", count: 1, people: [299608569,]},
{src: "artsi", dest: "basic", count: 1, people: [299608569,]},
{src: "punk", dest: "basic", count: 1, people: [299608569,]},
],
"commit":[
{src: "good", dest: "commit", count: 1, people: [1626054413,]},
{src: "positive-idealist", dest: "commit", count: 1, people: [1626054413,]},
],
"artsi":[
],
"interest":[
{src: "good", dest: "interest", count: 1, people: [1626054413,]},
{src: "positive-idealist", dest: "interest", count: 1, people: [1626054413,]},
],
"funni":[
],
"dark":[
],
"old-fashion":[
{src: "same", dest: "old-fashion", count: 1, people: [2111597213,]},
{src: "funni", dest: "old-fashion", count: 1, people: [2111597213,]},
{src: "romant", dest: "old-fashion", count: 1, people: [2111597213,]},
{src: "warm", dest: "old-fashion", count: 1, people: [2111597213,]},
{src: "intellig", dest: "old-fashion", count: 1, people: [2111597213,]},
{src: "interest", dest: "old-fashion", count: 1, people: [2111597213,]},
{src: "honest", dest: "old-fashion", count: 1, people: [2111597213,]},
{src: "real", dest: "old-fashion", count: 1, people: [2111597213,]},
],
"younger":[
{src: "dark", dest: "younger", count: 1, people: [1984642955,]},
{src: "clean", dest: "younger", count: 1, people: [1984642955,]},
{src: "own", dest: "younger", count: 1, people: [1984642955,]},
{src: "short", dest: "younger", count: 1, people: [1984642955,]},
{src: "black", dest: "younger", count: 1, people: [1984642955,]},
{src: "funni", dest: "younger", count: 1, people: [1984642955,]},
{src: "better", dest: "younger", count: 1, people: [1984642955,]},
{src: "more", dest: "younger", count: 1, people: [1984642955,]},
{src: "hard-work", dest: "younger", count: 1, people: [1984642955,]},
{src: "quiet", dest: "younger", count: 1, people: [1984642955,]},
{src: "romant", dest: "younger", count: 1, people: [1984642955,]},
{src: "tall", dest: "younger", count: 1, people: [1984642955,]},
{src: "thick-heavi", dest: "younger", count: 1, people: [1984642955,]},
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
{src: "quick-wit", dest: "marri", count: 1, people: [1936831046,]},
{src: "open-mind", dest: "marri", count: 1, people: [1936831046,]},
{src: "sarcast", dest: "marri", count: 1, people: [1936831046,]},
{src: "blond", dest: "marri", count: 1, people: [1936831046,]},
{src: "spontan", dest: "marri", count: 1, people: [1936831046,]},
{src: "singl", dest: "marri", count: 1, people: [1020053025,]},
{src: "old", dest: "marri", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "marri", count: 1, people: [1020053025,]},
{src: "tire", dest: "marri", count: 1, people: [450467833,]},
{src: "inlov", dest: "marri", count: 1, people: [450467833,]},
{src: "blue-green", dest: "marri", count: 1, people: [1936831046,]},
{src: "full", dest: "marri", count: 1, people: [1020053025,]},
{src: "self-suffici", dest: "marri", count: 1, people: [1936831046,]},
],
"tire":[
],
"inlov":[
],
"afraid":[
{src: "positive-idealist", dest: "afraid", count: 1, people: [1626054413,]},
{src: "good", dest: "afraid", count: 1, people: [1626054413,]},
],
"positive-idealist":[
],
"outgo":[
],
"explicit":[
{src: "singl", dest: "explicit", count: 1, people: [1020053025,]},
{src: "old", dest: "explicit", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "explicit", count: 1, people: [1020053025,]},
{src: "full", dest: "explicit", count: 1, people: [1020053025,]},
],
"strong":[
{src: "inlov", dest: "strong", count: 1, people: [450467833,]},
{src: "tire", dest: "strong", count: 1, people: [450467833,]},
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
{src: "singl", dest: "posit", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "posit", count: 1, people: [1020053025,]},
{src: "old", dest: "posit", count: 1, people: [1020053025,]},
{src: "full", dest: "posit", count: 1, people: [1020053025,]},
],
"compat":[
],
"femal":[
{src: "simpl", dest: "femal", count: 2, people: [430470043,430470043,]},
{src: "blockbust", dest: "femal", count: 1, people: [430470043,]},
{src: "more", dest: "femal", count: 1, people: [430470043,]},
{src: "quiet", dest: "femal", count: 1, people: [430470043,]},
{src: "video", dest: "femal", count: 1, people: [430470043,]},
],
"romant":[
],
"rug":[
],
"other":[
],
"suc":[
{src: "tire", dest: "suc", count: 1, people: [450467833,]},
{src: "inlov", dest: "suc", count: 1, people: [450467833,]},
],
"warm":[
],
"most":[
{src: "inlov", dest: "most", count: 1, people: [450467833,]},
{src: "tire", dest: "most", count: 1, people: [450467833,]},
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
{src: "new", dest: "easi", count: 1, people: [669237174,]},
],
"full":[
],
"beauti":[
{src: "tire", dest: "beauti", count: 1, people: [450467833,]},
{src: "inlov", dest: "beauti", count: 1, people: [450467833,]},
],
"materialist":[
],
"passion":[
{src: "tire", dest: "passion", count: 1, people: [450467833,]},
{src: "inlov", dest: "passion", count: 1, people: [450467833,]},
],
"hard":[
{src: "most", dest: "hard", count: 1, people: [198563685,]},
{src: "high", dest: "hard", count: 1, people: [198563685,]},
{src: "tire", dest: "hard", count: 1, people: [198563685,]},
{src: "materialist", dest: "hard", count: 1, people: [198563685,]},
{src: "shallow", dest: "hard", count: 1, people: [198563685,]},
{src: "attract", dest: "hard", count: 1, people: [198563685,]},
],
"major":[
],
"tall":[
{src: "inlov", dest: "tall", count: 1, people: [450467833,]},
{src: "tire", dest: "tall", count: 1, people: [450467833,]},
],
"sarcast":[
],
"hillbilli":[
],
"happi":[
{src: "singl", dest: "happi", count: 1, people: [1020053025,]},
{src: "old", dest: "happi", count: 1, people: [1020053025,]},
{src: "full", dest: "happi", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "happi", count: 1, people: [1020053025,]},
],
"physic":[
],
"divorc":[
{src: "singl", dest: "divorc", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "divorc", count: 1, people: [1020053025,]},
{src: "full", dest: "divorc", count: 1, people: [1020053025,]},
{src: "old", dest: "divorc", count: 1, people: [1020053025,]},
],
"new":[
{src: "good", dest: "new", count: 1, people: [688174510,]},
{src: "nice", dest: "new", count: 1, people: [688174510,]},
],
"orient":[
{src: "full", dest: "orient", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "orient", count: 1, people: [1020053025,]},
{src: "old", dest: "orient", count: 1, people: [1020053025,]},
{src: "singl", dest: "orient", count: 1, people: [1020053025,]},
],
"quick-wit":[
],
"fanci":[
{src: "shallow", dest: "fanci", count: 1, people: [198563685,]},
{src: "tire", dest: "fanci", count: 1, people: [198563685,]},
{src: "most", dest: "fanci", count: 1, people: [198563685,]},
{src: "materialist", dest: "fanci", count: 1, people: [198563685,]},
{src: "attract", dest: "fanci", count: 1, people: [198563685,]},
{src: "high", dest: "fanci", count: 1, people: [198563685,]},
],
"attach":[
{src: "old", dest: "attach", count: 1, people: [1020053025,]},
{src: "singl", dest: "attach", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "attach", count: 1, people: [1020053025,]},
{src: "full", dest: "attach", count: 1, people: [1020053025,]},
],
"career-ori":[
],
"high":[
{src: "new", dest: "high", count: 1, people: [627679685,]},
{src: "blond", dest: "high", count: 1, people: [627679685,]},
{src: "nice", dest: "high", count: 1, people: [627679685,]},
{src: "sexi", dest: "high", count: 1, people: [627679685,]},
{src: "sociabl", dest: "high", count: 1, people: [627679685,]},
{src: "financi", dest: "high", count: 1, people: [627679685,]},
{src: "attract", dest: "high", count: 1, people: [627679685,]},
{src: "major", dest: "high", count: 1, people: [627679685,]},
{src: "outgo", dest: "high", count: 1, people: [627679685,]},
{src: "compat", dest: "high", count: 1, people: [627679685,]},
],
"sociabl":[
],
"financi":[
],
};
outedges = {
"hairi":[
{src: "hairi", dest: "good", count: 1, people: [1330799835,]},
],
"old":[
{src: "old", dest: "attach", count: 1, people: [1020053025,]},
{src: "old", dest: "explicit", count: 1, people: [1020053025,]},
{src: "old", dest: "happi", count: 1, people: [1020053025,]},
{src: "old", dest: "posit", count: 1, people: [1020053025,]},
{src: "old", dest: "orient", count: 1, people: [1020053025,]},
{src: "old", dest: "marri", count: 1, people: [1020053025,]},
{src: "old", dest: "divorc", count: 1, people: [1020053025,]},
{src: "old", dest: "good", count: 1, people: [1020053025,]},
],
"sexi":[
{src: "sexi", dest: "high", count: 1, people: [627679685,]},
],
"simpl":[
{src: "simpl", dest: "femal", count: 2, people: [430470043,430470043,]},
],
"singl":[
{src: "singl", dest: "posit", count: 1, people: [1020053025,]},
{src: "singl", dest: "explicit", count: 1, people: [1020053025,]},
{src: "singl", dest: "happi", count: 1, people: [1020053025,]},
{src: "singl", dest: "divorc", count: 1, people: [1020053025,]},
{src: "singl", dest: "marri", count: 1, people: [1020053025,]},
{src: "singl", dest: "attach", count: 1, people: [1020053025,]},
{src: "singl", dest: "orient", count: 1, people: [1020053025,]},
{src: "singl", dest: "good", count: 1, people: [1020053025,]},
],
"intellig":[
{src: "intellig", dest: "old-fashion", count: 1, people: [2111597213,]},
],
"blond":[
{src: "blond", dest: "high", count: 1, people: [627679685,]},
{src: "blond", dest: "marri", count: 1, people: [1936831046,]},
],
"mesomeon":[
],
"nice":[
{src: "nice", dest: "high", count: 1, people: [627679685,]},
{src: "nice", dest: "new", count: 1, people: [688174510,]},
],
"good":[
{src: "good", dest: "new", count: 1, people: [688174510,]},
{src: "good", dest: "commit", count: 1, people: [1626054413,]},
{src: "good", dest: "interest", count: 1, people: [1626054413,]},
{src: "good", dest: "afraid", count: 1, people: [1626054413,]},
],
"same":[
{src: "same", dest: "old-fashion", count: 1, people: [2111597213,]},
],
"honest":[
{src: "honest", dest: "old-fashion", count: 1, people: [2111597213,]},
],
"free":[
],
"more":[
{src: "more", dest: "femal", count: 1, people: [430470043,]},
{src: "more", dest: "younger", count: 1, people: [1984642955,]},
],
"blockbust":[
{src: "blockbust", dest: "femal", count: 1, people: [430470043,]},
],
"unselfish":[
],
"basic":[
],
"commit":[
],
"artsi":[
{src: "artsi", dest: "basic", count: 1, people: [299608569,]},
],
"interest":[
{src: "interest", dest: "old-fashion", count: 1, people: [2111597213,]},
],
"funni":[
{src: "funni", dest: "old-fashion", count: 1, people: [2111597213,]},
{src: "funni", dest: "younger", count: 1, people: [1984642955,]},
],
"dark":[
{src: "dark", dest: "younger", count: 1, people: [1984642955,]},
],
"old-fashion":[
],
"younger":[
],
"video":[
{src: "video", dest: "femal", count: 1, people: [430470043,]},
],
"black":[
{src: "black", dest: "younger", count: 1, people: [1984642955,]},
],
"sure":[
{src: "sure", dest: "good", count: 1, people: [1330799835,]},
],
"shallow":[
{src: "shallow", dest: "fanci", count: 1, people: [198563685,]},
{src: "shallow", dest: "nice", count: 1, people: [198563685,]},
{src: "shallow", dest: "hard", count: 1, people: [198563685,]},
],
"self-suffici":[
{src: "self-suffici", dest: "marri", count: 1, people: [1936831046,]},
],
"part-tim":[
{src: "part-tim", dest: "posit", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "orient", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "divorc", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "explicit", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "happi", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "marri", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "attach", count: 1, people: [1020053025,]},
{src: "part-tim", dest: "good", count: 1, people: [1020053025,]},
],
"hard-work":[
{src: "hard-work", dest: "younger", count: 1, people: [1984642955,]},
],
"signific":[
{src: "signific", dest: "singl", count: 1, people: [102016534,]},
],
"open-mind":[
{src: "open-mind", dest: "marri", count: 1, people: [1936831046,]},
],
"quiet":[
{src: "quiet", dest: "femal", count: 1, people: [430470043,]},
{src: "quiet", dest: "younger", count: 1, people: [1984642955,]},
],
"attract":[
{src: "attract", dest: "nice", count: 1, people: [198563685,]},
{src: "attract", dest: "fanci", count: 1, people: [198563685,]},
{src: "attract", dest: "high", count: 1, people: [627679685,]},
{src: "attract", dest: "hard", count: 1, people: [198563685,]},
],
"marri":[
],
"tire":[
{src: "tire", dest: "honest", count: 1, people: [450467833,]},
{src: "tire", dest: "nice", count: 1, people: [198563685,]},
{src: "tire", dest: "passion", count: 1, people: [450467833,]},
{src: "tire", dest: "beauti", count: 1, people: [450467833,]},
{src: "tire", dest: "strong", count: 1, people: [450467833,]},
{src: "tire", dest: "suc", count: 1, people: [450467833,]},
{src: "tire", dest: "hard", count: 1, people: [198563685,]},
{src: "tire", dest: "fanci", count: 1, people: [198563685,]},
{src: "tire", dest: "most", count: 1, people: [450467833,]},
{src: "tire", dest: "unselfish", count: 1, people: [450467833,]},
{src: "tire", dest: "marri", count: 1, people: [450467833,]},
{src: "tire", dest: "good", count: 1, people: [450467833,]},
{src: "tire", dest: "mesomeon", count: 1, people: [450467833,]},
{src: "tire", dest: "tall", count: 1, people: [450467833,]},
],
"inlov":[
{src: "inlov", dest: "mesomeon", count: 1, people: [450467833,]},
{src: "inlov", dest: "tall", count: 1, people: [450467833,]},
{src: "inlov", dest: "strong", count: 1, people: [450467833,]},
{src: "inlov", dest: "honest", count: 1, people: [450467833,]},
{src: "inlov", dest: "most", count: 1, people: [450467833,]},
{src: "inlov", dest: "passion", count: 1, people: [450467833,]},
{src: "inlov", dest: "unselfish", count: 1, people: [450467833,]},
{src: "inlov", dest: "marri", count: 1, people: [450467833,]},
{src: "inlov", dest: "beauti", count: 1, people: [450467833,]},
{src: "inlov", dest: "suc", count: 1, people: [450467833,]},
{src: "inlov", dest: "good", count: 1, people: [450467833,]},
],
"afraid":[
],
"positive-idealist":[
{src: "positive-idealist", dest: "afraid", count: 1, people: [1626054413,]},
{src: "positive-idealist", dest: "interest", count: 1, people: [1626054413,]},
{src: "positive-idealist", dest: "commit", count: 1, people: [1626054413,]},
],
"outgo":[
{src: "outgo", dest: "high", count: 1, people: [627679685,]},
],
"explicit":[
],
"strong":[
],
"better":[
{src: "better", dest: "younger", count: 1, people: [1984642955,]},
],
"preppi":[
{src: "preppi", dest: "basic", count: 1, people: [299608569,]},
],
"blue-green":[
{src: "blue-green", dest: "marri", count: 1, people: [1936831046,]},
],
"own":[
{src: "own", dest: "younger", count: 1, people: [1984642955,]},
],
"spontan":[
{src: "spontan", dest: "marri", count: 1, people: [1936831046,]},
],
"posit":[
],
"compat":[
{src: "compat", dest: "high", count: 1, people: [627679685,]},
],
"femal":[
],
"romant":[
{src: "romant", dest: "old-fashion", count: 1, people: [2111597213,]},
{src: "romant", dest: "younger", count: 1, people: [1984642955,]},
],
"rug":[
{src: "rug", dest: "basic", count: 1, people: [299608569,]},
],
"other":[
{src: "other", dest: "singl", count: 1, people: [102016534,]},
],
"suc":[
],
"warm":[
{src: "warm", dest: "old-fashion", count: 1, people: [2111597213,]},
],
"most":[
{src: "most", dest: "hard", count: 1, people: [198563685,]},
{src: "most", dest: "nice", count: 1, people: [198563685,]},
{src: "most", dest: "fanci", count: 1, people: [198563685,]},
],
"thick-heavi":[
{src: "thick-heavi", dest: "younger", count: 1, people: [1984642955,]},
],
"punk":[
{src: "punk", dest: "basic", count: 1, people: [299608569,]},
],
"short":[
{src: "short", dest: "younger", count: 1, people: [1984642955,]},
],
"real":[
{src: "real", dest: "old-fashion", count: 1, people: [2111597213,]},
],
"clean":[
{src: "clean", dest: "younger", count: 1, people: [1984642955,]},
],
"easi":[
],
"full":[
{src: "full", dest: "orient", count: 1, people: [1020053025,]},
{src: "full", dest: "posit", count: 1, people: [1020053025,]},
{src: "full", dest: "happi", count: 1, people: [1020053025,]},
{src: "full", dest: "divorc", count: 1, people: [1020053025,]},
{src: "full", dest: "explicit", count: 1, people: [1020053025,]},
{src: "full", dest: "good", count: 1, people: [1020053025,]},
{src: "full", dest: "marri", count: 1, people: [1020053025,]},
{src: "full", dest: "attach", count: 1, people: [1020053025,]},
],
"beauti":[
],
"materialist":[
{src: "materialist", dest: "nice", count: 1, people: [198563685,]},
{src: "materialist", dest: "hard", count: 1, people: [198563685,]},
{src: "materialist", dest: "fanci", count: 1, people: [198563685,]},
],
"passion":[
],
"hard":[
],
"major":[
{src: "major", dest: "high", count: 1, people: [627679685,]},
],
"tall":[
{src: "tall", dest: "younger", count: 1, people: [1984642955,]},
],
"sarcast":[
{src: "sarcast", dest: "marri", count: 1, people: [1936831046,]},
],
"hillbilli":[
{src: "hillbilli", dest: "basic", count: 1, people: [299608569,]},
],
"happi":[
],
"physic":[
{src: "physic", dest: "singl", count: 1, people: [102016534,]},
],
"divorc":[
],
"new":[
{src: "new", dest: "high", count: 1, people: [627679685,]},
{src: "new", dest: "free", count: 1, people: [669237174,]},
{src: "new", dest: "easi", count: 1, people: [669237174,]},
],
"orient":[
],
"quick-wit":[
{src: "quick-wit", dest: "marri", count: 1, people: [1936831046,]},
],
"fanci":[
],
"attach":[
],
"career-ori":[
{src: "career-ori", dest: "good", count: 1, people: [1330799835,]},
],
"high":[
{src: "high", dest: "hard", count: 1, people: [198563685,]},
{src: "high", dest: "nice", count: 1, people: [198563685,]},
{src: "high", dest: "fanci", count: 1, people: [198563685,]},
],
"sociabl":[
{src: "sociabl", dest: "high", count: 1, people: [627679685,]},
],
"financi":[
{src: "financi", dest: "high", count: 1, people: [627679685,]},
],
};
people = {
102016534:{age: 0, gender: 0, location: "atlanta", iam: "i am in a relationship and am lacking the physical attention i desire from  my significant other.", looking: "i am looking for a man, preferably single,  to become friends, get to know and potentially fill that void that is missing from my life.", title: "i need  a fwb right away", },
299608569:{age: 0, gender: 0, location: "atlanta", iam: "i am attracted to rugged or preppy guys, not artsy, punk or hillbilly.", looking: "i am looking for will read through this and recognize the things i am asking for are pretty basic and it describes him.", title: "looking for specifics....", },
1020053025:{age: 0, gender: 0, location: "atlanta", iam: "i am 24 yrs - old single (no attachment issues) female with no children. i am college student pursuing a degree in accounting with a year and half left of school. i am an accountant intern part-time with a full time job in manufacturing.", looking: "i am looking for a man with: ? no children? no married, divorced or attached man ? no smoker? happy & positive ? good conversation ? career oriented? ages: 25-30? all men are welcomeplease no explicit emails.", title: "try me...............petite,smart &amp; sexy", },
1984642955:{age: 0, gender: 1, location: "atlanta", iam: "i am black male that have a job, have my own place, have a car and no kids. i am caring, hard-working, romantic, like to cook, trustworthy and funny person. i am a more of a homebody; i will prefer to have a quiet evening at home better than going to the club or bars. i am 6 feet tall, dark skin, short hair, very clean cut, and i am on the thick-heavy side(i have meat on my bones).", looking: "i am looking for female that is between the age of 27 and 48 that will not mind a company of a younger man.", title: "young black male seekin a mature older female", },
450467833:{age: 0, gender: 0, location: "atlanta", iam: "i am not inlove anymore. i am still waiting for my flowers. i am tired of crying and being depressed.", looking: "i am looking for:a person that understand that i am married and getting a divorcesomeone that can make me laugh and says i am beautiful an honest person that has strong family valuesa goal oriented man that has dreams even though he accomplished most of them and can share his thoughts with me. i am looking for a tall man from 5\"10 and upsomeone that like all types of musicsomeone that will sing karaoke with me drunksomeone that likes sports and can show me how to play bball and maybe golf ?soemone that gives me attention but does not smother mesomeone that will love me or grow to love the person i amsomeone that believs in giving back to there communitysomone who is unselfish and wants to know what i want in life and helps me succed instead of draining everything about mesomeone who can make passionate love to me for years to comesomeone who allows me to be openminded and not offended by it \"bi\"someone who believs in mesomeone with a good jobsomeone who loves there jobsomeone who does not live in there parents basementsomeone that wants to know how my day wentsomeone who can save me from myself.", title: "one mans junk is, another mans treasure", },
1936831046:{age: 0, gender: 0, location: "atlanta", iam: "i am seeking a man who enjoys life. i am a swf, 5'3', curly blonde hair with blue-green eyes and yes gentlemen, i am a bbw. i am open-minded, spontaneous, quick-witted, have a rather sarcastic sense of humor, and like you should be, i am self-sufficient.", looking: "i am looking for a swm; sorry no married men need apply.", title: "seeking mature swm", },
669237174:{age: 0, gender: 0, location: "atlanta", iam: "i am new to this so  go easy on me.", looking: "i am free and easy with my body or anything, but i am looking for some needs to be met.", title: "sweet and sexy single female looking for dates in atlanta", },
688174510:{age: 0, gender: 0, location: "atlanta", iam: "i am 5\" 7 120 lbs, love to go out to movies, football and play video games, i have a nice body (love my butt) and my looks are good. i am looking to meet a guy asap, i do not really care how you look, if you are a fun lovin guy (who does not cheat on girls) send me an email.", looking: "i am looking for a new friend (date). i am looking for fun guys who love to go out and party, i work and go to school but the weekends are mine, i do not smoke but i do drink and i have no kids.", title: "new in town looking for a friend or more..", },
1626054413:{age: 0, gender: 0, location: "atlanta", iam: "i am at the point in my life that i would like to someday settle down and have a family (and no, that doesn't mean tomorrow). i am a very positive-idealist type of person and try to see the good in every person and situation.", looking: "i am looking for someone who is interested in a committed relationship and not afraid of the what the future may hold.", title: "do i really need an intro line", },
2111597213:{age: 0, gender: 0, location: "atlanta", iam: "i am a swf,46, who is warm, funny, honest, romantic, and intelligent, and i am searching for a swm,43-52,with the same qualities for a ltr. i am searching for my soul mate. i am interested in the real person, not the packaging.", looking: "i am looking for an old-fashioned man who believes that he wears the pants in the relationship, and believes that he has the right to put his lady over his knee for any reason.", title: "search for knight with a strong hand", },
1330799835:{age: 0, gender: 0, location: "atlanta", iam: "i am not sure about that one!! still looking. i am currently trying to be a firefighter so i do allot of studying, but i need breaks to enjoy life. i am not into the hairy body types ie. i am very career-oriented.", looking: "i am looking for a good friend first and well if the chemistry is there.", title: "lets talk and get to know each other first", },
627679685:{age: 0, gender: 0, location: "atlanta", iam: "i am accustomed to the finerthings in life and wish to be accomodated by a man who is notintimidated by my standard of living. i am 35, 5'7\", 140 and a consultant fora major financial instituation. i am a nice mix of all of the worlds of wonder. i am educated , but not a bookworm. i am attractive, but not a blonde without brains. i am seeking a sexy charmer for a compatible relationship filled with fun and companionship. i am in a sociable mood. i am very outgoing and love to meet new people who i can learn from.", looking: "i am looking for a ugar daddy in the atlantaarea to pamper and hold in high esteem.", title: "let me be your new year's resolution!", },
198563685:{age: 0, gender: 0, location: "atlanta", iam: "i am tired of it. i am an attractive woman, and because of that men think that i am either: taken, shallow, materialistic or high maintenence. i am definately none of those things. i am one of the most down to earth people you will ever meet.", looking: "i am looking for someone tall (because i am 5'10\"), dark (thats just what i like) with a nice smile, motivation, a job (doesn't have to be anything fancy but i work hard, and i need someone who can relate to that).", title: "need a man for the new year", },
430470043:{age: 0, gender: 1, location: "atlanta", iam: "i am more of the type of person that will like to stay at home and do blockbuster nights, play video games, or do a card games (poker or spades). i am the quiet and simple person that likes to do simple things in life.", looking: "i am looking for female friend with benefits to get to know and to chill with time to time.", title: "looking for a female friend to chill with", },
}
