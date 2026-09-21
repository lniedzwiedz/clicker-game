import {Game} from "../Game.js";

export class ControllerClickerGame {

    constructor(controllerGameCoordinator) {
        this.controllerGameCoordinator = controllerGameCoordinator
    }

    startClickerGame(){

        this.controllerGameCoordinator.configureGame();

        this.controllerGameCoordinator.setOnStart(() =>
            this.startGame());
    }
    // configureStartGame() {
    //     this.controllerConfigurationCoordinator.createConfiguration();
    //     this.controllerGameStateCoordinator.createGameState();
    //     this.controllerButtonsCoordinator.createGameButtons();
    //
    //     // this.controllerButtonsMain.setOnStart(() =>
    //     //     this.startGame());
    //
    //     this.controllerGameStateCoordinator.setOnStart(() =>
    //         this.startGame());
    // }

    startGame() {

        this.controllerGameCoordinator.configureGameStart();

        this.createButtonStop();
        // const roundNumberSetupByUser =
        //     this.controllerButtonsMain
        //         .getRoundNumber();

        // this.controllerGameCoordinator.setConfigurationForRoundNumber();

        const roundNumber =
            this.controllerGameCoordinator
                .getRoundNumber();

        this.game =
            new Game(roundNumber);

        // this.controllerButtonsMain.setConfigurationForRoundNumber();

        // this.setConfigurationGameAtStart();

        // //this.controllerConfigurationCoordinator.setConfigurationForRoundNumber();

        // this.createButtonStop();

        // ustawiamy callback FRAUD
        this.configureClickCounterFraud();

        // DODAJEMY LISTENER TYLKO RAZ
        // this.controllerButtonsCoordinator
        //     .configureClickColor();

        this.controllerGameCoordinator
            .configureClickColor();


        // tutaj ustawienie początkowego koloru
        // this.controllerButtonsCoordinator
        //     .setButtonClickColorAtStart();

        this.controllerGameCoordinator
            .setButtonClickColor();


        // pierwsza runda / druga runda / trzecia runda / .......
        this.startRound();
    }

    // setConfigurationGameAtStart() {
    //
    //     this.controllerGameStateCoordinator.setConfigurationGameStateAtStart();
    //     this.createButtonStop();
    //     this.controllerStatisticsCoordinator.removeStatistics();
    //     // this.controllerButtonsMain.setConfigurationButtonsAtStart();
    // }

    createButtonStop() {
        // this.controllerButtonsMain.createButtonStop();
        this.controllerGameCoordinator.createButtonStop();
        this.configureButtonStop();
    }

    configureButtonStop() {
        this.controllerGameCoordinator.setOnStop(() =>
            this.handleClickStop());
    }

    handleClickStop() {
        // // this.controllerButtonsMain.setConfigurationAfterClickStop();
        // this.controllerConfigurationCoordinator.setConfigurationRoundButtonsAfterClickButtonStop();
        // this.controllerGameStateCoordinator.setConfigurationGameStateButtonsAfterClickButtonStop();
        // this.clearClickColorTimeout();


        this.controllerGameCoordinator.setConfigurationAfterClickButtonStop();
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
            this.controllerGameCoordinator.gameOver();
            return;
        }

        this.game.setNextRoundNumber();

        this.configureClickCounterFraud();

        this.game.playClickColorCounterTime();

        this.runTimeoutBeforeClick();
    }

    runTimeoutBeforeClick() {

        const timeout =
            this.game.getRandomTimeBeforeChangeColor();

        this.clickColorTimeout =
            setTimeout(() => {

                const color = this.game.getRandomColor();

                this.controllerGameCoordinator.setButtonClickColorRandomColor(color);

                this.game.setStartTime();

                this.configureClickColorCounterTime();

            }, timeout);
    }

    configureClickCounterFraud() {
        this.controllerGameCoordinator.setOnClickColor(() =>
            this.countFraudClick());
    }

    countFraudClick() {
        this.game.playClickColorCounterFraud();
    }

    configureClickColorCounterTime() {
        this.controllerGameCoordinator.setOnClickColor(() =>
            this.processClick());
    }

    processClick() {

        // if (this.game.getCountedRoundNumber() === 1)
        //     this.configureStatistic();

        // this.updateStatisticTime();
        // this.updateStatisticFraud();


        const roundNumber = this.game.getRoundNumber();

        if (roundNumber === 1)
            this.controllerGameCoordinator.configureStatisticAtStart(roundNumber);

        this.setStatisticsTimeData();
        this.setStatisticFraudData();

        this.startRound();
    }

    // configureStatistic() {
    //
    //     // const maxClicksNumber = this.controllerButtonsMain
    //     //     .getRoundNumber();
    //
    //     const roundNumber = this.game.getRoundNumber();
    //
    //
    //     this.controllerGameCoordinator
    //         .createConfigurationStatisticsMain(roundNumber);
    // }

    setStatisticFraudData() {

        this.game.setFraudCountedSum();

        let fraudCountedRoundNumber = this.game
            .getFraudCountedClicks();

        let fraudCountedSumNumber = this.game
            .getFraudCountedSum();

        let fraudRoundIndex = this.game
            .getFraudRoundElementIndexToUpdate();

        this.controllerGameCoordinator.updateStatisticFraud(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex);

        this.game.resetFraudCountedClicks();
        this.game.setFraudRoundElementIndexToUpdate();
    }

    setStatisticsTimeData() {

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

    // gameOver() {
    //     this.controllerButtonsCoordinator.configureButtonsAfterGameOver();
    // }

}