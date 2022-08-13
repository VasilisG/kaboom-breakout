function addEnd(){
    scene('end', ({win, score}) => {
        if(win){
            add([
                text(GAME_WIN, {
                    size: 48,
                    font: "sink",
                }),
                pos(width() / 2, height() / 4),
                origin('center'),
                fixed()
            ]);
        }
        else{
            add([
                text(GAME_OVER, {
                    size: 48,
                    font: "sink",
                }),
                pos(width() / 2, height() / 4),
                origin('center'),
                fixed()
            ]);
        }
    
        add([
            text(GAME_TOTAL_POINTS + score, {
                size: 24,
                font: "sink",
            }),
            pos(width() / 2, height() / 4 + 100),
            origin('center'),
            fixed()
        ]);
    
        add([
            text(GAME_TOTAL_POINTS + score, {
                size: 24,
                font: "sink",
            }),
            pos(width() / 2, height() / 4 + 100),
            origin('center'),
            fixed()
        ]);
    
        add([
            text(GAME_PRESS_ANY_KEY, {
                size: 20,
                font: "sink",
            }),
            pos(width() / 2, height() / 2 + 150),
            origin('center'),
            fixed()
        ]);
    
        onKeyPress(() => {
            go('intro');
        });
    });
}