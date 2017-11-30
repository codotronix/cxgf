(function(window){

    /*
    *   GameObjectConfig = {
            x: position_X
            y: position_Y
            speed:
            speedX: speedX || speed
            speedY: speedY || speed
            htmlId:

            
            //directionSense can be either 4 or 8
            //directionSense = 4, means it can go [E,W,N,S]
            //directionSense = 8, means it can go [E,W,N,S,NE,NW,SE,SW]
            //Used f auortomated random movement
            //default is 4
            directionSense:

    *   }
    */

    window.cxgf.GameObject = (function () {

        function GameObject(GameObjectConfig) {
            for(var key in GameObjectConfig) {
                this[key] = GameObjectConfig[key];
            }

            this.render();
        }

        GameObject.prototype.render = function () {
            $('#'+this.htmlId).css({
                top: this.y + 'px',
                left: this.x + 'px'
            });
        };

        GameObject.prototype.moveLeft = function () {
            this.x -= (this.speedX || this.speed);
            this.render();
        };

        GameObject.prototype.moveRight = function () {
            this.x += (this.speedX || this.speed);
            this.render();
        };

        GameObject.prototype.moveUp = function () {
            this.y -= (this.speedY || this.speed);
            this.render();
        };

        GameObject.prototype.moveDown = function () {
            this.y += (this.speedY || this.speed);
            this.render();
        };

        GameObject.prototype.move = function (direction) {
            if (direction === 'left') {
                this.moveLeft();
            }
            else if (direction === 'right') {
                this.moveRight();
            }
            else if (direction === 'up') {
                this.moveUp();
            }
            else if (direction === 'down') {
                this.moveDown();
            }
            else if (direction === 'random' || direction === undefined) {

                //If this.directionSense is 4, means can go to all 4 directions
                //Also if directionSense is undefined, default to directionSense=4 
                if (this.directionSense === 4 || this.directionSense === undefined) {
                    
                    //First, calculate the possible directions
                    //Then randomly pick 1 among the possibilities
                    //to stop shaking behavior, restrict movement direction
                    if (this.prevDirection === 'N') {
                      this.direction = ['N','E','W'][Math.floor(Math.random() * 3)];  
                    }
                    else if (this.prevDirection === 'E') {
                      this.direction = ['N','E','S'][Math.floor(Math.random() * 3)];  
                    }
                    else if (this.prevDirection === 'S') {
                      this.direction = ['E','S','W'][Math.floor(Math.random() * 3)];  
                    }
                    else if (this.prevDirection === 'W') {
                      this.direction = ['N','S','W'][Math.floor(Math.random() * 3)];  
                    }
                    //1st time this.prevDirection will be undefined
                    else {
                      this.direction = ['E','W','N','S'][Math.floor(Math.random() * 4)];
                    }
                    
                    
                    if (this.direction === 'N') { this.moveUp(); }
                    else if (this.direction === 'E') { this.moveRight(); }
                    else if (this.direction === 'S') { this.moveDown(); }
                    else if (this.direction === 'W') { this.moveLeft(); }
                    
                    this.prevDirection = this.direction;

                }
                else if (this.directionSense === 8) {
                    //TODO: implement movement for 8 directional things
                }               
                
            }
        }

        GameObject.prototype.onCollision = function (collidingObj) {
            console.log(this);
            console.log(" is in collision with ");
            console.log(collidingObj);
        }

        return GameObject;
    }());

})(window);