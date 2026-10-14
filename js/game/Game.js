import {GameModeColor} from "./GameModeColor.js";
import {GameMain} from "./GameMain.js";
import {GameModeFraud} from "./GameModeFraud.js";
import {GameTimeout} from "./GameTimeout.js";
import {GameStatisticsTime} from "./GameStatisticsTime.js";
import {GameModeReactionTime} from "./GameModeReactionTime.js";
import * as variablesGame from "./common/variablesGame.js";
import {mapKeyStatisticsTime} from "./common/variablesGame.js";

export class Game {

    constructor(gameKind, gameRoundCount) {
        // this.gameMode = "GameModeColor";
        // this.gameRoundCount = 5;
        this.setGameConfigurationMain(gameKind, gameRoundCount);
    }

    gameModeKind;
    gameModeFraud;
    gameStatisticsTime;

    gameTimeout;
    gameReactionTime;


    bestTimeBeforeRefresh = 1300000000000000000000000000000000;
    gameRoundCount;
    currentRoundNumber;

    setGameConfigurationMain(gameMode, gameRoundCount) {

        let gameKind = "GameModeColor";

        if (gameKind === gameMode) {
            // console.log("game mode color");
            this.gameModeKind = new GameModeColor();

        } else {
            // console.log("game mode abc");
        }

        this.gameRoundCount = gameRoundCount;
        this.currentRoundNumber = 0;
        // this.fraudCurrentRoundNumber = 0;

        this.gameModeFraud = new GameModeFraud();
        this.gameStatisticsTime = new GameStatisticsTime();
    }

    setGameRoundCountTime() {
        this.gameModeKind.setConfigurationGameRound();
        this.gameTimeout = new GameTimeout();
    }

    // time not timeout
    getGameRoundReactionTimeStart() {
        // this.gameReactionTime.seReactionTimeStart();
        this.gameReactionTime = new GameModeReactionTime();
    }

    getGameRoundDataToDisplay() {
        return this.gameModeKind.getGameRoundDataToDisplay();
    }

    setGameRoundCountFraud() {
        // this.gameModeFraud = new GameModeFraud();
        this.gameModeFraud.setFraudCountedClicks();
    }

    getStatistics() {
        let statisticsMap = new Map();
        statisticsMap.set(variablesGame.mapKeyStatisticsFraud, this.getStatisticsFraudData());
        statisticsMap.set(variablesGame.mapKeyStatisticsTime, this.getStatisticsTimeData());
        return statisticsMap;
    }

    getStatisticsFraudData() {
        return this.gameModeFraud.getStatisticsFraudData();
    }

    getStatisticsTimeData() {
        this.configureReactionTime();
        let reactionTime = this.gameReactionTime.getReactionTime();
        this.bestTimeBeforeRefresh = this.gameStatisticsTime.getStatisticTimeInSecondsBest();
        let currentRoundNumber = 3;

        // map < map, map> -> 1 best -> 2 history
        // map < json with best time?, one map> -> 1 best -> 2 history

        return this.gameStatisticsTime.getStatisticsTimeData(currentRoundNumber, reactionTime);
    }

    configureReactionTime() {
        this.gameReactionTime.configureReactionTime();
    }


    getRandomTimeout() {
        return this.gameTimeout.getRandomTimeout();
    }

    // getRandomDataToDisplay() {
    //     this.gameTimeout.getReactionTime();
    // }


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