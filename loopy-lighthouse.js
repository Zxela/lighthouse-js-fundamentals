var start = 100; //define first number to print//
var end = 200 + 1; //define end point + 1 to print last value//
var range = (end - start); //define range//
for (var rep = 0; rep < range; rep++) {
	var current = (start + rep); //current value to print//
	if (current % 3 === 0 || current % 4 === 0) { //can current print value be divided by 3 or 4?//
		if (current % 3 === 0 && current % 4 === 0) { //change value for multiple of both 3 & 4//
			current = "LoopyLighthouse";
			console.log(current);
		}
		else {
			if (current % 3 === 0) { //If 3 or 4 and not 3 and 4, AND 3 - must be 3 only.//
				current = "Loopy";
				console.log(current);
			}
			else {
				current = "Lighthouse"; //only multiple of 4 left//
				console.log(current);
			}
		}
	}
	else{
		console.log(current); //else print the number//
	}
}
