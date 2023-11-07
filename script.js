
function changeTextColor() {
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hexcode = '';

    for(var i=0; i<6; i++){
        var random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode += hex_numbers[random_index]
    }

    document.querySelector("h1").style.color = "#" + hexcode;
    
  }

  // `displayTime` function ko har ek second mein execute karega
  setInterval(changeTextColor, 1000);

function changeColors(){
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hexcode = '';

    for(var i=0; i<6; i++){
        var random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode += hex_numbers[random_index]
    }

    document.querySelector("#hex-code").innerHTML = hexcode
    var body = document.querySelector("body");
    body.style.background = "#" + hexcode;
    
}

