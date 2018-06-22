function concat(array1, array2) {
	for (var repeat = 0; repeat < array2.length; repeat++) {
		array1.push(array2[repeat]);
	}
	return array1;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);