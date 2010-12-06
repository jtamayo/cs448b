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
