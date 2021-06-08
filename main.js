menu_list_array = ["Veg Margherita Pizza",
    "Chicken Tandoori Pizza",
    "Veg Supreme Paizza",
    "Panner Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravagnaza Pizza"];

function getmenue() {
    var htmldata;
    htmldata = "<ol class='menuelist'>"
    menue_list_array.sort();
    for (var i = 0; i < menue_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menue_list_array[i] + '</li>'
    }
}
htmldata = htmldata + "</ol>"
document.getElementById("display_menue").innerHTML = htmldata;

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menue_list_array.sort();
    htmldata = '<section class="card">'
        + '<img src="imgages/pizzaImg.png">'
        + menue_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenue").innerHTML = htmldata;

function add_top() {
    var item=document.getElementById("add_item").value;
    menue_list_array.push(item);
    add_item();
}