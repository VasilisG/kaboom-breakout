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

// https://freesound.org/people/LittleRobotSoundFactory/sounds/270324/
// https://freesound.org/people/LittleRobotSoundFactory/sounds/270322/
// https://freesound.org/people/LittleRobotSoundFactory/sounds/270306/