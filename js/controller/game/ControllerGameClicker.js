import {GameMain} from "../../game/GameMain.js";

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

        this.game =
            new GameMain(roundNumber);

        this.controllerGameCoordinator
            .configureButtonGameListener();

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

        this.game
            .playClickColorCounterTime();

        this.runTimeoutBeforeClick();
    }

    runTimeoutBeforeClick() {

        const timeout =
            this.game.getRandomTimeBeforeChangeColor();

        this.clickColorTimeout =
            setTimeout(() => {

                const randomColor =
                    this.game.getRandomColor();

                this.controllerGameCoordinator.setButtonGameColor(randomColor);

                this.game.setStartTime();

                this.configureCounterReactionTime();

            }, timeout);
    }

    configureCounterFraud() {
        this.controllerGameCoordinator.setOnGame(() =>
            this.countFraud());
    }

    countFraud() {
        this.game.setFraudCountedClicks();
    }

    configureCounterReactionTime() {
        this.controllerGameCoordinator.setOnGame(() =>
            this.processClickColor());
    }

    processClickColor() {

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

        this.game.setConfigurationTime();

        let statisticTimeInSecondsMin =
            this.game.getStatisticTimeInSecondsMin();

        let statisticTimeInSecondsAvg =
            this.game.getStatisticTimeInSecondsAvg();

        let statisticTimeInSecondsMax =
            this.game.getStatisticTimeInSecondsMax();

        let statisticTimeInSecondsBest =
            this.game.getStatisticTimeInSecondsBest();

        this.game.setFraudCountedSum();

        let fraudCountedRoundNumber =
            this.game.getFraudCountedClicks();

        let fraudCountedSumNumber =
            this.game.getFraudCountedSum();

        let historyRoundNumber =
            this.game.getFraudRoundElementIndexToUpdate();

        // this.controllerGameCoordinator.updateStatistic(
        //     statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        //     statisticTimeInSecondsMax, statisticTimeInSecondsBest,
        //     fraudCountedRoundNumber, fraudCountedSumNumber, historyRoundNumber);

        // temp var
        let currentBestTime = this.game.getStatisticTimeInMillisecondsBest();
        console.log("update stat currentBestTime = " + currentBestTime);
        console.log("update stat tempBestTimeBeforeRefresh = " + this.tempBestTimeBeforeRefresh);

        if(this.tempBestTimeBeforeRefresh > currentBestTime){
            this.tempBestTimeBeforeRefresh = currentBestTime;
        }

        this.controllerGameCoordinator.updateStatistic(
            statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax, this.tempBestTimeBeforeRefresh,
            fraudCountedRoundNumber, fraudCountedSumNumber, historyRoundNumber);

        this.game.resetFraudCountedClicks();
        this.game.setFraudRoundElementIndexToUpdate();
    }

    gameOver() {
        this.controllerGameCoordinator.configureGameOver();
    }
}