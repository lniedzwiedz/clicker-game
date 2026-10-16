import {Game} from "./Game.js";
import * as variablesGame from "./common/variablesGame.js";
import {GameStatisticsTime} from "./statistics/GameStatisticsTime.js";
import {GameStatisticsFraud} from "./statistics/GameStatisticsFraud.js";
import {GameModeColor} from "./mode/GameModeColor.js";
import {GameModeReactionTime} from "./mode/GameModeReactionTime.js";

export class GameManager {

    constructor() {

    }

    game;
    gameModeKind;

    gameStatisticsFraud = new GameStatisticsFraud();
    gameStatisticsTime = new GameStatisticsTime();


    configureGame(gameModeKind, gameRoundCount) {

        this.setGameModeKind(gameModeKind);
        this.game = new Game(this.gameModeKind, gameRoundCount);
    }

    setGameModeKind(gameModeKind) {
        let gameKind = "GameModeColor";

        if (gameKind === gameModeKind) {
            // console.log("game mode color");
            this.gameModeKind = new GameModeColor();

        } else {
            // console.log("game mode abc");
        }
    }

    runGame() {
        this.game.runGame();
    }

    isGameModeFraud(){
        return this.game.isGameModeFraud();
    }

    setGameRoundModeCounter(){
        this.game.setGameRoundModeCounter();
    }

    // setGameRoundCountFraud() {
    //     // this.gameModeFraud = new GameModeFraud();
    //     this.game.setFraudCountedClicks();
    // }

    getGameRoundCount() {
        return this.game.getGameRoundCount();
    }

    getCurrentRoundNumber() {
        return this.game.currentRoundNumber;
    }

    getRandomTimeout() {
        return this.game.getRandomTimeout();
    }

    getGameRoundDataToDisplay() {
        return this.gameModeKind.getGameRoundDataToDisplay();
    }



    getGameRoundReactionTimeStart() {
        // this.gameReactionTime.seReactionTimeStart();
        return this.gameModeReactionTime = new GameModeReactionTime();
    }




    getStatistics() {
        let statisticsMap = new Map();
        statisticsMap.set(variablesGame.mapKeyStatisticsFraud, this.getStatisticsFraudData());
        // statisticsMap.set(variablesGame.mapKeyStatisticsTime, this.getStatisticsTimeData());
        return statisticsMap;
    }

    getStatisticsFraudData() {
        return this.gameStatisticsFraud.getStatisticsFraud();
    }

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

    gameOver() {
        this.gameStatisticsTime.setStatisticsTimeForRound();
    }

    getGameCoordinator() {
        return this.controllerClickerGame;
    }

}