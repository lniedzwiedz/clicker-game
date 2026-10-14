import {GameMain} from "../../game/GameMain.js";
import {Game} from "../../game/Game.js";

export class ControllerGameClicker {

    constructor(controllerGameCoordinator) {
        this.controllerGameCoordinator = controllerGameCoordinator
    }

    tempBestTimeBeforeRefresh = 130000000000000000000000000;

    createGameClicker() {

        this.controllerGameCoordinator
            .configureGame();

        this.controllerGameCoordinator.setOnStart(() =>
            this.startGame());
    }

    startGame() {

        this.controllerGameCoordinator
            .removeStatistics();

        this.clearTimeoutAfterChangeColor();

        this.configureButtonStopAtStart();

        this.controllerGameCoordinator
            .configureGameAtStart();


        const roundNumber =
            this.controllerGameCoordinator
                .getRoundNumber();

        // this.game =
        //     new GameMain(roundNumber);

        this.game = new Game("GameModeColor", roundNumber);

        this.controllerGameCoordinator
            .configureButtonGameListener();

        // ???
        this.configureCounterFraud();

        // round 1
        this.startRound();
    }

    configureButtonStopAtStart() {

        this.createButtonStop();
        this.configureButtonStop();
    }

    createButtonStop() {

        this.controllerGameCoordinator
            .createButtonStop();
    }

    configureButtonStop() {

        this.controllerGameCoordinator.setOnStop(() =>
            this.handleClickStop());
    }

    handleClickStop() {

        this.configureButtonStopAtStop();
        this.clearTimeoutAfterChangeColor();
    }

    configureButtonStopAtStop() {

        this.controllerGameCoordinator
            .configureGameStop();
    }

    // method temp name, after -> abc change name
    clearTimeoutAfterChangeColor() {

        if (this.clickColorTimeout) {

            clearTimeout(this.clickColorTimeout);
            this.clickColorTimeout = null;
        }
    }

    startRound() {

        if (!this.game.isGameRunning()) {
            this.gameOver();
            return;
        }

        this.game
            .setCurrentRoundNumber();

        this.configureCounterFraud();

        // this.game
        //     .playClickColorCounterTime();

        this.game
            .setGameRoundCountTime();

        this.runTimeoutBeforeClick();
    }

    runTimeoutBeforeClick() {

        // const timeout =
        //     this.game.getRandomTimeBeforeChangeColor();

        const timeout =
            this.game.getRandomTimeout();

        this.clickColorTimeout =
            setTimeout(() => {

                // const randomColor =
                //     this.game.getRandomColor();

                const randomColor =
                    this.game.getGameRoundDataToDisplay();

                this.controllerGameCoordinator.setButtonGameColor(randomColor);

                this.game.getGameRoundReactionTimeStart();

                this.configureCounterReactionTime();

            }, timeout);
    }

    configureCounterFraud() {
        this.controllerGameCoordinator.setOnGame(() =>
            this.countFraud());
    }

    countFraud() {
        // this.game.setFraudCountedClicks();
        this.game.setGameRoundCountFraud();
    }

    configureCounterReactionTime() {
        this.controllerGameCoordinator.setOnGame(() =>
            this.processReactionTimeClick());
    }

    processReactionTimeClick() {

        if (this.game.getCurrentRoundNumber() === 1) {

            this.controllerGameCoordinator
                .configureStatistic(
                    this.game.getGameRoundCount()
                );
        }

        this.setStatistics();

        // next round 2, 3, 4 ...
        this.startRound();

    }

    setStatistics() {

        // this.game.setConfigurationTime();
        //
        // let statisticTimeInSecondsMin =
        //     this.game.getStatisticTimeInSecondsMin();
        //
        // let statisticTimeInSecondsAvg =
        //     this.game.getStatisticTimeInSecondsAvg();
        //
        // let statisticTimeInSecondsMax =
        //     this.game.getStatisticTimeInSecondsMax();
        //
        // let statisticTimeInSecondsBest =
        //     this.game.getStatisticTimeInSecondsBest();

        // this.game.setFraudCountedSum();
        //
        // let fraudCountedRoundNumber =
        //     this.game.getFraudCountedClicks();
        //
        // let fraudCountedSumNumber =
        //     this.game.getFraudCountedSum();
        //
        // let historyRoundNumber =
        //     this.game.getFraudRoundElementIndexToUpdate();


        // this.game.setConfigurationTime();

        let statisticTimeInSecondsMin =
            // this.game.getStatisticTimeInSecondsMin();
            0;

        let statisticTimeInSecondsAvg =
            // this.game.getStatisticTimeInSecondsAvg();
            0;

        let statisticTimeInSecondsMax =
            // this.game.getStatisticTimeInSecondsMax();
            0;

        let statisticTimeInSecondsBest =
            // this.game.getStatisticTimeInSecondsBest();
            0;

        let statisticsTimeMap;


        // let fraudStatisticsMap =
        //     this.game.getStatisticsFraudData();

        let statisticsMap = this.game.getStatistics();

        // let fraudCountedRoundNumber =
        //     fraudStatisticsMap.get("fraudSummarySumPerCurrentRoundKey");
        //
        // let historyRoundNumber =
        //     fraudStatisticsMap.get("fraudSummaryCurrentRoundNumberKey");
        //
        // let fraudCountedSumNumber =
        //     fraudStatisticsMap.get("fraudSummaryTotalKey");



        // this.controllerGameCoordinator.updateStatistic(
        //     statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        //     statisticTimeInSecondsMax, statisticTimeInSecondsBest,
        //     fraudCountedRoundNumber, fraudCountedSumNumber, historyRoundNumber);

        // temp var
        // let currentBestTime = this.game.getStatisticTimeInMillisecondsBest();
        //
        //
        // if(this.tempBestTimeBeforeRefresh > currentBestTime){
        //     this.tempBestTimeBeforeRefresh = currentBestTime;
        // }

        // console.log("currentBestTime = " + currentBestTime);
        // console.log("tempBestTimeBeforeRefresh = " + this.tempBestTimeBeforeRefresh);

        // this.controllerGameCoordinator.updateStatistic(
        //     statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        //     statisticTimeInSecondsMax, this.tempBestTimeBeforeRefresh,
        //     fraudCountedRoundNumber, fraudCountedSumNumber, historyRoundNumber);

        // this.game.resetFraudCountedClicks();
        // this.game.setFraudRoundElementIndexToUpdate();

        this.controllerGameCoordinator.updateStatistic(
            // statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
            // statisticTimeInSecondsMax, this.tempBestTimeBeforeRefresh,
            // fraudStatisticsMap);
            statisticsMap);

    }

    gameOver() {
        this.clearTimeoutAfterChangeColor();
        this.controllerGameCoordinator.configureGameOver();
    }
}