class person extends gameObject{
    constructor(config){
        super(config);
        this.movementProgressRemaining = 0;

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y",1],
            "left": ["x", -1],
            "right": ["x", 1],
        }

    }

    update(state){
        this.updatePosition();
        this.updateSprite(state);

        if(this.isPlayerControlled && this.movementProgressRemaining === 0 && state.arrow){
            this.direction = state.arrow;
            this.movementProgressRemaining = 16;
        }
    }
    updatePosition(){
        if(this.movementProgressRemaining > 0){
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movementProgressRemaining -= 1;
        }
    }

     updateSprite(state){
    if(this.isPlayerControlled && this.movementProgressRemaining === 0 && !state.arrow){
     this.sprite.setAnimation("idle-"+this.direction);
     return;
    }

     if(this.movementProgressRemaining > 0){
         this.sprite.setAnimation("walk-"+this.direction);
     }
    }

}