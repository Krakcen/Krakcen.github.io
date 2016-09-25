var compR = 0;
var compM = 0;

Array.prototype.insert = function (index, item) {
	this.splice(index, 0, item);
};

function bubbleSort(list) {
	var array = list.slice(0);
	var loop = 0;
	var x = 0;
	var y = 0;
	var tmp = 0;
	var res = {
		sortedList: [],
		comparison: 0
	};

	while (y < (array.length - 1)) {
		while (x < (array.length - 1 - loop)) {
			res.comparison++;
			if (array[x] > array[x + 1]) {
				tmp = array[x];
				array[x] = array[x + 1];
				array[x + 1] = tmp;
			}
			x++;
		}
		y++;
		loop++;
		x = 0;
	}
	res.sortedList = array;
	return (res);
}

function insertionSortAlex(list) {
	var array = list.slice(0);
	var nb = 0;
	var comp = 0;
	var start = 0;
	var y = 1;
	var index = 0;
	while (y < array.length) {
		comp++;
		if (array[0] >= array[y]) {
			nb = array[y];
			array.splice(y, 1);
			array.insert(0, nb);
		}
		else if (start) {
			index = y;
			if (array[y] >= array[index - 1])
				comp++;
			else {
				while (array[y] < array[index - 1]) {
					comp++;
					index--;
				}
				nb = array[y];
				array.splice(y, 1);
				array.insert(index, nb);
			}
		}
		y++;
		start = 1;
	}
	return (comp);
}

function insertionSortOld(values) {
	var length = values.length;
	var comp = 0;
	for(var i = 1; i < length; ++i) {
		var temp = values[i];
		var j = i - 1;
		comp++;
		for(; j >= 0 && values[j] > temp; --j) {
			comp++;
			values[j+1] = values[j];
		}
		values[j+1] = temp;
	}
	return (comp);
};

function insertSort(array) {
	var nb = 0;
	var comparison = 0;
	var x = 0;
	var y = 1;
	var tmp = 0;

	while (y < array.length) {
		nb = array[y];
		x = y;
		comparison++;
		while ((x > 0) && (array[x - 1] > nb)) {
			if (x > 1) {
				comparison++;
			}
			tmp = array[x];
			array[x] = array[x - 1];
			array[x - 1] = tmp;
			x--;
		}
		y++;
	}
	return (comparison);
}

function swap(arr, i, j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

//////////////////////////// Selection

function selectionSort(list) {
	var array = list.slice(0);
	var tmpIndex = 0;
	var x = 1;
	var y = 0;
	var comp = 0;

	while (y < array.length) {
		tmpIndex = y;
		while (x < array.length) {
			if (array[tmpIndex] > array[x])
				tmpIndex = x;
			comp++;
			x++;
		}
		swap(array, y, tmpIndex);
		y++;
		x = y + 1;
	}
	return (comp);
}

////////////////////////////

//////////////////////////// Quick
function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function partition(arr, pivot, left, right) {
	var pivotValue = arr[pivot],
	partitionIndex = left;

	for(var i = left; i < right; i++) {
		compR++;
		if(arr[i] < pivotValue) {
			swap(arr, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(arr, right, partitionIndex);
	return partitionIndex;
}

function quickSort(arr, left, right) {
	var len = arr.length, 
	pivot,
	partitionIndex;

	if (left < right) {
		pivot = right;
		partitionIndex = partition(arr, pivot, left, right);
		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
	}
	return (arr);
}

///////////////////////////

/////////////////////////// Merge

function mergeSort(arr)
{
	if (arr.length < 2)
		return arr;

	var middle = parseInt(arr.length / 2);
	var left   = arr.slice(0, middle);
	var right  = arr.slice(middle, arr.length);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
	var result = [];

	while (left.length && right.length) {
		compM++;
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length)
		result.push(left.shift());

	while (right.length)
		result.push(right.shift());

	return result;
}

///////////////////////////

function benchmark(array) {
	compR = 0;
	compM = 0;
	var data;
	var res = {
		sortedList: [],
		comparisons: [0, 0, 0, 0, 0],
	};
	data = bubbleSort(array);
	res.sortedList = data.sortedList;
	res.comparisons[2] = data.comparison;
	res.comparisons[1] = insertionSortAlex(array);
	quickSort(array.slice(0), 0, array.length - 1);
	res.comparisons[4] = compR;
	res.comparisons[0] = selectionSort(array);
	mergeSort(array.slice(0));
	res.comparisons[3] = compM;
	return (res);
}