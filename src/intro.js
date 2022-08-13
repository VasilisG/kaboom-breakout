function addIntro() {
    let blinkTime = 0;
    let forth = true;

    scene('intro', () => {

        add([
            text(GAME_TITLE, {
                size: 48,
                font: "sink",
            }),
            pos(width() / 2, height() / 4),
            origin('center'),
            fixed()
        ]);
    
        add([
            text(GAME_CONTROLS_TITLE, {
                size: 24,
                font: "sink",
            }),
            pos(width() / 2, height() / 4 + 100),
            origin('center'),
            fixed()
        ]);
    
        add([
            text(GAME_CONTROLS_1, {
                size: 20,
                font: "sink",
            }),
            pos(width() / 2, height() / 4 + 150),
            origin('center'),
            fixed()
        ]);
    
        add([
            text(GAME_CONTROLS_2, {
                size: 20,
                font: "sink",
            }),
            pos(width() / 2, height() / 4 + 200),
            origin('center'),
            fixed()
        ]);
    
        add([
            text(GAME_PRESS_ANY_KEY, {
                size: 20,
                font: "sink",
                transform: (idx, ch) => ({
                    color: rgb(255 * Math.cos(blinkTime), 255 * Math.cos(blinkTime), 255 * Math.cos(blinkTime)),
                })
            }),
            pos(width() / 2, height() / 4 + 400),
            origin('center'),
            fixed()
        ]);
    
        onKeyPress(() => {
            go('game');
        });

        onUpdate(() => {
            if(forth){
                blinkTime += (Math.PI / 120);
                if(blinkTime >= Math.PI / 2){
                    forth = false;
                    blinkTime = Math.PI / 2;
                } 
            }
            else {
                blinkTime -= (Math.PI / 120);
                if(blinkTime <= 0){
                    forth = true;
                    blinkTime = 0;
                } 
            }
        });
    });
}