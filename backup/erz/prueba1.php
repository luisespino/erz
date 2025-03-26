<HTML>
<HEAD>
<TITLE>Circle</TITLE>
<script type="text/javascript" src="wz_jsgraphics.js"></script>


</HEAD>
<BODY>
<SCRIPT>var ns = (document.layers) ? 1:0; // Access layers through ns
var IE = (document.all) ? 1:0; // Access layers through Internet Explorer
var ns6 = (document.getElementById && !document.all) ? 1:0; // Access layers through ns 6
var dragging = false; // Boolean mouse dragging variable
var circle = new jsGraphics();
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;

document.onmousemove = draw_circle;
document.onmousedown = mouse_down;
document.onmouseup = mouse_up;

if (navigator.userAgent.indexOf('Win') != -1)
{
var vertical_adjust = 19;
var horizontal_adjust = -10;
if(ns || ns6)
{
var horizontal_space = 12;
var vertical_space = 76;
}
else
{
var horizontal_space = 4;
var vertical_space = 68;
}

}

// Function to check if mouse has been released
function mouse_up(e) {
circle.setColor("#00ff00"); // green

var circlewidth = x2-x1;
var circleheight=y2-y1;

if (circlewidth < 0) {
circlewidth = circlewidth *-1;
}
if (circleheight < 0) {
circleheight = circleheight *-1;
}

var radius = Math.sqrt((Math.pow(circlewidth, 2)) + (Math.pow(circleheight, 2)));

x1 = x1 - radius;
y1 = y1 - radius;
x2 = radius + radius;
y2 = radius + radius;

circle.drawEllipse(x1, y1, x2, y2);
circle.paint();

}

// Get the mouse coordinates
function draw_circle(e) {

getXY(e);

if (dragging) {
x2 = mouseX;
y2 = mouseY;

if ((x2 - x1) > 50) {
circle.setColor("#FFFFFF");
circle.drawString(".", x1, y1);
circle.setColor("#00ff00"); // green

var circlewidth = x2-x1;
var circleheight=y2-y1;

if (circlewidth < 0) {
circlewidth = circlewidth *-1;
}
if (circleheight < 0) {
circleheight = circleheight *-1;
}

var radius = Math.sqrt((Math.pow(circlewidth, 2)) + (Math.pow(circleheight, 2)));

x1 = x1 - radius;
y1 = y1 - radius;
x2 = radius + radius;
y2 = radius + radius;

circle.drawEllipse(x1, y1, x2, y2);
circle.paint();
circle.clear();
}

} else {
window.status = "mouseX: " + mouseX + " mouseY: " + mouseY;
}
}

// Get coordinates for the image
function getXY(e) {
if (ns || ns6) {
mouseX = e.pageX;
mouseY = e.pageY;
} else if (IE) {
mouseX = event.clientX + document.body.scrollLeft;
mouseY = event.clientY + document.body.scrollTop;
} else {
mouseX = mouseY = 0;
}
}

// Function that is called when mouse is down or dragging
function mouse_down(e) {
getXY(e);

if (!dragging) {
getXY(e);
firstx = x1 = mouseX;
firsty = y1 = mouseY;
x2 = x1;
y2 = y1;
dragging = true;
}
}
</SCRIPT>
</BODY>
</HTML>