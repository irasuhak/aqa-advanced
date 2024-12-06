function sumArray(array) {
	if (!array || array.lenght < 3) {
		return 0;
	}

	const min = Math.min(...array);
	const max = Math.max(...array);

	let sum = 0;
	let minFound = false;
	let maxFound = false;

	for (let num of array) {
		if (num === min && !minFound) {
			minFound = true;
			continue;
		}
		if (num === max && !maxFound) {
			maxFound = true;
			continue;
		}
		sum += num;
	}
	return sum;
}

console.log(sumArray([2, 8, 9, 57, 6, 10]));
console.log(sumArray(null));
console.log(sumArray([5, 5, 5]));
console.log(sumArray([7, 7]));
console.log(sumArray([2]));
