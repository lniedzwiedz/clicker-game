import {GameModeColor} from "./GameModeColor.js";
import {GameMain} from "./GameMain.js";
import {GameModeFraud} from "./GameModeFraud.js";
import {GameTimeout} from "./GameTimeout.js";
import {GameStatisticTime} from "./GameStatisticTime.js";

export class Game {

    constructor(gameKind, gameRoundCount) {
        // this.gameMode = "GameModeColor";
        // this.gameRoundCount = 5;
        this.setGameConfigurationMain(gameKind, gameRoundCount);
    }

    gameMode;
    gameModeFraud;
    gameRoundCount;
    gameTimeout
    gameStatisticTime

    bestTimeBeforeRefresh = 1300000000000000000000000000000000;
    currentRoundNumber

    setGameConfigurationMain(gameMode, gameRoundCount) {

        let gameKind = "GameModeColor";

        if (gameKind === gameMode) {
            console.log("game mode color");
            this.gameMode = new GameModeColor();

        } else {
            console.log("game mode abc");
        }

        this.gameRoundCount = gameRoundCount;
        this.currentRoundNumber = 0;
        this.fraudCurrentRoundNumber = 0;

        this.gameModeFraud = new GameModeFraud();
    }

    setGameRoundCountTime() {
        this.gameMode.setConfigurationGameRound();
        this.gameTimeout = new GameTimeout()
    }

    getGameRoundCountTimeStart() {
        this.gameTimeout.setStartTime();
    }

    getGameRoundDataToDisplay() {
        return this.gameMode.getGameRoundDataToDisplay();
    }

    setGameRoundCountFraud() {
        // this.gameModeFraud = new GameModeFraud();
        this.gameModeFraud.setFraudCountedClicks();
    }

    getStatisticsFraudData(){
        return this.gameModeFraud.getStatisticsFraudData();
    }

    getRandomTimeout() {
        return this.gameTimeout.getRandomTimeout();
    }

    getRandomDataToDisplay() {
        this.gameTimeout.getReactionTime();
    }


//mainGame class
    isGameRunning() {
        return this.currentRoundNumber < this.gameRoundCount;
    }

    setCurrentRoundNumber() {
        this.currentRoundNumber++;
    }

    getGameRoundCount() {
        return this.gameRoundCount;
    }

    getCurrentRoundNumber() {
        return this.currentRoundNumber;
    }
}