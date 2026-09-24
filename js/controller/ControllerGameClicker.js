import {Game} from "../Game.js";

export class ControllerGameClicker {

    constructor(controllerGameCoordinator) {
        this.controllerGameCoordinator = controllerGameCoordinator
    }

    startGameClicker() {

        this.controllerGameCoordinator
            .configureGame();

        this.controllerGameCoordinator.setOnStart(() =>
            this.startGame());
    }

    startGame() {

        this.clearTimeoutAfterChangeColor();

        this.removeConfigurationGameOver();

        this.configureButtonStopAfterClickStart();

        this.controllerGameCoordinator
            .configureGameStart();


        const roundNumber =
            this.controllerGameCoordinator
                .getRoundNumber();

        this.game =
            new Game(roundNumber);


        // DODAJEMY LISTENER TYLKO RAZ
        this.controllerGameCoordinator
            .configureButtonGameListener();

        // ustawiamy callback FRAUD
        this.configureCounterFraud();


        // round 1
        this.startRound();
    }

    configureButtonStopAfterClickStart() {

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

        // this.controllerGameCoordinator
        //     .configureGameStateButtonsAtStop();

        this.configureButtonStopAtStop();

        this.clearTimeoutAfterChangeColor();
    }

    configureButtonStopAtStop() {

        // this.controllerGameCoordinator
        //     .configureGameStateButtonsAtStop();

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
                .configureStatisticAtStart(
                    this.game.getGameRoundCount()
                );
        }


        // this.setStatisticsTime();
        this.setStatisticFraud();

        // next round 2, 3, 4 ...
        this.startRound();


    }

    setStatisticFraud() {

        this.game.setFraudCountedSum();

        let fraudCountedRoundNumber =
            this.game.getFraudCountedClicks();

        let fraudCountedSumNumber =
            this.game.getFraudCountedSum();

        let fraudRoundIndex =
            this.game.getFraudRoundElementIndexToUpdate();

        this.controllerGameCoordinator.updateStatisticFraud(
            fraudCountedRoundNumber,
            fraudCountedSumNumber,
            fraudRoundIndex);

        this.game.resetFraudCountedClicks();
        this.game.setFraudRoundElementIndexToUpdate();
    }

    setStatisticsTime() {

        this.game.setConfigurationTime();

        let statisticTimeInSecondsMin =
            this.game.getStatisticTimeInSecondsMin();

        let statisticTimeInSecondsAvg =
            this.game.getStatisticTimeInSecondsAvg();

        let statisticTimeInSecondsMax =
            this.game.getStatisticTimeInSecondsMax();

        let statisticTimeInSecondsBest =
            this.game.getStatisticTimeInSecondsBest();

        this.controllerGameCoordinator.updateStatisticFraud(
            statisticTimeInSecondsMin,
            statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax,
            statisticTimeInSecondsBest
        );
    }

    gameOver() {
        this.controllerGameCoordinator.gameOver();
    }

    removeConfigurationGameOver() {
        this.controllerGameCoordinator.removeConfigurationGameOver();
    }
}