class Paddle { 
    constructor(paddleComp, direction, side, name, movement){
        this.paddleComp = paddleComp;
        this.direction = direction;
        this.side = side;
        this.name = name;
        this.movement = movement;
        this.canMove = false;

        this.initialPosX = this.paddleComp.pos.x;
        this.initialPosY = this.paddleComp.pos.y;

        this.createControls();
        this.update();
    }

    setCanMove(canMove){
        this.canMove = canMove;
    }

    getCanMove(){
        return this.canMove;
    }

    getPaddleComponent(){
        return this.paddleComp;
    }

    setPaddleComponent(paddleComp){
        this.paddleComp = paddleComp;
    }

    getSide(){
        return this.side;
    }

    setSide(side){
        this.side = side;
    }

    createControls(){
        onKeyDown("right", () => {
            if(this.direction == 'horizontal' && this.canMove){
                this.paddleComp.move(this.movement * PADDLE_SPEED, 0);
            }
        });
        
        onKeyDown("left", () => {
            if(this.direction == 'horizontal' && this.canMove){
                this.paddleComp.move(-this.movement * PADDLE_SPEED, 0);
            }
        });

        onKeyDown("up", () => {
            if(this.direction == 'vertical' && this.canMove){
                this.paddleComp.move(0, -this.movement * PADDLE_SPEED);
            }
        });

        onKeyDown("down", () => {
            if(this.direction == 'vertical' && this.canMove){
                this.paddleComp.move(0, this.movement * PADDLE_SPEED);
            }
        });
    }

    update(){
        onUpdate(this.name, () => {
            if(this.direction == 'horizontal'){
                if(this.paddleComp.pos.x < 0){
                    this.paddleComp.pos.x = 0;
                }
                if(this.paddleComp.pos.x > width() - PADDLE_WIDTH){
                    this.paddleComp.pos.x = width() - PADDLE_WIDTH;
                }
            }
            else {
                if(this.paddleComp.pos.y < 0){
                    this.paddleComp.pos.y = 0;
                }
                if(this.paddleComp.pos.y > height() - PADDLE_WIDTH){
                    this.paddleComp.pos.y = height() - PADDLE_WIDTH;
                }
            }
        });
    }

    recenter(){
        this.paddleComp.pos.x = this.initialPosX;
        this.paddleComp.pos.y = this.initialPosY;
    }
}