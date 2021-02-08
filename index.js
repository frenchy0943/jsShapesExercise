
function createSquare(){
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var output = "";
    for(i = 0; i < height; i++){
        for(j = 0; j < width; j++){
            output += "*";
        }
        output += "\n";
    }
    document.getElementById("output").innerHTML = output;
}

function createChecker(){
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var asterisk = true;
    var output = "";
    for(i = 0; i < height; i++){
        for(j = 0; j < width; j++){
            if(i % 2 == j % 2){
                output += "*";
            }else{
                output += " ";
            }
            asterisk = !asterisk;
        }
        output += "\n";
    }
    document.getElementById("output").innerHTML = output;
}

function createCross(){
    var size = document.getElementById("height").value;
    var output = "";
    for(i = 0; i < size; i++){
        for(j = 0; j < size; j++){
            if(j == i || j == size - i - 1){
                output += "*";
            } else {
                output += " "; 
            }
        }
        output += "\n";
    }
    document.getElementById("output").innerHTML = output;
}

function createLowerTriangle(){
    var size = document.getElementById("height").value;
    var output = "";
    for(i = 0; i < size; i++){
        for(j = 0; j < size; j++){
            if(j <= i){
                output += "*";
            }else{
                output += " ";
            }
        }
        output += "\n";
    }
    document.getElementById("output").innerHTML = output;
}

function createUpperTriangle(){
    var size = document.getElementById("height").value;
    var output = "";
    for(i = 0; i < size; i++){
        for(j = 0; j < size; j++){
            if(j < i){
                output += " ";
            }else{
                output += "*";
            }
        }
        output += "\n";
    }
    document.getElementById("output").innerHTML = output;
}

function createTrapezoid(){
    var spaces = 0;
    var stars = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var output = "";
    if(height > stars / 2){
        output += "Impossible shape!";
    }else{
        for(i = 0; i < height; i++){
            for(j = 0; j < spaces; j++){
                output += " ";
            }
            for(j = 0; j < stars; j++){
                output += "*";
            }
            for(j = 0; j < spaces; j++){
                output += " ";
            }
            stars -= 2;
            spaces += 1;
            output += "\n"
        }
    }
    document.getElementById("output").innerHTML = output;
}