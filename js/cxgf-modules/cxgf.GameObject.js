(function(window){

    /*
    *   GameObjectConfig = {
            x: position_X
            y: position_Y
            speed:
            speedX: speedX || speed
            speedY: speedY || speed
            htmlId:
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

        return GameObject;
    }());

})(window);