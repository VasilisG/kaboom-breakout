function startGame(){
    go('intro');
}

kaboom({
    width: 1000,
    height: 800,
    background: [0, 0, 0]
});

loadSound('paddleHit', 'sounds/paddleHit.mp3');
loadSound('blockHit', 'sounds/blockHit.mp3');
loadSound('ballDestroy', 'sounds/ballDestroy.mp3');

addIntro();
addGame();
addEnd();

startGame();

// debug.inspect = true