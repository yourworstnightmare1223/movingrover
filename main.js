canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
nasa=["img 1.jpeg","img 2.jpeg"];
r=Math.floor(Math.random()*2);
background_image=nasa[r];
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    background_image_tag= new Image();
    background_image_tag.onload=uploadbackground;
    background_image_tag.src=background_image;
    rover_image_tag= new Image();
    rover_image_tag.onload=uploadrover;
    rover_image_tag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypress=e.keyCode;
    if(keypress=="38"){
        up();

    }
    if(keypress=="40"){
        down();

    }
    if(keypress=="37"){
        left();

    }
    if(keypress=="39"){
        right();

    }

}

function up()
{

    if(rover_y >=0)
    {
        rover_y =rover_y - 10;
        console.log("when up arrow is pressed, x = "+ rover_x +  "| y =" + rover_y );
        uploadbackground();
        uploadrover();
    }
}
    
function down()
{

    if(rover_y <=500)
    {
        rover_y =rover_y + 10;
        console.log("when down arrow is pressed, x = "+ rover_x +  "| y =" + rover_y );
        uploadbackground();
        uploadrover();
    }
}

function left()
{

    if(rover_x >=0)
    {
        rover_x =rover_x - 10;
        console.log("when left arrow is pressed, x = "+ rover_x +  "| y =" + rover_y );
        uploadbackground();
        uploadrover();
    }
}

function right()
{

    if(rover_x <=700)
    {
        rover_x =rover_x + 10;
        console.log("when right arrow is pressed, x = "+ rover_x +  "| y =" + rover_y );
        uploadbackground();
        uploadrover();
    }
}
    
    
    
