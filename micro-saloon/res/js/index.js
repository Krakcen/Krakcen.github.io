// variables de boutons
var btnPre = 0;
var btnPro = 0;
var btnNeu = 0;
var btnPar = 0;
var btnEdi = 0;

// variable z-index (css) incrementation a chaque bouton appuye (premier plan)
var zindex = 0;


$(document).ready(function () {

    // variable position boutons
    var pos;

    // event bouton presentation
    $('#btn-pre').on('click', function () {

        // fonction jquery (changer classe d'un element), ici, faire une animation fade in
        $("#pre-text").attr("class", "animated fadeIn");

        // fonction qui recupere la position du bouton (width)
        pos = $("#btn-pre").offset().left;
        // fonction qui arrondit la valeur (entier)
        pos = Math.round(pos);

        // if/else (bouton appuye ou non)
        if (btnPre == 0) {
            zindex++;

            // setup du bouton en css en blanc (quand appuye)
            $(this).attr("style", "color: #333;background-color: #FFF;border-color: #000;");
            // setup css du cadre
            $("#pre-text").attr("style", "position: absolute;height: 330px;left:" + pos.toString() +  "px;top:200px;width:275px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
            btnPre = 1;
        }
        else {
            // setup du bouton en noir (quand relache)
            $(this).attr("style", "color: #FFF;background-color: #000;border-color: #000;");

            // animation fade out
            $("#pre-text").attr("class", "animated fadeOut");
            btnPre = 0;
        }
    });

    // event bouton programme
    $('#btn-pro').on('click', function () {
        $("#pro-text").attr("class", "animated fadeIn");
        pos = $("#btn-pro").offset().left;
        console.log(pos);
        pos = Math.round(pos); 
        if (btnPro == 0) {
            zindex++;
            $(this).attr("style", "color: #333;background-color: #FFF;border-color: #000;");
            $("#pro-text").attr("style", "position: absolute;height: 730px;left:" + pos.toString() + "px;top:70px;width:240px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
            btnPro = 1;
        }
        else {
            $(this).attr("style", "color: #FFF;background-color: #000;border-color: #000;");
            $("#pro-text").attr("class", "animated fadeOut");
            btnPro = 0;
        }
    });

    // event bouton quoi de neuf
    $('#btn-neu').on('click', function () {
        $("#neu-text").attr("class", "animated fadeIn");
        pos = $("#btn-neu").offset().left;
        pos = Math.round(pos);
        if (btnNeu == 0) {
            zindex++;
            $(this).attr("style", "color: #333;background-color: #FFF;border-color: #000;");
            $("#neu-text").attr("style", "position: absolute;height: 700px;left:" + pos.toString() + "px;top:50px;width:280px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
            btnNeu = 1;
        }
        else {
            $(this).attr("style", "color: #FFF;background-color: #000;border-color: #000;");
            $("#neu-text").attr("class", "animated fadeOut");
            btnNeu = 0;
        }
    });

    // event bouton en parallele
    $('#btn-par').on('click', function () {
        $("#par-text").attr("class", "animated fadeIn");
        pos = $("#btn-par").offset().left;
        pos = Math.round(pos);
        if (btnPar == 0) {
            zindex++;
            $(this).attr("style", "color: #333;background-color: #FFF;border-color: #000;");
            $("#par-text").attr("style", "position: absolute;height: 450px;left:" + pos.toString() + "px;top:60px;width:208px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
            btnPar = 1;
        }
        else {
            $(this).attr("style", "color: #FFF;background-color: #000;border-color: #000;");
            $("#par-text").attr("class", "animated fadeOut");
            btnPar = 0;
        }
    });

    // event bouton editions
    $('#btn-edi').on('click', function () {
        $("#edi-text").attr("class", "animated fadeIn");
        pos = $("#btn-edi").offset().left;
        pos = Math.round(pos);
        if (btnEdi == 0) {
            zindex++;
            $(this).attr("style", "color: #333;background-color: #FFF;border-color: #000;");
            $("#edi-text").attr("style", "position: absolute;height: 110px;left:" + pos.toString() + "px;top:300px;width:100px;padding: 10px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
            btnEdi = 1;
        }
        else {
            $(this).attr("style", "color: #FFF;background-color: #000;border-color: #000;");
            $("#edi-text").attr("class", "animated fadeOut");
            btnEdi = 0;
        }
    });

    /* -------------------------------------- */

    // mise au premier plan sur un click du cadre correspondant
    $('#pre-text').on('click', function () {
        pos = $("#btn-pre").offset().left;
        pos = Math.round(pos);
        zindex++;
        $("#pre-text").attr("style", "position: absolute;height: 330px;left:" + pos.toString() + "px;top:200px;width:275px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
    });

    $('#pro-text').on('click', function () {
        pos = $("#btn-pro").offset().left;
        pos = Math.round(pos);
        zindex++;
        $("#pro-text").attr("style", "position: absolute;height: 730px;left:" + pos.toString() + "px;top:70px;width:240px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
    });

    $('#neu-text').on('click', function () {
        pos = $("#btn-neu").offset().left;
        pos = Math.round(pos);
        zindex++;
        $("#neu-text").attr("style", "position: absolute;height: 700px;left:" + pos.toString() + "px;top:50px;width:280px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
    });

    $('#par-text').on('click', function () {
        pos = $("#btn-par").offset().left;
        pos = Math.round(pos);
        zindex++;
        $("#par-text").attr("style", "position: absolute;height: 450px;left:" + pos.toString() + "px;top:60px;width:208px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
    });

    $('#edi-text').on('click', function () {
        pos = $("#btn-edi").offset().left;
        pos = Math.round(pos);
        zindex++;
        $("#edi-text").attr("style", "position: absolute;height: 110px;left:" + pos.toString() + "px;top:300px;width:100px;padding: 10px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
    });
});