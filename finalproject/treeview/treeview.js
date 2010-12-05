function funkysort(input){
	var array = input.slice(0,input.length)
    var funkysort = new Array();
    // Add the words to the right panel. Sort them by prevalence 
    array.sort(function(a, b){
		if (a.count === b.count) {
			return (a.node < b.node) ? -1 : 1  
		} else {
			return a.count - b.count
		}
    })
    if (array.length === 46) 
        array = array.slice(1, 45);
    else 
        if (array.length >= 47) 
            array = array.slice(2, 45);
    var j = 0;
    for (i = 0; i < array.length; i += 2) {
        funkysort[j] = array[i];
        j++;
    }
    i = (array.length % 2 === 0) ? array.length - 1 : array.length - 2;
    for (; i > 0; i -= 2) {
        funkysort[j] = array[i];
        j++;
    }
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
	var output = new Array();
	for (i = 0; i < input.length; i++) {
		sum = sum + input[i].count
		output[i] = sum
	}
	return output
}
