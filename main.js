canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
rover_image="spaceship.jpg";
background_image="space.pg";
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground()
{
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadspaceship()
{
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    if(keyPressed == '38')
    {
up();
    }
    if(keyPressed == '40') {
        down();
        }
        if(keyPressed == '37') {
        left();
        }
        if(keyPressed == '39') {
        right();
        }
}
function up() {
    
    if(spaceship_y >=0)
    {
        spaceship_y=spaceship_y-10;
        uploadBackground();
        uploadrover();
    }
    }
    function down() {
    
        if(spaceship_y <=500)
        {
            spaceship_y=spaceship_y+10;
            uploadBackground();
            uploadrover();
        }
        }
        function right() {
    
            if(spaceship_x <=700)
            {
                spaceship_x=spaceship_x+10;
                uploadBackground();
                uploadrover();
            }
            } function left() {
    
                if(spaceship_x >=0)
                {
                    spaceship_x=spaceship_x-10;
                    uploadBackground();
                    uploadrover();
                }
                }