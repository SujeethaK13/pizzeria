menu_list=["Veg Tandoori Pizza",
"Panner Tikka Pizza",
"Double cheese Pizza",
"Farm fresh Pizza",
"Corn Tomato Cheese Pizza",
"Veg Extravanza"];

function getmenu(){ 
    var arrange_list;
    arrange_list="<ol class='menulist'>";
    menu_list.sort();
    for (var i=0;i<menu_list.length;i++){
        arrange_list=arrange_list + "<li>" + menu_list[i] + "</li>"
    }   
    arrange_list=arrange_list+"</ol>"
    document.getElementById("menu_display").innerHTML= arrange_list;
}
function add_item(){
        var new_item;
        var input_item=document.getElementById("add_item").value;
        menu_list.push(input_item);
        menu_list.sort();
        new_item="<section class='cards'>";
        for(var j=0;j<menu_list.length;j++){

            new_item=new_item+'<div class="card">' +'<img src="pizzaImg.png"/>' + menu_list[j] + '</div>'
        }
          new_item=new_item+"</section>"
          document.getElementById("addmenu_display").innerHTML = new_item;
    

}