class overworld {
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
}

    startGameLoop(){
        const step = () => {

            //clear off the canvas
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

            //Draw Lower layer
            this.map.drawLowerImage(this.ctx);

            //Draw Game Objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.x += 0.02;
                object.sprite.draw(this.ctx);
            })

            //Draw Upper layer
            this.map.drawUpperImage(this.ctx);

            requestAnimationFrame(() =>{
                step();
            })
        }
        step();
    }

    init(){
        this.map = new overworldMap(window.overworldMaps.Kitchen)
        this.startGameLoop();

       
    }
}