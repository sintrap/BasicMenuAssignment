document.body.onload = CreateMenu;

function CreateMenu(){
var heading = document.createElement("h1");
var headingContent = document.createTextNode("Basic Menu")

var divAnimal = document.createElement("div");
var divAnimalContent =  document.createTextNode("Animals");

var divBirds = document.createElement("div");
var divBirdsContent = document.createTextNode("Birds");

var divInsects = document.createElement("div");
var divInsectsContent = document.createTextNode("Insects");

var divTrees = document.createElement("div");
var divTreesContent =  document.createTextNode("Trees");

divGeneral = document.createElement("div");


heading.appendChild(headingContent);
divAnimal.appendChild(divAnimalContent);
divBirds.appendChild(divBirdsContent);
divInsects.appendChild(divInsectsContent);
divTrees.appendChild(divTreesContent);

divAnimal.className = "menu-button";
divBirds.className = "menu-button";
divInsects.className ="menu-button";
divTrees.className ="menu-button";
heading.className = "heading";

divAnimal.addEventListener("click", function(){ChangeText("Animals")}, false);
divBirds.addEventListener("click", function(){ChangeText("Birds")}, false);
divInsects.addEventListener("click", function(){ChangeText("Insects");}, false);
divTrees.addEventListener("click", function(){ChangeText("Trees");}, false);


//alert(divAnimal);
//var currentDiv = document.getElementById("existingDiv");
///document.body.insertBefore(divAnimal,currentDiv);
document.body.appendChild(heading);
document.body.appendChild(divAnimal);
document.body.appendChild(divBirds);
document.body.appendChild(divInsects);
document.body.appendChild(divTrees);



}
//which goes with node and which goes with document
function ChangeText(new_text)
{
    var divGeneralContent = document.createTextNode(new_text);
    divGeneral.innerHTML = " " ;
    divGeneral.appendChild(divGeneralContent);
    divGeneral.className = "menu-content";
    divGeneral.style.display = "block"; 
    window.setTimeout("HideMenuContent();", 3000);
    document.body.appendChild(divGeneral);

}

function HideMenuContent()
{
    var x = document.getElementsByClassName("menu-content");
    if(x[0].style.display == "block"){
        x[0].style.display = "none";
    }
}