class BlockCollider {
    constructor(){
        this.blocksDestroyed = 0;
    }

    createCollisionEvent(ball, blocks, blockIndex, score){
        let ballComponent = ball.getBallComponent();
        let blockComponent = blocks[blockIndex].getBlockComponent();
        blockComponent.onCollide('ball', () => {            
            if(ballComponent.pos.x >= blockComponent.pos.x && ballComponent.pos.x <= blockComponent.pos.x + BLOCK_WIDTH){
                ball.reverseSpeedY();
            }
            else ball.reverseSpeedX();

            destroy(blockComponent);
            play('blockHit');
            score.update(blocks[blockIndex].getPoints());
            this.blocksDestroyed++;
            if(this.blocksDestroyed == (TOTAL_BLOCKS_X * TOTAL_BLOCKS_Y) / 2){
                ball.setSpeed(ball.getSpeed() + 1)
            }
            if(this.blocksDestroyed == TOTAL_BLOCKS_X * TOTAL_BLOCKS_Y){
                go('end', {
                    win: true,
                    score: score.getPoints()
                });
            }
        });
    }
}