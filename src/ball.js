class Ball {
    constructor(ballComp, radius, speed, direction, side){
        this.ballComp = ballComp;
        this.radius = radius;
        this.speed = speed;
        this.speedY = speed;
        this.speedX = 4 + Math.floor(Math.random() * (this.speed-2));
        this.direction = direction;
        this.side = side;
        this.isAttached = true;
        this.comingFrom = side;

        this.replacementDirection = direction;
        this.replacementSide = side;
    }

    getBallComponent(){
        return this.ballComp;
    }

    setBallComponent(ballComp){
        this.ballComp = ballComp;
    }

    getRadius(){
        return this.radius;
    }

    setRadius(radius){
        this.radius = radius;
    }

    getSpeedX(){
        return this.speedX;
    }

    setSpeedX(speedX){
        this.speedX = speedX;
    }

    getSpeedY(){
        return this.speedY;
    }

    setSpeedY(speedY){
        this.speedY = speedY;
    }

    getDirection(){
        return this.direction;
    }

    setDirection(direction){
        this.direction = direction;
    }

    getSide(){
        return this.side;
    }

    setSide(side){
        this.side = side;
    }

    getIsAttached(){
        return this.isAttached;
    }

    setIsAttached(isAttached){
        this.isAttached = isAttached;
    }

    getSpeed(){
        return this.speed;
    }

    setSpeed(speed){
        this.speedY = speed;
        this.speedX = parseInt(Math.random() * speed) + 2; 
    }

    getComingFrom(){
        return this.comingFrom;
    }

    setComingFrom(comingFrom){
        this.comingFrom = comingFrom;
    }

    reverseSpeedX(){
        this.speedX = -this.speedX;
    }

    reverseSpeedY(){
        this.speedY = -this.speedY;
    }

    update(){
        this.ballComp.pos.x += this.speedX;
        this.ballComp.pos.y += this.speedY;
    }

    isLeftOutOfBounds(){
        return this.ballComp.pos.x < 0;
    }

    isRightOutOfBounds(){
        return this.ballComp.pos.x > width() - this.radius;
    }

    isUpOutOfBounds(){
        return this.ballComp.pos.y < 0;
    }

    isDownOutOfBounds(){
        return this.ballComp.pos.y > height() - this.radius;
    }

    isWithinHorizontalBounds(){
        return this.ballComp.pos.x <= width() - this.radius && this.ballComp.pos.x >= 0;
    }

    isWithinVerticalBounds(){
        return this.ballComp.pos.y <= height() - this.radius && this.ballComp.pos.y >= 0;
    }

    isWithinBounds(){
        return this.isWithinHorizontalBounds() && this.isWithinVerticalBounds();
    }

    setReplacementPosition(direction, side){
        this.replacementDirection = direction;
        this.replacementSide = side;
    }

    replaceOnBoard(){
        let position = null;
        if(this.replacementDirection == 'horizontal'){
            if(this.replacementSide == 'up'){
                position = [width() / 2, PADDLE_HEIGHT + this.radius];
                this.speedY = this.speed;
            }
            else {
                position = [width() / 2, height() - PADDLE_HEIGHT - this.radius];
                this.speedY = -this.speed;
            }
            this.speedX = 4 + Math.floor(Math.random() * (this.speed-2));
        }
        else {
            if(this.replacementSide == 'left'){
                position = [PADDLE_HEIGHT + this.radius, height() / 2];
                this.speedX = this.speed;
            }
            else {
                position = [width() - PADDLE_HEIGHT - this.radius, height() / 2];
                this.speedX = -this.speed;
            }
            
            this.speedY = 4 + Math.floor(Math.random() * (this.speed-2));
        }
        this.ballComp.pos.x = position[0];
        this.ballComp.pos.y = position[1];
    }
}