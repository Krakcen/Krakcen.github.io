var error_type = 0;
var chart1;
var chart2;
var chart3;

if (window.File && window.FileReader && window.FileList && window.Blob) {
	error_type = 0;
} else {
	error_type = 1;
	console.log('The File APIs are not fully supported in this browser.');
}


function updateCheckBoxes(checkboxObj) {
	$("[name='checkbox-array']").bootstrapSwitch('state', checkboxObj.checkA, true);
	$("[name='checkbox-file']").bootstrapSwitch('state', checkboxObj.checkF, true);
	$("[name='checkbox-random']").bootstrapSwitch('state', checkboxObj.checkR, true);
}

function showErrorMessage(message) {
	$('#error-box-content').attr("style", "margin-top:15px;");
	$('#error-box-content').attr("class", "alert alert-danger animated zoomIn");
	$('#error-box-content').html(message);
}

function hideErrorMessage() {
	//$('#error-box-content').attr("style", "display:none;margin-top:15px;");
	$('#error-box-content').attr("class", "alert alert-danger animated zoomOut");
}

function updateRandomValue(val) {
	$('#random-info').html("Randomize an Array of " + val + " numbers");
}

function updateChartDataLine(val, myChart) {
	var newLabels = [];
	var i = 1;
	while (i < (val.length + 1)) {
		myChart.data.datasets[0].data[i - 1] = val[i - 1];
		newLabels.push(i);
		i++;
	}
	myChart.config.data.labels = newLabels;
	myChart.update();
}

function updateChartData(val, myChart) {
	myChart.data.datasets[0].data[0] = val[0];
	myChart.data.datasets[0].data[1] = val[1];
	myChart.data.datasets[0].data[2] = val[2];
	myChart.data.datasets[0].data[3] = val[3];
	myChart.data.datasets[0].data[4] = val[4];
	myChart.update();
}

function deleteRandomValue() {
	$('#random-info').html("");
}

function finalDisplay(result) {
	//Disp Charts Button
	$('#listChart').attr('style', 'position:absolute;right:150px;top:300px;');
	$('#listChart').attr('class', 'btn btn-xlarge btn-success animated zoomIn');	
	updateChartDataLine(result.sortedList, chart3);
	updateChartData(result.comparisons, chart1);
}

function createListCharts() {
	//Old Chart
	var oldCtx = $("#oldChart");
	var myOldChart = new Chart(oldCtx, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: 'Unsorted List',
				data: [],
				fill: true,
				borderColor: '#d11141',
			}]
		},

	});
	chart2 = myOldChart;

	//New Chart
	var newCtx = $("#newChart");
	var myNewChart = new Chart(newCtx, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: 'Sorted List',
				data: [],
				fill: true,
				borderColor: '#00b159',
			}]
		},
	});
	chart3 = myNewChart;
}

function generateArray(nb) {
	var benchmarkRes;
	var array = [];
	while (nb > 0) {
		array.push(Math.floor((Math.random() * 100)));
		nb--;
	}
	createListCharts();
	updateChartDataLine(array, chart2);
	benchmarkRes = benchmark(array);
	finalDisplay(benchmarkRes);
}

function parseInput(str) {
	var parsedStr = [];
	var benchmarkRes;

	if (str){
		try {
			parsedStr = JSON.parse("[" + str + "]");
		}
		catch(e) {
			showErrorMessage("<b>Error:</b> Incorrect Input, please use \"1, 2, 3, ... syntax.");
			console.log("caught");
			return (0);
		}
		if (parsedStr.length < 2)
			showErrorMessage("<b>Error:</b> Make it at least a 2 number array.");
		else {
			hideErrorMessage();
			createListCharts();
			updateChartDataLine(parsedStr, chart2);
			benchmarkRes = benchmark(parsedStr);
			finalDisplay(benchmarkRes);    	
		}
	}

	parsedStr = JSON.parse("[" + str + "]");
}

//Start
$( document ).ready(function() {
	var file;

	function handleFileSelect(evt) {
		file = evt.target.files;
		hideErrorMessage();
	}
	document.getElementById('files').addEventListener('change', handleFileSelect, false);

	//First Chart
	var ctx = $("#myChart");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Selection Sort", "Insertion Sort", "Bubble Sort", "Merge Sort", "Quick Sort"],
			datasets: [{
				label: 'Comparison Count',
				data: [],
				backgroundColor: [
				'#d11141',
				'#00b159',
				'#00aedb',
				'#f37735',
				'#ffc425',
				],
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
	chart1 = myChart;

	//Init + Events
	var checkboxObj = {
		checkA: true,
		checkF: false,
		checkR: false
	};

	updateCheckBoxes(checkboxObj);

	$('input[name="checkbox-array"]').on('switchChange.bootstrapSwitch', function(event, state) {
		checkboxObj.checkA = true;
		checkboxObj.checkF = false;
		checkboxObj.checkR = false;
		updateCheckBoxes(checkboxObj);
		deleteRandomValue();
		hideErrorMessage();
	});

	$('input[name="checkbox-file"]').on('switchChange.bootstrapSwitch', function(event, state) {
		checkboxObj.checkA = false;
		checkboxObj.checkF = true;
		checkboxObj.checkR = false;
		updateCheckBoxes(checkboxObj);
		deleteRandomValue();
		hideErrorMessage();
	});

	$('input[name="checkbox-random"]').on('switchChange.bootstrapSwitch', function(event, state) {
		checkboxObj.checkA = false;
		checkboxObj.checkF = false;
		checkboxObj.checkR = true;
		updateCheckBoxes(checkboxObj);
		hideErrorMessage();

		var originalVal = $('#randSlider').data('slider').getValue();
		updateRandomValue(originalVal);
	});

	var slideObj = $('#randSlider').slider();

	$('#randSlider').slider().on('slideStart', function(ev){
		originalVal = $('#randSlider').data('slider').getValue();
	});

	$('#randSlider').slider().on('slideStop', function(ev){
		var newVal = $('#randSlider').data('slider').getValue();
		if(originalVal != newVal) {
			updateRandomValue(newVal);
		}
	});


	$( "#subArray" ).submit(function(event) {
		var arrayInputVal;
		event.preventDefault();
		if (checkboxObj.checkA) {
			arrayInputVal = $("#arrayInput").val();
			if (arrayInputVal == "") {
				showErrorMessage("<b>Error:</b> No Input Value Found.");
			}
			else {
				hideErrorMessage();
				parseInput(arrayInputVal);
			}
		}
		else if (checkboxObj.checkF) {
			if (file == null)
				showErrorMessage("<b>Error:</b> No file Selected.");
			else {
				var reader = new FileReader();
				reader.readAsText(file[0]);
				reader.onloadend = function() {
					arrayInputVal = reader.result;
					if (error_type == 1)
						showErrorMessage("<b>Error:</b> The File APIs are not fully supported in this browser.");
					else {
						hideErrorMessage();
						parseInput(arrayInputVal);
					}
				}
			}
		}
		else if (checkboxObj.checkR) {
			generateArray($('#randSlider').data('slider').getValue());
		}
	});

});