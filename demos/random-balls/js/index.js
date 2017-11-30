(function() {

    var worldWidth = $('#game-arena').width();
    var worldHeight = $('#game-arena').height();
    
    
    var numberOfBalls = 20;
    var balls = [];

    //Let's create 20 balls html
    createBallsHtml(numberOfBalls);

    //Let's create ball objects for those balls
    createBallObjects(numberOfBalls);

    //Let's make them move on tick
    randomMovementOnTick();



    /*
    * This function create given numberOfBalls html balls 
    * inside #game-arena
    * And ID them ball0, ball1... so on
    */
    function createBallsHtml (numberOfBalls) {
        var ballHtml = '';
        for(var i = 0; i < numberOfBalls; i++) {
            ballHtml += '<div id="ball' + i + '" class="ball"></div>';
        }
        $('#game-arena').append(ballHtml);
    }


    /*
    * This function creates given number of ball objects
    * and stores them in balls array
    */
    function createBallObjects (numberOfBalls) {
        for(var i=0; i<numberOfBalls; i++) {
            balls.push(new cxgf.GameObject({
                x: (Math.random() * (worldWidth - 100) + 50),
                y: (Math.random() * (worldHeight - 100) + 50),
                height: 30,
                width: 30,
                speed: 2 + (Math.random() * 2),
                htmlId: 'ball' + i
            }))
        }
    }


    /*
    * Bind the random movement of all the ball objects to tick
    */
    function randomMovementOnTick () {
        for (var i in balls) {
            cxgf.Ticker.onTick(balls[i].move, balls[i]);
        }
    }
})();