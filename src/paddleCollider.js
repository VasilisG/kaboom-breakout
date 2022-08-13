class PaddleCollider {
    createCollisionEvent(ball, paddle){
        let paddleComponent = paddle.getPaddleComponent();
        paddleComponent.onCollide('ball', () => {
            let paddleSide = paddle.getSide();
            switch(paddleSide){
                case 'left':
                case 'right':
                    ball.reverseSpeedX();
                    break;
                case 'up':
                case 'down':
                    ball.reverseSpeedY();
                    break;
            }
            ball.setComingFrom(paddleSide);
            play('paddleHit');
        });
    }
}