function createDivs(List) {
    var i = 0;
    var count = 0;
    var divString;

    $('#generated-cards').remove();

    if (List.length >= 1) {
        divString = "<div id=\"generated-cards\">\n<div class=\"row\">\n";
        while (i < List.length) {
            if (count == 3) {
                count = 0;
                divString = divString + "</div>\n<div class=\"row\">\n";
            }
            divString = divString + "\t<div class=\"col-md-4 portfolio-item\">\n\t\t<img class=\"img-responsive\" src=\"" + List[i] + ".png\" alt=\"\">\n\t</div>\n";
            i++;
            count++;
        }
        divString = divString + "</div>\n</div>";
    }
    else {
        divString = "<div id=\"generated-cards\" style=\"font-size: 60px;color:#EEE;\" class=\"text-center\">No Card Found Meeting the Criteria</div>"
    }
    $('#containercards').append(divString);

}

function displayParsedList(list) {
    var i = 0;

    while (i < list.length) {
        console.log(list[i]);
        i++;
    }
}

function getRightFormat(nb) {
    if (nb.length == 1)
        return ("00" + nb);
    if (nb.length == 2)
        return ("0" + nb);
    if (nb.length == 3)
        return (nb);
}

function isEligible(list) {
    var count = 0;

    //Land Types//////
    if (lt_neutral == 0 && lt_mountain == 0 && lt_desert == 0 && lt_water == 0 && lt_forest == 0)
        count++;
    else if (lt_neutral == 1 && lt_mountain == 1 && lt_desert == 1 && lt_water == 1 && lt_forest == 1)
        count++;
    else {
        if (lt_neutral == 1 && list[1] != "HUMAN")
            return (0);
        if (lt_mountain == 1 && list[1] != "RED")
            return (0);
        if (lt_water == 1 && list[1] != "BLUE")
            return (0);
        if (lt_forest == 1 && list[1] != "GREEN")
            return (0);
        if (lt_desert == 1 && list[1] != "YELLOW")
            return (0);
    }
    ////////////////

    // ManaCost
    if (mc_all == 1)
        count++;
    else {
        if (mc_0 == 1 && list[5] != "0")
            return (0);
        if (mc_1 == 1 && list[5] != "1")
            return (0);
        if (mc_2 == 1 && list[5] != "2")
            return (0);
        if (mc_3 == 1 && list[5] != "3")
            return (0);
        if (mc_4 == 1 && list[5] != "4")
            return (0);
        if (mc_5 == 1 && list[5] != "5")
            return (0);
        if (mc_6 == 1 && list[5] != "6")
            return (0);
        if (mc_7 == 1 && (parseInt(list[5]) < 7))
            return (0);
    }
    //////////////////

    // Rarity
    if (r_common == 0 && r_rare == 0 && r_epic == 0 && r_legendary == 0)
        count++;
    else if (r_common == 1 && r_rare == 1 && r_epic == 1 && r_legendary == 1)
        count++;
    else {
        if (r_common == 0 && list[16] == "COMMON")
            return (0);
        if (r_rare == 0 && list[16] == "EXCEPTIONAL")
            return (0);
        if (r_epic == 0 && list[16] == "RARE")
            return (0);
        if (r_legendary == 0 && list[16] == "LEGENDARY")
            return (0);
    }
    /////////////////

    // Card Type
    if (t_creature == 0 && t_structure == 0 && t_event == 0)
        count++;
    else if (t_creature == 1 && t_structure == 1 && t_event == 1)
        count++
    else {
        if (t_creature == 0 && list[3] == "creature")
            return (0);
        if (t_structure == 0 && list[3] == "structure")
            return (0);
        if (t_event == 0 && list[3] == "event")
            return (0);
    }
    //////////////////

    // Card Name
    var str1;
    var str2;

    if (search_str == "")
        count++;
    else {
        str1 = list[2].toLowerCase();
        str2 = search_str.toLowerCase();
        if (str1.search(str2) == -1)
            return (0);
        else
            count++;
    }

    return (1);
}

function startParsing() {
    var entry, i;
    var resString = "Res/FaeriaData/English/";
    var displayList = [];

    i = 0;
    console.log(dataObj);
    while (i < dataObj.data.length - 1) {
        entry = dataObj.data[i];
        if (isEligible(entry)) {
            displayList.push(resString + getRightFormat(dataObj.data[i][0]));
        }
        i++;
    }
    displayParsedList(displayList);
    createDivs(displayList);

}