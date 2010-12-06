function filterNetwork(maxNodes) {
	nodes.forEach(function(a) {a.count = a.indegree + a.outdegree});
	nodes.sort(function(a,b) {return b.count - a.count});// reverse sort
	nodes = nodes.slice(0, maxNodes);
	names = {}
	nodes.forEach(function(a) { names[a.node] = 1 })
	
	newInedges = {}
	nodes.forEach(function(a) {
		newInedges[a.node] = inedges[a.node].filter(function(edge) {return names[edge.src] === 1 && names[edge.dest] === 1})
	})
	inedges = newInedges;
	
	newOutedges = {}
	nodes.forEach(function(a) {
		newOutedges[a.node] = outedges[a.node].filter(function(edge) {return names[edge.src] === 1 && names[edge.dest] === 1})
	})
	outedges = newOutedges;
	
	nodes.forEach(function(a) {
	a.indegree = inedges[a.node].reduce(function(previousValue, currentEdge) {return previousValue + currentEdge.count}, 0);
	a.outdegree = outedges[a.node].reduce(function(previousValue, currentEdge) {return previousValue + currentEdge.count}, 0);
	a.count = a.indegree + a.outdegree;
	});
}

function unstem(stem) {
	return stems[stem];
}

function funkysort(input){
    return input.slice(0, input.length).sort(function(a, b){
		if (a.count === b.count) {
			return (a.node < b.node) ? -1 : 1  
		} else {
			return - a.count + b.count
		}
    });
}

// Computes the running sum of an array
function runsum(input) {
	var i;
	var sum = 0;
	var output = new Array(input.length);
	for (i = 0; i < input.length; i++) {
		sum = sum + input[i].count
		output[i] = sum
	}
	return output
}
