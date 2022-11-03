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

            //establish the camera
            const cameraPerson = this.map.gameObjects.hero;

            //update all objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction
                });
            })

            //Draw Lower layer
            this.map.drawLowerImage(this.ctx, cameraPerson);

            //Draw Game Objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson);
            })

            //Draw Upper layer
            this.map.drawUpperImage(this.ctx, cameraPerson);

            requestAnimationFrame(() =>{
                step();
            })
        }
        step();
    }

    init(){
        this.map = new overworldMap(window.overworldMaps.DemoRoom)

        this.directionInput = new directionInput();
        this.directionInput.init();

        this.startGameLoop();

       
    }
}