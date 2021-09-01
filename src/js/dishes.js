var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function greenTheme(){
ctx.fillStyle = "green";
ctx.fillRect(30, 30, 300, 300);
}
greenTheme();
function redTheme(){
ctx.fillStyle = "red";
ctx.fillRect(30, 30, 300, 300);
}
redTheme();


function newTheme(){
    var pattern = Trianglify({
      width: window.innerWidth,
      height: window.innerHeight
    });
  
    pattern.canvas(document.getElementById('c'));
  }
  
  newTheme();