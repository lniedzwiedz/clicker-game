export class ControllerGameCoordinator {

    constructor(controllerConfigurationCoordinator, ControllerButtonClickCoordinator, controllerGameStateCoordinator, controllerStatisticsCoordinator) {
        this.controllerConfigurationCoordinator = controllerConfigurationCoordinator;
        this.ControllerButtonClickCoordinator = ControllerButtonClickCoordinator;
        this.controllerGameStateCoordinator = controllerGameStateCoordinator;
        this.controllerStatisticsCoordinator = controllerStatisticsCoordinator;
        this.game = null;
        this.clickColorTimeout = null;
    }

    configureGame() {
        this.controllerConfigurationCoordinator.createConfiguration();
        this.controllerGameStateCoordinator.createGameState();
        this.ControllerButtonClickCoordinator.createGameButtons();

        // this.controllerGameStateCoordinator.setOnStart(() =>
        //     this.startGame());
    }

    setOnStart(onStart) {
        this.controllerGameStateCoordinator
            .setOnStart(onStart);
    }


    setOnClickColor(onClickColor) {
        this.ControllerButtonClickCoordinator
            .setOnClickColor(onClickColor);
    }

    // setConfigurationForRoundNumber(){
    //     this.controllerConfigurationCoordinator.setConfigurationForRoundNumber();
    // }

    getRoundNumber(){
       return this.controllerConfigurationCoordinator
            .getRoundNumber();
    }

    // startGame() {
    //
    //     this.setConfigurationGameAtStart();
    //
    //     // const roundNumberSetupByUser =
    //     //     this.controllerButtonsMain
    //     //         .getRoundNumber();
    //     //
    //     // const roundNumberSetupByUser =
    //     //     this.controllerConfigurationCoordinator
    //     //         .getRoundNumber();
    //
    //     // this.game = new Game(roundNumberSetupByUser);
    //
    //     // this.controllerButtonsMain.setConfigurationForRoundNumber();
    //
    //     // this.setConfigurationGameAtStart();
    //
    //     // //this.controllerConfigurationCoordinator.setConfigurationForRoundNumber();
    //
    //     // this.createButtonStop();
    //
    //     // ustawiamy callback FRAUD
    //     // this.configureClickColorCounterFraud();
    //
    //     // DODAJEMY LISTENER TYLKO RAZ
    //     this.controllerButtonsCoordinator
    //         .configureClickColor();
    //
    //     // tutaj ustawienie początkowego koloru
    //     this.controllerButtonsCoordinator
    //         .setButtonClickColorAtStart();
    //
    //     // pierwsza runda / druga runda / trzecia runda / .......
    //     // this.startRound();
    // }

    setButtonClickColorRandomColor(color){
        this.ControllerButtonClickCoordinator.setButtonClickColorRandomColor(color);
    }


    configureGameStart() {
``
        this.controllerConfigurationCoordinator.setConfigurationForRoundNumber();

        this.controllerGameStateCoordinator.setConfigurationGameStateButtonsAfterClickButtonStart();
        // this.createButtonStop();
        this.controllerStatisticsCoordinator.removeStatistics();
        // this.controllerButtonsMain.setConfigurationButtonsAtStart();


    }

    createButtonStop() {
        // this.controllerButtonsMain.createButtonStop();
        this.controllerGameStateCoordinator.createButtonStop();
        // this.configureButtonStop();
    }

    setOnStop(onStop) {
        this.controllerGameStateCoordinator
            .setOnStop(onStop);
    }

    // configureButtonStop() {
    //     // this.controllerButtonsMain.setOnStop(() =>
    //     this.controllerGameStateCoordinator.setOnStop(() =>
    //         this.handleClickStop());
    // }

    // handleClickStop() {
    //     // this.controllerButtonsMain.setConfigurationAfterClickStop();
    //     this.controllerConfigurationCoordinator.setConfigurationRoundButtonsAfterClickButtonStop();
    //     this.controllerGameStateCoordinator.setConfigurationGameStateButtonsAfterClickButtonStop();
    //     // this.clearClickColorTimeout();
    // }

    // clearClickColorTimeout() {
    //
    //     if (this.clickColorTimeout) {
    //         clearTimeout(this.clickColorTimeout);
    //         this.clickColorTimeout = null;
    //     }
    // }


    setConfigurationAfterClickButtonStop(){
        this.controllerConfigurationCoordinator.setConfigurationRoundButtonsAfterClickButtonStop();
        this.controllerGameStateCoordinator.setConfigurationGameStateButtonsAfterClickButtonStop();

    }

    setButtonClickColor(){
        this.ControllerButtonClickCoordinator.setButtonClickColor();
    }

    // startRound() {
    //
    //     if (!this.game.isGameRunning()) {
    //         this.gameOver();
    //         return;
    //     }
    //
    //     this.game.setCountedRoundNumber();
    //
    //     this.configureClickColorCounterFraud();
    //
    //     this.game.playClickColorCounterTime();
    //
    //     this.runClickColorTimeout();
    // }

    // runClickColorTimeout() {
    //
    //     const timeout =
    //         this.game.getRandomTimeBeforeChangeColor();
    //
    //     this.clickColorTimeout =
    //         setTimeout(() => {
    //
    //             const color = this.game.getRandomColor();
    //
    //             this.controllerButtonsCoordinator.setButtonClickColorRandomColor(color);
    //
    //             this.game.setStartTime();
    //
    //             this.configureClickColorCounterTime();
    //
    //         }, timeout);
    // }

    // configureClickColorCounterFraud() {
    //     this.controllerButtonsCoordinator.setOnClickColor(() =>
    //         this.countFraudClick());
    // }

    // countFraudClick() {
    //     this.game.playClickColorCounterFraud();
    // }

    // configureClickColorCounterTime() {
    //     this.controllerButtonsCoordinator.setOnClickColor(() =>
    //         this.processClickColor());
    // }



    configureStatisticAtStart(roundNumber) {
        this.controllerStatisticsCoordinator.createConfigurationStatistics(roundNumber);
    }

    configureClickColor(){
        this.ControllerButtonClickCoordinator.configureClickColor();
    }

    updateStatisticFraud(
        fraudCountedRoundNumber,
        fraudCountedSumNumber,
        fraudRoundIndex) {

        // this.game.setFraudCountedSum();
        //
        // let fraudCountedRoundNumber = this.game
        //     .getFraudCountedClicks();
        //
        // let fraudCountedSumNumber = this.game
        //     .getFraudCountedSum();
        //
        // let fraudRoundIndex = this.game
        //     .getFraudRoundElementIndexToUpdate();

        this.controllerStatisticsCoordinator.setStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex);

        // this.game.resetFraudCountedClicks();
        // this.game.setFraudRoundElementIndexToUpdate();
    }

    updateStatisticTime(   statisticTimeInSecondsMin,
                           statisticTimeInSecondsAvg,
                           statisticTimeInSecondsMax,
                           statisticTimeInSecondsBest) {

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

        this.controllerStatisticsCoordinator.configureStatisticTime(
            statisticTimeInSecondsMin,
            statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax,
            statisticTimeInSecondsBest
        );
    }

    gameOver() {
        this.ControllerButtonClickCoordinator.configureButtonsAfterGameOver();
    }
}