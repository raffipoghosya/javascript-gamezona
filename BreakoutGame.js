const canvas=document.getElementById("breakoutCanvas");
const ctx=canvas.getContext("2d");
let ballX = canvas.width/2;
let ballY = canvas.height-30;
let ballSpeedX = 2;
let ballSpeedY = -2;
const paddleHeight = 10;
const paddleWidth = 70;
let paddleX = (canvas.width-paddleWidth)/2;
const BrickRowCount = 5;
const BrickCoulmnCount = 5;
const BrickPadding = 10;
const BrickWidth = 75;
const BrickHeight = 20;
const BrickOffsetTop = 30;
const BrickOffsetLeft = 30;
const bricks = []
for(c=0; c<BrickCoulmnCount; c++){
    bricks[c]=[]
    for(r=0; r<BrickRowCount; r++){
        bricks[c][r]={x:0,y:0,status:1};
    }
}
document.addEventListener("keyup",KeyUpHandler);
document.addEventListener("keydown",KeyDownHandler);
let rightPressed = false;
let leftPressed = false;
function KeyDownHandler(e){
    if(e.key === "Right"||e.key === "ArrowRight"){
        rightPressed = false;
    }
    else if(e.key === "Left"||e.key === "ArrowLeft"){
        LeftPressed = false;
    }
}
// Function to draw the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
// Function to draw the paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBricks(){
    for(let c = 0; c<BrickCoulmnCount; c++){
        for(let r=0; r < BrickRowCount; r++){
            if (bricks[c][r].status === 1){
                const brickX = c*(BrickWidth + BrickPadding)+BrickOffsetLeft;
                const brickY = r*(BrickHeight+BrickPadding)+BrickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, BrickWidth, BrickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
// Collision detection for bricks
function colDet(){
    for(let c=0; c<BrickCoulmnCount; c++){
        for(let r=0; r<BrickRowCount; r++){
            const b=bricks[c][r];
            if (b.status ===1){
            if(
                ballX>b.x &&
                ballX<b.x + BrickWidth &&
                ballY>b.y &&
                ballY<b.y + BrickHeight 
            ){
                ballSpeedY = -ballSpeedY;
                b.status = 0;

                }
            }
        }
    }
}
// Function to update the game state
function update(){
    // move the paddle
    if(rightpressed && paddleX < caanvas.width - paddleWidth){
        paddleX +=7;
    }else if (leftPressed && paddleX>0){
        paddleX-=7;
    }
    // Move the ball
    ballX += ballSpeedX;
    bally+= ballSpeedY;
    // bounce to ball of the walls
    if (ballx+ballSpeedX > canvas.width || ballx+ballSpeedX<0 ){
        ballspeedX = -ballSpeedX;
    } 
    if(ballY + ballSpeedY < 0){
        ballSpeedY = -ballSpeedY;
    }else if (ballY + ballSpeedY> canvas.height-paddleHeight){
        // Check to see if ball is touching paddle
        if (ballX > paddleX && ballX < paddleX+paddleWidth){
            ballSpeedY = -ballSpeedY;
        }else{
            // Game over
            document.location.reload();
            alert("Game Over");
        }
    }
    // Check for colliion with bricks
    colDet();
}
// function to draw the game
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvasHeight);
    // clear the canvas
    drawBricks();
    drawBall();
    drawPaddle();
} 
// function to run game
function gameloop(){
    update();
    draw();
    requestAnimationFrame(gameloop);
}
// run the game
gameloop();