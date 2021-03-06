class overworldMap{
    constructor(config){
        this.gameObjects = config.gameObject

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx, cameraPerson){
        ctx.drawImage(
        this.lowerImage, 
        utils.withGrid(10.5) - cameraPerson.x, 
        utils.withGrid(6) - cameraPerson.y)
    }

    drawUpperImage(ctx, cameraPerson){
        ctx.drawImage(
        this.upperImage, 
        utils.withGrid(10.5) - cameraPerson.x, 
        utils.withGrid(6) - cameraPerson.y)
    }

}

window.overworldMaps = {
    DemoRoom: {
            lowerSrc: "../images/maps/DemoLower.png",
            upperSrc:"../images/maps/DemoUpper.png",
            gameObject: {
                hero: new person({
                    isPlayerControlled: true,
                    x: utils.withGrid(5),
                    y: utils.withGrid(6),
                }),
                 npc1: new person({
                 x: utils.withGrid(7),
                 y:utils.withGrid(9),
                 src: "../images/characters/people/npc1.png"
                 })
            }
            
        },

    Kitchen: {
        lowerSrc: "../images/maps/KitchenLower.png",
        upperSrc:"../images/maps/KitchenUpper.png",
        gameObject: {
            hero: new gameObject({
                x: 3,
                y: 5,
            }),
            npcA: new gameObject({
                x:9,
                y:6,
                src: "../images/characters/people/npc2.png"
            }),
            npcB: new gameObject({
                x:10,
                y:8,
                src: "../images/characters/people/npc3.png"
            }),
            
        }
    },
}