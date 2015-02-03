/**
 * Created by alonso on 2/2/15.
 */

function observer(object, event) {
	console.log(object);
	if (object === ("mouse" || "mouse2")) {
		event(object);
	}
	//var mouseOutResult = onMouseOut(mouse);
	//var mouseOverResult = onMouseOver(mouse);
}

function onMouseOut(object) {
	setBackgroundColor(object, "blue");
}

function onMouseOver(object) {
	setBackgroundColor(object, "red");
}

function setBackgroundColor(object, color) {
	if (color === "red") {
		object.style.backgroundColor = "red";
	} else if (color === "blue") {
		object.style.backgroundColor = "blue";
	}
}

function main() {
	var mouse = document.getElementById("mouse");
	var mouse2 = document.getElementById("mouse2");
	mouse.onmouseout = function(mouseOnMouseOut){
		setBackgroundColor(mouse, "blue");
		observer(mouse, mouseOnMouseOut);
	};
	mouse.onmouseover = function(mouseOnMouseOver){
		setBackgroundColor(mouse, "red");
		observer(mouse, mouseOnMouseOver);
	};
	mouse2.onmouseout = function(mouse2OnMouseOut){
		setBackgroundColor(mouse2, "blue");
		observer(mouse2, mouse2OnMouseOut);
	};
	mouse2.onmouseover = function(mouse2OnMouseOver){
		setBackgroundColor(mouse2, "red");
		observer(mouse2, mouse2OnMouseOver);
	};
}
main();