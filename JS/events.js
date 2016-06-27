$(document).ready(function () {
    
    /* Land Types *///////////////////////////////////////////////////////////////////////////////
    //Common
    $('#_lt_neutral').on('click', function () {
        if (lt_neutral == 0) {
            lt_neutral = 1;
            $("#_lt_neutral").removeAttr("style");
            startParsing();
        }
        else {
            lt_neutral = 0;
            $("#_lt_neutral").attr("style", "opacity:0.5;");
            startParsing();
        }
    });

    //Mountain
    $('#_lt_mountain').on('click', function () {
        if (lt_mountain == 0) {
            lt_mountain = 1;
            $("#_lt_mountain").removeAttr("style");
            startParsing();
        }
        else {
            lt_mountain = 0;
            $("#_lt_mountain").attr("style", "opacity:0.5;");
            startParsing();
        }
    });

    //Desert
    $('#_lt_desert').on('click', function () {
        if (lt_desert == 0) {
            lt_desert = 1;
            $("#_lt_desert").removeAttr("style");
            startParsing();
        }
        else {
            lt_desert = 0;
            $("#_lt_desert").attr("style", "opacity:0.5;");
            startParsing();
        }
    });
 
    //Lake
    $('#_lt_water').on('click', function () {
        if (lt_water == 0) {
            lt_water = 1;
            $("#_lt_water").removeAttr("style");
            startParsing();
        }
        else {
            lt_water = 0;
            $("#_lt_water").attr("style", "opacity:0.5;");
            startParsing();
        }
    });

    //Forest
    $('#_lt_forest').on('click', function () {
        if (lt_forest == 0) {
            lt_forest = 1;
            $("#_lt_forest").removeAttr("style");
            startParsing();
        }
        else {
            lt_forest = 0;
            $("#_lt_forest").attr("style", "opacity:0.5;");
            startParsing();
        }
    });

    //////////////////////////////////////////////////////////////////////////////////////////////

    /* Mana Costs *///////////////////////////////////////////////////////////////////////////////

    function updateManaCostVar(nb) {
        //0
        if (nb == 0)
            mc_0 = 1;
        else
            mc_0 = 0;

        //1
        if (nb == 1)
            mc_1 = 1;
        else
            mc_1 = 0;

        //2
        if (nb == 2)
            mc_2 = 1;
        else
            mc_2 = 0;

        //3
        if (nb == 3)
            mc_3 = 1;
        else
            mc_3 = 0;

        //4
        if (nb == 4)
            mc_4 = 1;
        else
            mc_4 = 0;

        //5
        if (nb == 5)
            mc_5 = 1;
        else
            mc_5 = 0;

        //6
        if (nb == 6)
            mc_6 = 1;
        else
            mc_6 = 0;

        //7
        if (nb == 7)
            mc_7 = 1;
        else
            mc_7 = 0;

        //8
        if (nb == 8)
            mc_all = 1;
        else
            mc_all = 0;

    }

    //ALL
    $('#_mc_all').on('click', function () {
        console.log("OUI");
        if (mc_all == 0) {
            updateManaCostVar(8);
            startParsing();
        }
    });

    //0
    $('#_mc_0').on('click', function () {
        if (mc_0 == 0) {
            updateManaCostVar(0);
            startParsing();
        }
    });

    //1
    $('#_mc_1').on('click', function () {
        if (mc_1 == 0) {
            updateManaCostVar(1);
            startParsing();
        }
    });

    //2
    $('#_mc_2').on('click', function () {
        if (mc_2 == 0) {
            updateManaCostVar(2);
            startParsing();
        }
    });

    //3
    $('#_mc_3').on('click', function () {
        if (mc_3 == 0) {
            updateManaCostVar(3);
            startParsing();
        }
    });

    //4
    $('#_mc_4').on('click', function () {
        if (mc_4 == 0) {
            updateManaCostVar(4);
            startParsing();
        }
    });

    //5
    $('#_mc_5').on('click', function () {
        if (mc_5 == 0) {
            updateManaCostVar(5);
            startParsing();
        }
    });

    //6
    $('#_mc_6').on('click', function () {
        if (mc_6 == 0) {
            updateManaCostVar(6);
            startParsing();
        }
    });

    //7
    $('#_mc_7').on('click', function () {
        if (mc_7 == 0) {
            updateManaCostVar(7);
            startParsing();
        }
    });

    /////////////////////////////////////////////////////////////////////////////

    /* Rarity *//////////////////////////////////////////////////////////////////

    $('#_r_common').on('click', function () {
        if (r_common == 0) {
            r_common = 1;
            $(this).button('toggle');
            startParsing();
        }
        else {
            r_common = 0;
            $(this).button('toggle');
            startParsing();
        }
    });

    $('#_r_rare').on('click', function () {
        if (r_rare == 0) {
            r_rare = 1;
            $(this).button('toggle');
            startParsing();
        }
        else {
            r_rare = 0;
            $(this).button('toggle');
            startParsing();
        }
    });

    $('#_r_epic').on('click', function () {
        if (r_epic == 0) {
            r_epic = 1;
            $(this).button('toggle');
            startParsing();
        }
        else {
            r_epic = 0;
            $(this).button('toggle');
            startParsing();
        }
    });

    $('#_r_legendary').on('click', function () {
        if (r_legendary == 0) {
            r_legendary = 1;
            $(this).button('toggle');
            startParsing();
        }
        else {
            r_legendary = 0;
            $(this).button('toggle');
            startParsing();
        }
    });

    /////////////////////////////////////////////////////////

    // Card Type ////////////////////////////////////////
    $('#_t_creature').on('click', function () {
        if (t_creature == 0) {
            t_creature = 1;
            $(this).button('toggle');
            startParsing();
        }
        else {
            t_creature = 0;
            $(this).button('toggle');
            startParsing();
        }
    });

    $('#_t_structure').on('click', function () {
        if (t_structure == 0) {
            t_structure = 1;
            $(this).button('toggle');
            startParsing();
        }
        else {
            t_structure = 0;
            $(this).button('toggle');
            startParsing();
        }
    });

    $('#_t_event').on('click', function () {
        if (t_event == 0) {
            t_event = 1;
            $(this).button('toggle');
            startParsing();
        }
        else {
            t_event = 0;
            $(this).button('toggle');
            startParsing();
        }
    });
    //////////////////////////////////////////

    // Card Name ////////////////////////////
    $('#inputDatabaseName').on('input', function (e) {
        search_str = $('#inputDatabaseName').val();
        startParsing();
    });


   
});