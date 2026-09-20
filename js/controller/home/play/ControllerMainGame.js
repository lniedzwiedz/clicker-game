import {Game} from "../../../Game.js";

export class ControllerMainGame {

    constructor(controllerConfigurationCoordinator, controllerButtonsCoordinator, controllerGameStateCoordinator, controllerStatisticsCoordinator) {
        this.controllerConfigurationCoordinator = controllerConfigurationCoordinator;
        this.controllerButtonsCoordinator = controllerButtonsCoordinator;
        this.controllerGameStateCoordinator = controllerGameStateCoordinator;
        this.controllerStatisticsCoordinator = controllerStatisticsCoordinator;
        this.game = null;
        this.clickColorTimeout = null;
    }

    configureStartGame() {
        this.controllerConfigurationCoordinator.createConfiguration();
        this.controllerGameStateCoordinator.createGameState();
        this.controllerButtonsCoordinator.createGameButtons();

        // this.controllerButtonsMain.setOnStart(() =>
        //     this.startGame());

        this.controllerGameStateCoordinator.setOnStart(() =>
            this.startGame());
    }

    startGame() {

        this.setConfigurationGameAtStart();

        // const roundNumberSetupByUser =
        //     this.controllerButtonsMain
        //         .getRoundNumber();

        const roundNumberSetupByUser =
            this.controllerConfigurationCoordinator
                .getRoundNumber();

        this.game = new Game(roundNumberSetupByUser);

        // this.controllerButtonsMain.setConfigurationForRoundNumber();
        this.controllerConfigurationCoordinator.setConfigurationForRoundNumber();

        this.createButtonStop();

        // ustawiamy callback FRAUD
        this.configureClickColorCounterFraud();

        // DODAJEMY LISTENER TYLKO RAZ
        this.controllerButtonsCoordinator
            .configureClickColor();

        // tutaj ustawienie początkowego koloru
        this.controllerButtonsCoordinator
            .setButtonClickColorAtStart();

        // pierwsza runda / druga runda / trzecia runda / .......
        this.startRound();
    }

    setConfigurationGameAtStart() {
        this.controllerStatisticsCoordinator.removeContainerStatisticParts();
        // this.controllerButtonsMain.setConfigurationButtonsAtStart();
        this.controllerGameStateCoordinator.setConfigurationButtonsAtStart();
    }

    createButtonStop() {
        // this.controllerButtonsMain.createButtonStop();
        this.controllerGameStateCoordinator.createButtonStop();
        this.configureButtonStop();
    }

    configureButtonStop() {
        // this.controllerButtonsMain.setOnStop(() =>
        this.controllerGameStateCoordinator.setOnStop(() =>
            this.handleClickStop());
    }

    handleClickStop() {
        // this.controllerButtonsMain.setConfigurationAfterClickStop();
        this.controllerGameStateCoordinator.setConfigurationAfterClickStop();
        this.clearClickColorTimeout();
    }

    clearClickColorTimeout() {
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

        this.game.setCountedRoundNumber();

        this.configureClickColorCounterFraud();

        this.game.playClickColorCounterTime();

        this.runClickColorTimeout();
    }

    runClickColorTimeout() {

        const timeout =
            this.game.getRandomTimeBeforeChangeColor();

        this.clickColorTimeout =
            setTimeout(() => {

                const color = this.game.getRandomColor();

                this.controllerButtonsCoordinator.setButtonClickColorRandomColor(color);

                this.game.setStartTime();

                this.configureClickColorCounterTime();

            }, timeout);
    }

    configureClickColorCounterFraud() {
        this.controllerButtonsCoordinator.setOnClickColor(() =>
            this.countFraudClick());
    }

    countFraudClick() {
        this.game.playClickColorCounterFraud();
    }

    configureClickColorCounterTime() {
        this.controllerButtonsCoordinator.setOnClickColor(() =>
            this.processClickColor());
    }

    processClickColor() {

        if (this.game.getCountedRoundNumber() === 1)
            this.configureStatistic();

        this.updateStatisticTime();
        this.updateStatisticFraud();
        this.startRound();
    }

    configureStatistic() {

        // const maxClicksNumber = this.controllerButtonsMain
        //     .getRoundNumber();

        const maxClicksNumber = this.game.getRoundNumber();


        this.controllerStatisticsCoordinator
            .createConfigurationStatisticsMain(maxClicksNumber);
    }

    updateStatisticFraud() {

        this.game.setFraudCountedSum();

        let fraudCountedRoundNumber = this.game
            .getFraudCountedClicks();

        let fraudCountedSumNumber = this.game
            .getFraudCountedSum();

        let fraudRoundIndex = this.game
            .getFraudRoundElementIndexToUpdate();

        this.controllerStatisticsCoordinator.setStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex);

        this.game.resetFraudCountedClicks();
        this.game.setFraudRoundElementIndexToUpdate();
    }

    updateStatisticTime() {

        this.game.setConfigurationTime();

        let statisticTimeInSecondsMin =
            this.game.getStatisticTimeInSecondsMin();

        let statisticTimeInSecondsAvg =
            this.game.getStatisticTimeInSecondsAvg();

        let statisticTimeInSecondsMax =
            this.game.getStatisticTimeInSecondsMax();

        let statisticTimeInSecondsBest =
            this.game.getStatisticTimeInSecondsBest();

        this.controllerStatisticsCoordinator.configureStatisticTime(
            statisticTimeInSecondsMin,
            statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax,
            statisticTimeInSecondsBest
        );
    }

    gameOver() {
        this.controllerButtonsCoordinator.configureButtonsAfterGameOver();
    }
}