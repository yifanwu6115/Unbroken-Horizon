/**
 * Created by LOe on 01/12/15.
 *
 * This is a primary example on how jQuery is used to set up the functionality of the menu part
 * of the interface. It is slightly difficult to read as it is, but the documentation should be
 * to at least some help. Make sure that you understand how the different parts work in this file.
 */

// This function defines the functionality of the menus on the right side of the bar.
//
$(function () {

    // First we hide all menus, but the one with all courses.
    //
    $("#allmenu").show();
    $("#drink").hide();
    $("#dessert").hide();
    $("#main").hide();
    $("#starter").hide();

    // Here we define the action when switching between menus. We add the activity as a click-function,
    // which is connected to the respective "tabs". The actual switching is done by
    // showing and hiding the fields.
    //
    // The keyword "slow", in combination with the menu z-order gives a
    // nice effect of physically switching between the different menus.
    //
    $("#allfood").click(function () {
        $("#allmenu").show("slow");
        $("#drink").hide("slow");
        $("#dessert").hide("slow");
        $("#main").hide("slow");
        $("#starter").hide("slow");
    });

    // Here we show the drinks menu and hide all other menus.
    //
    $("#drinks").click(function () { /* Here we show and hide the field. */
        $("#allmenu").hide();
        $("#drink").show();
        $("#dessert").hide();
        $("#main").hide();
        $("#starter").hide();
    });

    // Here we show the desserts menu and hide all other menus.
    //
    $("#desserts").click(function () { /* Here we show and hide the field. */
        $("#allmenu").hide();
        $("#drink").hide();
        $("#dessert").show();
        $("#main").hide();
        $("#starter").hide();
    });

    // Here we show the main course menu and hide all other menus.
    //
    $("#mains").click(function () { /* Here we show and hide the field. */
        $("#allmenu").hide();
        $("#drink").hide();
        $("#dessert").hide();
        $("#main").show();
        $("#starter").hide();
    });

    // Here we show the starters menu and hide all other menus.
    //
    $("#starters").click(function () {
        $("#allmenu").hide();
        $("#drink").hide();
        $("#dessert").hide();
        $("#main").hide();
        $("#starter").show();
    });

    // Here we put the different kinds of food into the respective menus.
    //
    $(getFoods("starter", getFoodData())).appendTo("#starter");
    $(getFoods("main", getFoodData())).appendTo("#main");
    $(getFoods("dessert", getFoodData())).appendTo("#dessert");
    $(getFoods("drink", getFoodData())).appendTo("#drink");
    $(getAllMenu(getFoodData())).appendTo("#allmenu");
});

// The menu listing all the available food at the restaurant is collected separately, by
// going through all the different kinds, and request the list for it. It also adds the separation
// between the lists, with its proper Headings.
//
function getAllMenu(arr) {

    // Collection variable
    //
    var temp = "";

    // One array contains the type descriptors, one the proper names to be entered in the menu listing.
    //
    var types = ["starter", "main", "dessert", "drink"];
    var names = ["Starters","Main Courses", "Desserts", "Beverages"];

    len = types.length;

    for (var i = 0; i < len; i++) {

        // For each type, the proper name and a horisontal ruler is added to the output.
        //
        temp += '<strong>' + names[i] + '</strong><br><hr>';

        // and then the resulting list for the type.
        //
        temp += getFoods(types[i], arr) +"<br>";

    }
    return temp;
}

// ===================================================================================================================
// The function returns all food strings (created as divs) of a certain type (given as argument).
//
function getFoods(type, arr) {

    // The collection variable
    //
    var out = "";

    // Go through the array and collect all the items of the desired type.
    //
    for (var i = 0; i < arr.length; i++) {

        // if the item is of the desired type, then we add the HTML string to the collection variable.
        // Otherwise we skip to the next item.
        //
        if (arr[i].type == type) {
            out += '<div id="' + "menuitem" + i + '" draggable="true" ondragstart="drag(event)">' + arr[i].name + ' <span class="price">' + arr[i].price + '</span></div>';
        }
    }
    // Once we are finished we return the resulting HTML string containing all the menu items for the desired menu.
    //
    return out;
}

// ===================================================================================================================
// This function returns an array, which can be read as a JSON object. This means that it is easy to
// add new elements, and that the data is easy to access, and also update if needed.
//
//
function getFoodData() {
    return [
        {"name": "Apple Pie", "price": "30", "type":"dessert", "contains": ["gluten", "nuts"]},
        {"name": "Pasta Carbonara", "price": "45", "type": "starter"},
        {"name": "Vegetable soup", "price": "45", "type": "starter"},
        {"name": "Filet Mignon", "price": "115", "type": "main"},
        {"name": "Pork Chops", "price": "65", "type": "main"},
        {"name": "Fried Salmon", "price": "115", "type": "main"},
        {"name": "Banana Split", "price": "30", "type": "dessert"},
        {"name": "Heineken Green", "price": "50", "type": "drink"},
        {"name": "Guinness III", "price":"60", "type": "drink"},
        {"name": "Stallhagen Honungsöl", "price": "75", "type": "drink"},
        {"name": "Guinness II", "price":"40", "type": "drink"},

    ]
}
// ===================================================================================================================
// END OF FILE
// ===================================================================================================================
