class gameObject{
    constructor(config){
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.sprite = new sprite({
            gameObject: this,
            src: config.src || "../images/characters/people/hero.png"
        });
    }

}