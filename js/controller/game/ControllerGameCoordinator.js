export class ControllerGameCoordinator {

    constructor(controllerConfigurationCoordinator, controllerButtonGameCoordinator, controllerGameStateCoordinator, controllerStatisticsCoordinator) {
        this.controllerConfigurationCoordinator = controllerConfigurationCoordinator;
        this.controllerButtonGameCoordinator = controllerButtonGameCoordinator;
        this.controllerGameStateCoordinator = controllerGameStateCoordinator;
        this.controllerStatisticsCoordinator = controllerStatisticsCoordinator;
    }

    configureGame() {
        this.createConfiguration();
        this.createButtonGame();
        this.createGameState();
    }

    createConfiguration() {
        this.controllerConfigurationCoordinator.createConfiguration();
    }

    createButtonGame() {
        this.controllerButtonGameCoordinator.createButtonGame();
    }

    createGameState() {
        this.controllerGameStateCoordinator.createGameState();
    }

    setOnStart(onStart) {
        this.controllerGameStateCoordinator
            .setOnStart(onStart);
    }

    configureGameAtStart() {
        this.configureConfigurationAtStart();
        this.configureGameStateButtonsAtStart();
        this.configureButtonGameAtStart();
    }

    configureConfigurationAtStart() {
        this.controllerConfigurationCoordinator.configureConfigurationAtStart();
    }

    configureGameStateButtonsAtStart() {
        this.controllerGameStateCoordinator.configureGameStateButtonsAtStart();
    }

    configureButtonGameAtStart() {
        this.controllerButtonGameCoordinator.configureButtonGameAtStart();
    }

    // configureStatisticsAtStart() {
    //     this.controllerStatisticsCoordinator.configureStatisticsAtStart();
    // }

    getRoundNumber() {
        return this.controllerConfigurationCoordinator
            .getRoundNumber();
    }

    createButtonStop() {
        this.controllerGameStateCoordinator.createButtonStop();
    }

    setOnStop(onStop) {
        this.controllerGameStateCoordinator
            .setOnStop(onStop);
    }

    configureGameStop() {
        this.configureConfigurationAtStop();
        this.configureButtonGameAtStop();
        this.configureGameStateAtStop();
    }

    configureConfigurationAtStop() {
        this.configureConfigurationAtGameEnd();
    }

    configureButtonGameAtStop() {
        this.controllerButtonGameCoordinator.configureButtonGameAtStop();
    }

    configureGameStateAtStop() {
        this.controllerGameStateCoordinator.configureGameStateAtStop();
    }

    setOnGame(onGame) {
        this.controllerButtonGameCoordinator
            .setOnGame(onGame);
    }

    configureButtonGameListener() {
        this.controllerButtonGameCoordinator.addButtonGameListener();
    }

    setButtonGameColor(roundColor) {
        this.controllerButtonGameCoordinator.setButtonGameColor(roundColor);
    }

    configureStatistic(gameRoundCount){
        this.controllerStatisticsCoordinator.configureStatistic(gameRoundCount);
    }

    updateStatistic(
        statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        statisticTimeInSecondsMax, statisticTimeInSecondsBest,
        fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex) {

        this.controllerStatisticsCoordinator.updateStatistic(
            statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax, statisticTimeInSecondsBest,
            fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex
        );
    }

    removeStatistics(){
        this.controllerStatisticsCoordinator.removeStatistics();
    }

    configureGameOver() {
        this.configureConfigurationAtGameEnd();
        this.controllerButtonGameCoordinator.configureButtonGameAtGameEnd();
        this.controllerGameStateCoordinator.configureGameStateAtGameOver();
    }

    configureConfigurationAtGameEnd() {
        this.controllerConfigurationCoordinator.configureConfigurationAtGameEnd();
    }
}