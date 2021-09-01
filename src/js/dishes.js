/* COLOR THEME*/
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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

function blueTheme(){
  ctx.fillStyle = "blue";
  ctx.fillRect(30, 30, 300, 300);
  }
  blueTheme();

function yellowTheme(){
  ctx.fillStyle = "yellow";
  ctx.fillRect(30, 30, 300, 300);
}
yellowtheme();  

function blackTheme(){
  ctx.fillStyle = "black";
  ctx.fillRect(30, 30, 300, 300);
}
blackTheme();


/* NEW THEME*/
function newTheme(){
    const pattern = Trianglify({
      width: window.innerWidth,
      height: window.innerHeight
    });
  
    pattern.canvas(document.getElementById('c'));
  }
  newTheme();