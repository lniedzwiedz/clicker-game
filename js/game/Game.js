import {GameModeColor} from "./mode/GameModeColor.js";
import {GameManager} from "./GameManager.js";
import {GameModeFraud} from "./mode/GameModeFraud.js";
import {GameModeTimeout} from "./mode/GameModeTimeout.js";
import {GameStatisticsTime} from "./statistics/GameStatisticsTime.js";
import {GameModeReactionTime} from "./mode/GameModeReactionTime.js";
import * as variablesGame from "./common/variablesGame.js";
import {mapKeyStatisticsTime} from "./common/variablesGame.js";

export class Game {

    constructor(gameModeKind, gameRoundCount) {
        // this.gameMode = "GameModeColor";
        // this.gameRoundCount = 5;
        this.setGameConfiguration(gameModeKind, gameRoundCount);
    }


    // gameModeKind;
    gameModeFraud;
    // gameStatisticsTime;
    // gameStatisticsTime = new GameStatisticsTime();

    gameTimeout;
    gameReactionTime;

    gameRoundCount;
    currentRoundNumber;

    setGameConfiguration(gameModeKind, gameRoundCount) {

        this.gameModeKind = gameModeKind;
        this.gameRoundCount = gameRoundCount;
        this.currentRoundNumber = 0;

        // this.gameModeFraud = new GameModeFraud();
        // this.gameStatisticsTime = new GameStatisticsTime();
    }

    isModeFraud = true;

    runGame() {

        switch (this.isGameRunning()) {

            case true:
                this.runGameRound();
                break;

            case false:
                this.gameOver();
                break;

            default:
                console.log("Upssss UNKNOWN_GAME_STATE xD");

        }


    }

    runGameRound() {

        switch (this.isModeFraud) {

            case true:
                this.runModeFraud();
                this.isModeFraud = false;
                break;

            case false:
                this.runModeKind();
                this.isModeFraud = true;
                break;

            default:
                console.log("Upssss UNKNOWN_GAME_MODE xD");
        }
    }

    runModeFraud() {
        this.gameModeFraud = new GameModeFraud();
    }

    runModeKind() {
        this.gameModeKind.getGameRoundDataToDisplay();
    }



    gameOver(){



    }












    setGameRoundCountTime() {
        this.gameModeKind.setConfigurationGameRound();
        this.gameTimeout = new GameModeTimeout();
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

    // getStatistics() {
    //     let statisticsMap = new Map();
    //     statisticsMap.set(variablesGame.mapKeyStatisticsFraud, this.getStatisticsFraudData());
    //     statisticsMap.set(variablesGame.mapKeyStatisticsTime, this.getStatisticsTimeData());
    //     return statisticsMap;
    // }
    //
    // getStatisticsFraudData() {
    //     return this.gameModeFraud.getStatisticsFraudData();
    // }
    //
    // getStatisticsTimeData() {
    //     this.configureReactionTime();
    //     let reactionTime = this.gameReactionTime.getReactionTime();
    //
    //     // game over
    //     // this.bestTimeBeforeRefresh = this.gameStatisticsTime.getStatisticTimeInSecondsBest();
    //     // let currentRoundNumber = 3;
    //
    //     // map < map, map> -> 1 best -> 2 history
    //     // map < json with best time?, one map> -> 1 best -> 2 history
    //
    //     return this.gameStatisticsTime.getStatisticsTimeData(this.currentRoundNumber, reactionTime);
    // }

    configureReactionTime() {
        this.gameReactionTime.configureReactionTime();
    }


    getRandomTimeout() {
        return this.gameTimeout.getRandomTimeout();
    }

    // getRandomDataToDisplay() {
    //     this.gameTimeout.getReactionTime();
    // }

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


    // setBestTimeBeforeRefresh() {
    //     this.bestTimeBeforeRefresh = this.gameStatisticsTime.getStatisticTimeInSecondsBest();
    // }
}