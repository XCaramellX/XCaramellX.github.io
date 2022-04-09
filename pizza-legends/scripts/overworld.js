class overworld {
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
}
    init(){

        //Demo Lower Image
        const image  = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        };
        image.src = "../images/maps/DemoLower.png";

        //Hero Image
        const x = 5;
        const y = 6;
        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
            hero, 
            0, // left cut
            0, // top cut
            32, // width cut
            32, //height cut
            x * 16 - 8,
            y * 16 - 18,
            32, 
            32
            )
        };
        hero.src = "../images/characters/people/hero.png";

        //Shadow Image
        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow, 
                0, // left cut
                0, // top cut
                32, // width cut
                32, //height cut
                x * 16 - 8,
                y * 16 - 18,
                32, 
                32
            )
        };

        shadow.src = "../images/characters/shadow.png";
    }

}