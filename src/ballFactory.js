class BallFactory {

    createBall(radius, speed, direction, side){
        if(radius <= 0){
            console.error('Ball needs to have a radius.');
            return null;
        }
        if(speed == 0){
            console.error('Ball needs to have a non-zero speed.');
            return null;
        }
        if(!['horizontal', 'vertical'].includes(direction)){
            console.error('Ball direction must be either "horizontal" or "vertical".');
            return null;
        }
        else {
            if(direction == 'horizontal' && !['up', 'down'].includes(side)){
                console.error('When picking "horizontal" direction, side must be either "up" or "down".');
                return null;
            }
            if(direction == 'vertical' && !['left', 'right'].includes(side)){
                console.error('When picking "vertical" direction, side must be either "left" or "right".');
                return null;
            }
        }

        let circleShape = circle(radius);
        let position = null;
        let ballComponent = null;

        if(direction == 'horizontal'){
            if(side == 'up'){
                position = pos(width() / 2, PADDLE_HEIGHT + radius);
            }
            else {
                position = pos(width() / 2, height() - PADDLE_HEIGHT - radius);
            }
        }
        else {
            if(side == 'left'){
                position = pos(PADDLE_HEIGHT + radius, height() / 2);
            }
            else {
                position = pos(width() - PADDLE_HEIGHT - radius, height() / 2);
            }
        }

        ballComponent = add([
            circleShape,
            position,
            area({
                width: 2 * radius,
                height: 2 * radius
            }),
            origin('center'),
            'ball'
        ]);

        return new Ball(ballComponent, radius, speed, direction, side);
    }
}