export class ControllerGameCoordinator {

    constructor(controllerConfigurationCoordinator, ControllerButtonClickCoordinator, controllerGameStateCoordinator, controllerStatisticsCoordinator) {
        this.controllerConfigurationCoordinator = controllerConfigurationCoordinator;
        this.ControllerButtonClickCoordinator = ControllerButtonClickCoordinator;
        this.controllerGameStateCoordinator = controllerGameStateCoordinator;
        this.controllerStatisticsCoordinator = controllerStatisticsCoordinator;
    }

    configureGame() {
        this.controllerConfigurationCoordinator.createConfiguration();
        this.controllerGameStateCoordinator.createGameState();
        this.ControllerButtonClickCoordinator.createGameButtons();
    }

    setOnStart(onStart) {
        this.controllerGameStateCoordinator
            .setOnStart(onStart);
    }

    configureGameStart() {

        console.log("1");

        this.controllerConfigurationCoordinator.configureRoundAtStart();

        this.controllerGameStateCoordinator.configureGameStateButtonsAtStart();

        this.controllerStatisticsCoordinator.configureStatisticsAtStart();

    }

    getRoundNumber(){
       return this.controllerConfigurationCoordinator
            .getRoundNumber();
    }

    setButtonClickColorRandomColor(color){
        this.ControllerButtonClickCoordinator.setButtonClickColorRandomColor(color);
    }

    createButtonStop() {
        this.controllerGameStateCoordinator.createButtonStop();
    }

    setOnStop(onStop) {
        this.controllerGameStateCoordinator
            .setOnStop(onStop);
    }

    configureGameStateButtonsAtStop(){
        this.controllerConfigurationCoordinator.configureRoundButtonsAfterClickStop();
        this.controllerGameStateCoordinator.configureGameStateButtonsAfterClickStop();
    }

    setOnClickColor(onClickColor) {
        this.ControllerButtonClickCoordinator
            .setOnClickColor(onClickColor);
    }

    configureClickColor(){
        this.ControllerButtonClickCoordinator.configureClickColor();
    }

    setButtonClickColor(){
        this.ControllerButtonClickCoordinator.setButtonClickColor();
    }




    configureStatisticAtStart(roundNumber) {
        this.controllerStatisticsCoordinator.createConfigurationStatistics(roundNumber);
    }

    updateStatisticFraud(
        fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex) {

        this.controllerStatisticsCoordinator.setStatisticFraudData(
            fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex
        );
    }

    updateStatisticTime(
        statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        statisticTimeInSecondsMax, statisticTimeInSecondsBest) {

        this.controllerStatisticsCoordinator.configureStatisticTime(
            statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax, statisticTimeInSecondsBest
        );
    }

    gameOver() {
        this.ControllerButtonClickCoordinator.configureButtonsAfterGameOver();
    }

}