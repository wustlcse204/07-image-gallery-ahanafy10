<script>
var bigpic = document.getElementById("gal");
var total = document.getElementsByTagName("img");
var gallery = document.getElementById('gallery');
var nature = document.getElementById('nature');
var lake = document.getElementById('lake');
var mountain = document.getElementById('mountain');
var sun = document.getElementById('sun');
var beach = document.getElementById('beach');
var view = document.getElementById('view');
var water = document.getElementById('water');
var clouds = document.getElementById('clouds');
var cool = document.getElementById('cool');
var pi = document.getElementById('pi');
var pnw = document.getElementById('pnw');
var house = document.getElementById('house');
var arr = [];
var index = 0;


for(i = 0;i<total.length;i++){
  arr.push(String(total[i].src));
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  gallery.style.display = "none";
}

nature.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}
lake.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}
mountain.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}
sun.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}
beach.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}
view.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}
water.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}
clouds.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}
cool.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}
pi.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}
pnw.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}
house.onclick = function(){
  index = arr.indexOf(String(this.src));
  gallery.style.display = "block";
  bigpic.src = this.src;
}

function next(){
index +=1;
bigpic.src = arr[index];
}

function prev(){
index -=1;
bigpic.src = arr[index];
}

</script>
