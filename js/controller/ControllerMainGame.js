import {Game} from "../Game.js";

export class ControllerMainGame {

    constructor(moduleConfiguration, controllerButtonsMain, controllerStatisticsMain) {
        this.moduleConfiguration = moduleConfiguration;
        this.controllerButtonsMain = controllerButtonsMain;
        this.controllerStatisticsMain = controllerStatisticsMain;
        this.game = null;
        this.clickColorTimeout = null;
    }

    configureStartGame() {
        this.moduleConfiguration.createConfiguration();
        this.controllerButtonsMain.createGame();

        this.controllerButtonsMain.setOnStart(() =>
            this.startGame());
    }

    startGame() {

        this.setConfigurationGameAtStart();

        const roundNumberSetupByUser =
            this.controllerButtonsMain
                .getRoundNumber();

        this.game = new Game(roundNumberSetupByUser);

        this.controllerButtonsMain.setConfigurationForRoundNumber();

        this.createButtonStop();

        // ustawiamy callback FRAUD
        this.configureClickColorCounterFraud();

        // DODAJEMY LISTENER TYLKO RAZ
        this.controllerButtonsMain
            .configureClickColor();

        // tutaj ustawienie początkowego koloru
        this.controllerButtonsMain
            .setButtonClickColorAtStart();

        // pierwsza runda / druga runda / trzecia runda / .......
        this.startRound();
    }

    setConfigurationGameAtStart() {
        this.controllerStatisticsMain.removeContainerStatisticParts();
        this.controllerButtonsMain.setConfigurationButtonsAtStart();
    }

    createButtonStop() {
        this.controllerButtonsMain.createButtonStop();
        this.configureButtonStop();
    }

    configureButtonStop() {
        this.controllerButtonsMain.setOnStop(() =>
            this.handleClickStop());
    }

    handleClickStop() {
        this.controllerButtonsMain.setConfigurationAfterClickStop();
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

                this.controllerButtonsMain.setButtonClickColorRandomColor(color);

                this.game.setStartTime();

                this.configureClickColorCounterTime();

            }, timeout);
    }

    configureClickColorCounterFraud() {
        this.controllerButtonsMain.setOnClickColor(() =>
            this.countFraudClick());
    }

    countFraudClick() {
        this.game.playClickColorCounterFraud();
    }

    configureClickColorCounterTime() {
        this.controllerButtonsMain.setOnClickColor(() =>
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


        this.controllerStatisticsMain
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

        this.controllerStatisticsMain.setStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex);

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

        this.controllerStatisticsMain.configureStatisticTime(
            statisticTimeInSecondsMin,
            statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax,
            statisticTimeInSecondsBest
        );
    }

    gameOver() {
        this.controllerButtonsMain.configureButtonsAfterGameOver();
    }
}