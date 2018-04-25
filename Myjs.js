var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//공의 시작위치
var x = canvas.width / 2;
var y = canvas.height - 50;
var dx = 2; var dy = -2;//공의 속도와 방향
var ballRadius = 10;
//공을 치는 패들 설정
var paddleHeight= 25;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
//키입력 변수
var rightPressed = false;
var leftPressed = false;


function drawball() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function changeBallDirection(x1, y1) {
    if (x1==ballRadius || x1 == canvas.width-ballRadius)
        dx = -dx;
    if (y1 == ballRadius )
        dy = -dy;
    if(y1 + dy < ballRadius) {
        dy = -dy;
    } 
    else if (y1 + dy > canvas.height - ballRadius-paddleHeight+3) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            return 1;
        }
    }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e){
    if(e.keyCode==39){
        rightPressed=true;
    }
    if(e.keyCode==37){
        leftPressed=true;
    }
}

function keyUpHandler(e){
    if(e.keyCode==39){
        rightPressed=false;
    }
    if(e.keyCode==37){
        leftPressed=false;
    }
}

function changePaddleDirection() {
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (changeBallDirection(x, y) == 1) {
        alert("GAME OVER");
        document.location.reload();

    }
    
    drawball();
    changePaddleDirection();
    drawPaddle();

    x += dx;
    y += dy;
}

setInterval(draw, 10);