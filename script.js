var css = document.querySelector("h3");
var col1 = document.getElementById("col1");
var col2 = document.querySelector(".col2");
var body = document.getElementById("bodyGradient");


col1.addEventListener("input", setColour);
col2.addEventListener("input", setColour);

function setColour(){
    body.style.background = "linear-gradient(to right, " + col1.value + "," + col2.value + ")";
    
    css.textContent = body.style.background;
}