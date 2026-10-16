import {GameModeColor} from "./mode/GameModeColor.js";
import {GameManager} from "./GameManager.js";
import {GameModeFraud} from "./mode/GameModeFraud.js";
import {GameModeTimeout} from "./mode/GameModeTimeout.js";
import {GameStatisticsTime} from "./statistics/GameStatisticsTime.js";
import {GameModeReactionTime} from "./mode/GameModeReactionTime.js";
import * as variablesGame from "./common/variablesGame.js";
import {mapKeyStatisticsTime} from "./common/variablesGame.js";

export class Game {

    constructor(gameModeKind, maxRoundNumber) {
        // this.gameMode = "GameModeColor";
        // this.gameRoundCount = 5;
        this.setGameConfiguration(gameModeKind, maxRoundNumber);
    }


    // gameModeKind;
    // gameModeFraud;
    gameModeCounter;
    // gameModeCounter;
    // gameStatisticsTime;
    // gameStatisticsTime = new GameStatisticsTime();

    gameModeTimeout;
    gameModeReactionTime;

    maxRoundNumber;
    currentRoundNumber;

    setGameConfiguration(gameModeKind, maxRoundNumber) {

        this.gameModeKind = gameModeKind;
        this.maxRoundNumber = maxRoundNumber;
        this.currentRoundNumber = 0;

        // this.gameModeFraud = new GameModeFraud();
        // this.gameStatisticsTime = new GameStatisticsTime();
    }

    isModeFraud = true;

    isGameModeFraud(){
        return this.isModeFraud;
    }

    runGame() {

        switch (this.isGameRunning()) {

            case true:
                this.runGameModuleKind();
                break;

            case false:
                this.gameOver();
                break;

            default:
                console.log("Upssss UNKNOWN_GAME_STATE xD");

        }
    }

    runGameModuleKind() {


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
        console.log("1 runModeFraud  ");
        // this.gameModeFraud = new GameModeFraud();
        this.gameModeCounter = new GameModeFraud();
        this.gameModeTimeout = new GameModeTimeout();

    }

    runModeKind() {
        console.log("2 runModeKind  ");

        this.gameModeKind.setGameRoundDataToDisplay();
        // this.gameModeReactionTime = new GameModeReactionTime();
        this.gameModeCounter = new GameModeReactionTime();
        this.currentRoundNumber++;
        console.log("currentRoundNumber = " + this.currentRoundNumber);
    }

    setGameRoundModeCounter(){
        this.gameModeCounter.setGameRoundModeCounterKind();
    }


    gameOver() {


    }


    setGameRoundCountTime() {
        this.gameModeKind.setConfigurationGameRound();
        this.gameModeTimeout = new GameModeTimeout();
    }

    // time not timeout
    getGameRoundReactionTimeStart() {
        // this.gameReactionTime.seReactionTimeStart();
        // return this.gameModeReactionTime = new GameModeReactionTime();
        return this.gameModeCounter = new GameModeReactionTime();
    }

    getGameRoundDataToDisplay() {
        return this.gameModeKind.getGameRoundDataToDisplay();
    }

    // setGameRoundCountFraud() {
    //     // this.gameModeFraud = new GameModeFraud();
    //     this.gameModeFraud.setFraudCountedClicks();
    // }

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
        // this.gameModeReactionTime.configureReactionTime();
        this.gameModeCounter.configureReactionTime();
    }


    getRandomTimeout() {
        return this.gameModeTimeout.getRandomTimeout();
    }

    // getRandomDataToDisplay() {
    //     this.gameTimeout.getReactionTime();
    // }

    isGameRunning() {
        return this.currentRoundNumber < this.maxRoundNumber;
    }

    setCurrentRoundNumber() {
        this.currentRoundNumber++;
    }

    getGameRoundCount() {
        return this.maxRoundNumber;
    }

    getCurrentRoundNumber() {
        return this.currentRoundNumber;
    }


    // setBestTimeBeforeRefresh() {
    //     this.bestTimeBeforeRefresh = this.gameStatisticsTime.getStatisticTimeInSecondsBest();
    // }
}