class Block {
    constructor(x, y, color, points){
        this.x = x;
        this.y = y;
        this.color = color;
        this.points = points;
        this.blockComp = add([
            pos(this.x, this.y),
            rect(BLOCK_WIDTH, BLOCK_HEIGHT),
            area(),
            solid(),
            this.color,
            outline(2),
            "block"
        ]);
    }

    getX(){
        return this.x;
    }

    setX(x){
        this.x = x;
    }

    getY(){
        return this.y;
    }

    setY(y){
        this.y = y;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    getPoints(){
        return this.points;
    }

    setPoints(points){
        this.points = points;
    }

    getBlockComponent(){
        return this.blockComp;
    }
}