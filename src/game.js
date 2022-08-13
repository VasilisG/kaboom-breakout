function addGame(){
    scene('game', () => {
        const paddleFactory = new PaddleFactory();
        const ballFactory = new BallFactory();
    
        const score = new Score(PADDLE_HEIGHT + 10, PADDLE_HEIGHT + 10, SCORE_TEXT, 0);
        const lives = new Score(width() - LIVES_TEXT.length * 22, PADDLE_HEIGHT + 10, LIVES_TEXT, GAME_LIVES);
    
        const paddleCollider = new PaddleCollider();
        const blockCollider = new BlockCollider();
    
        let downPaddle = paddleFactory.createPaddle('horizontal', 'down', 'downPaddle', 1);
        let upPaddle = paddleFactory.createPaddle('horizontal', 'up', 'upPaddle', 1);
        let leftPaddle = paddleFactory.createPaddle('vertical', 'left', 'leftPaddle', 1);
        let rightPaddle = paddleFactory.createPaddle('vertical', 'right', 'rightPaddle', 1);
    
        let ball = ballFactory.createBall(BALL_SIZE, BALL_SPEED, 'horizontal', 'down');
    
        paddleCollider.createCollisionEvent(ball, downPaddle);
        paddleCollider.createCollisionEvent(ball, upPaddle);
        paddleCollider.createCollisionEvent(ball, leftPaddle);
        paddleCollider.createCollisionEvent(ball, rightPaddle);
    
        let blocks = []
        let horizontalStartingPos = width() / 2 - (TOTAL_BLOCKS_X * (BLOCK_WIDTH + 15)) / 2;
        let verticalStartingPos = height() / 2 - (TOTAL_BLOCKS_Y * (BLOCK_HEIGHT + 15)) / 2;
        let currentBlockIndex = 0;

        for(let i=0; i<TOTAL_BLOCKS_X; i++){
            for(let j=0; j<TOTAL_BLOCKS_Y; j++){
                let blockColor = pickColor(j);
                let block = new Block(horizontalStartingPos + i * (BLOCK_WIDTH + 15), verticalStartingPos + j * (BLOCK_HEIGHT + 15), blockColor, 10);
                blocks.push(block);
                blockCollider.createCollisionEvent(ball, blocks, currentBlockIndex, score);
                currentBlockIndex++;
            }
        }
    
        onUpdate(() => {
            if(!ball.getIsAttached()){
                ball.update();
                if(!ball.isWithinBounds()){
                    if(ball.isLeftOutOfBounds()){
                        ball.setReplacementPosition('vertical', 'left');
                    }
                    if(ball.isRightOutOfBounds()){
                        ball.setReplacementPosition('vertical', 'right');
                    }
                    if(ball.isUpOutOfBounds()){
                        ball.setReplacementPosition('horizontal', 'up');
                    }
                    if(ball.isDownOutOfBounds()){
                        ball.setReplacementPosition('horizontal', 'down');
                    }
                    ball.setIsAttached(true);
                    downPaddle.setCanMove(false);
                    upPaddle.setCanMove(false);
                    leftPaddle.setCanMove(false);
                    rightPaddle.setCanMove(false);
                    if(lives.getPoints() > 0){
                        lives.update(-1);
                        if(lives.getPoints() == 0){
                            go('end', {
                                win: false,
                                score: score.getPoints()
                            });
                        }
                    }
                    play('ballDestroy');
                }
            }
            else {
                ball.replaceOnBoard();
                downPaddle.recenter();
                upPaddle.recenter();
                leftPaddle.recenter();
                rightPaddle.recenter();
            }
        });
    
        onKeyPress('space', () => {
            if(ball.getIsAttached()){
                ball.setIsAttached(false);
                downPaddle.setCanMove(true);
                upPaddle.setCanMove(true);
                leftPaddle.setCanMove(true);
                rightPaddle.setCanMove(true);
            }
        });
    });
}