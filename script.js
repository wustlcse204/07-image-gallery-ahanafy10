
function zoom(){
  document.getElementById("photos").style.height="1000px";
  document.getElementById("photos").style.width="1000px";
}
function hover(){
document.getElementById("photos").style.filter="brightness(80%)";
}
function undo(){
  document.getElementById("photos").style.filter="brightness(100%)";
}
function zoomout(){
  document.getElementById("photos").style.height="300px";
  document.getElementById("photos").style.width="300px";
}
