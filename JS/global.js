var dataObj;

/* Filter Variables */

//Land_Types
var lt_neutral = 0;
var lt_mountain = 0;
var lt_desert = 0;
var lt_water = 0;
var lt_forest = 0;

//Mana_Costs
var mc_all = 1;
var mc_0 = 0;
var mc_1 = 0;
var mc_2 = 0;
var mc_3 = 0;
var mc_4 = 0;
var mc_5 = 0;
var mc_6 = 0;
var mc_7 = 0;

//Rarity
var r_common = 0;
var r_rare = 0;
var r_epic = 0;
var r_legendary = 0;

//Card Type
var t_creature = 0;
var t_structure = 0;
var t_event = 0;

var search_str = "";



function getButtonState() {
    console.log("Neutral Land Type: " + lt_neutral);
    console.log("Mountain Land Type: " + lt_mountain);
    console.log("Desert Land Type: " + lt_desert);
    console.log("Water Land Type: " + lt_water);
    console.log("Forest Land Type: " + lt_forest);

    //Mana_Costs
    console.log("Mana Cost i: " + mc_all);
    console.log("Mana Cost 0: " + mc_0);
    console.log("Mana Cost 1: " + mc_1);
    console.log("Mana Cost 2: " + mc_2);
    console.log("Mana Cost 3: " + mc_3);
    console.log("Mana Cost 4: " + mc_4);
    console.log("Mana Cost 5: " + mc_5);
    console.log("Mana Cost 6: " + mc_6);
    console.log("Mana Cost 7: " + mc_7);

    //Rarity
    console.log("Common: " + r_common);
    console.log("Rare: " + r_rare);
    console.log("Epic: " + r_epic);
    console.log("Legendary: " + r_legendary);
}