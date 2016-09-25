function bubbleSort(array) {
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

function insertionSort(values) {
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
	console.log(array.length);
	console.log(comparison);
	return (comparison);
}

function benchmark(array) {
	var data;
	var res = {
		sortedList: [],
		comparisons: [0, 0, 0, 0, 0],
	};
	data = bubbleSort(array);
	res.sortedList = data.sortedList;
	res.comparisons[2] = data.comparison;
	res.comparisons[1] = insertionSort(array);
	return (res);
}