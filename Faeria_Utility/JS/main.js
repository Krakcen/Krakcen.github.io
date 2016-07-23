function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getFileObject() {
    $.ajax({
        type: "GET",
        url: "https://Krakcen.github.io/Faeria_Utility/Res/FaeriaData/merlin_shortened.csv",
        success: function (text) {
            dataObj = Papa.parse(text);
        },
        error: function () {
            alert("error opening data file");
        }
    });
}

//Start
$(document).ready(function () {

    //Color Changing, pretty cool !
    $("#headermp").mouseover(function () {
        var rcolor = getRandomColor();
        $("#headermp").css('color', rcolor);
    });
    getFileObject();
});
