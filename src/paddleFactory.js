class PaddleFactory {
    
    createPaddle(direction, side, name, movement){
        let rectangle = null;
        let position = null;
        if(!['horizontal', 'vertical'].includes(direction)){
            console.error('Paddle direction must be either "horizontal" or "vertical".');
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
        
        if(direction == 'horizontal'){
            rectangle = rect(PADDLE_WIDTH, PADDLE_HEIGHT);
            if(side == 'up'){
                position = pos(width() / 2 - PADDLE_WIDTH / 2, 0);
            }
            else {
                position = pos(width() / 2 - PADDLE_WIDTH / 2, height() - PADDLE_HEIGHT);
            }
        }
        else {
            rectangle = rect(PADDLE_HEIGHT, PADDLE_WIDTH);
            if(side == 'left'){
                position = pos(0, height() / 2 - PADDLE_WIDTH / 2);
            }
            else {
                position = pos(width() - PADDLE_HEIGHT, height() / 2 - PADDLE_WIDTH / 2);
            }
        }

        let paddleComp = add([
            rectangle,
            area(),
            solid(),
            position,
            color(180, 150, 100),
            name
        ]);

        return new Paddle(paddleComp, direction, side, name, movement);
    }
}