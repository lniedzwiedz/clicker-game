import {GameModeColor} from "./GameModeColor";
import {GameMain} from "./GameMain";
import {GameModeFraud} from "./GameModeFraud";
import {GameTimeout} from "./GameTimeout";

export class Game {

    bestTimeBeforeRefresh = 1300000000000000000000000000000000;

    gameMode;
    gameTimeout
    gameModeFraud;

    setGameKind(gameKind, gameRoundCount){

        gameKind = GameModeColor;

        if(gameKind === GameModeColor){
            this.gameMode = new GameModeColor();
        }

        this.gameTimeout = new GameTimeout()

        this.gameModeFraud = new GameModeFraud();

    }

    setGameRound(){
        this.gameMode.setConfigurationGameRound();
        this.gameMode.setConfigurationTimeout();
    }

    getRandomTimeout(){
        this.gameMode.getRandomTimeout();
    }

    getRandomDataToDisplay(){
        this.gameMode.getRandomData();
    }








}