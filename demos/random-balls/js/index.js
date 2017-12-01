(function() {

    var worldWidth = $('#game-arena').width();
    var worldHeight = $('#game-arena').height();
    
    
    var numberOfBalls = 10;
    var balls = [];
    var boundaries = [];

    //Let's create 20 balls html
    createBallsHtml(numberOfBalls);

    //Let's create ball objects for those balls
    createBallObjects(numberOfBalls);

    //Create Screen Boundaries on 4 sides
    createBoundaryObjects();

    //Let's make them move on tick
    randomMovementOnTick();

    //Start Watching for Collisions between Balls And Walls
    cxgf.Collision.watch(balls, boundaries);
    cxgf.Collision.startWatching();


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
    * ALSO, we will override the onCollision function
    * So that on collission with boundaries, it will turn around
    */
    function createBallObjects (numberOfBalls) {
        for(var i=0; i<numberOfBalls; i++) {
            balls.push(new cxgf.GameObject({
                x: (Math.random() * (worldWidth - 100) + 50),
                y: (Math.random() * (worldHeight - 100) + 50),
                height: 30,
                width: 30,
                speed: 2 + (Math.random() * 2),
                htmlId: 'ball' + i,
                holdDirectionNTurns: Math.floor(Math.random() * 9 + 5),
                onCollision: function (collidinObj) {
                    //console.log("overrridden collision function called");
                    this.turnAround();
                }
            }));
        }
    }


    /*
    * This function will create 4 Boundaries
    * on each side of the screen
    * So that LATER we can detect collision 
    * [and check which ball is moving outside]
    */
    function createBoundaryObjects () {

        // Left Boundary
        boundaries.push(new cxgf.GameObject({
            x: 0,
            y: 0,
            height: worldHeight,
            width: 3
        }));

        // Top Boundary
        boundaries.push(new cxgf.GameObject({
            x: 0,
            y: 0,
            height: 3,
            width: worldWidth
        }));

        // Right Boundary
        boundaries.push(new cxgf.GameObject({
            x: worldWidth-3,
            y: 0,
            height: worldHeight,
            width: 3
        }));

        // Bottom Boundary
        boundaries.push(new cxgf.GameObject({
            x: 0,
            y: worldHeight-3,
            height: 3,
            width: worldWidth
        }));
    }


    /*
    * Bind the random movement of all the ball objects to tick
    */
    function randomMovementOnTick () {
        for (var i in balls) {
            cxgf.Ticker.onTick(balls[i].move, balls[i], 5);
        }
    }
})();