
function tester(month, day) {
    document.getElementById("calenderid").innerHTML = month + ' ' + day;
    //button to go back / restore previos innerHTML to see calendar again
}

function add_event() {
    userinput = prompt("Title: ") 
    time = prompt("Time: ")
    color = prompt("Color: ")
    //var div = document.createElement("div");
    var div = document.getElementById(time); 
    div.innerHTML = time + userinput;
    if (color == "red") {
        div.style.color = "#f11e1e"; 
    }
    if (color == "orange") {
        div.style.color = "#ff8119";
    }
    if (color == "yellow") {
        div.style.color = "#a89009";
    }
    if (color == "light green") {
        div.style.color = "#5cb904";
    }
    if (color == "dark green") {
        div.style.color = "#037a1d";
    }
    if (color == "blue") {
        div.style.color = "#2683ec";
    }
    if (color == "navy") {
        div.style.color = "#031f7a";
    }
    if (color == "purple") {
        div.style.color = "#a155ce";
    }
    if (color == "pink") {
        div.style.color = "#bb1692";
    }
    if (color == "black") {
        div.style.color = "#000000";
    }
}