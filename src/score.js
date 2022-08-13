class Score {
    constructor(x, y, scoreText, points){
        this.x = x;
        this.y = y;
        this.scoreText = scoreText;
        this.points = points;
        this.scoreComp = add([
            text(this.scoreText + this.points, {
                size: 20,
                font: "sink",
            }),
            pos(this.x, this.y),
            { value: this.points },
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

    getScoreText(){
        return this.scoreText;
    }

    setScoreText(scoreText){
        this.scoreText = scoreText;
    }

    getPoints(){
        return this.points;
    }

    setPoints(points){
        this.points = points;
    }

    update(newPoints){
        this.setPoints(this.getPoints() + newPoints);
        this.scoreComp.value = this.points;
        this.scoreComp.text = this.scoreText + this.points;
    }
}