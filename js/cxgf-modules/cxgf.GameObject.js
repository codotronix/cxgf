(function(window){

    /*
    *   GameObjectConfig = {
    *       x:
            y:
            speed:
            htmlId:
    *   }
    */

    window.cxgf.GameObject = (function () {

        function GameObject(GameObjectConfig) {
            // this.x = x;
            // this.y = y;
            // this.htmlId = htmlId;

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
            this.x -= this.speed;
            this.render();
        };

        GameObject.prototype.moveRight = function () {
            this.x += this.speed;
            this.render();
        };

        GameObject.prototype.moveUp = function () {
            this.y -= this.speed;
            this.render();
        };

        GameObject.prototype.moveDown = function () {
            this.y += this.speed;
            this.render();
        };

        return GameObject;
    }());

})(window);