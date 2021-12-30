var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
color="black";
width_of_line=2;
mouseEvent="empty";
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("current position of x and y coordinates =");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("current position of x and y coordinates =");
        console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}