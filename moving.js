var velocity = 2;
    var positionX = 0;
    var reverse = false;

    var ball = document.getElementById("ball");
    var ball2 = document.getElementById("ball2");

    function moveBall() {

        var xMin = 0;
        var xMax = 1250;

        if (reverse) {
            positionX = positionX - velocity;
        }
        else {
            positionX = positionX + velocity;
        }

        ball.style.left = positionX + "px";
        ball2.style.left = (xMax - positionX) + "px";

        if (positionX >= xMax || positionX <= xMin) {
            reverse = !reverse;
        }
    }
    setInterval(moveBall, 2);