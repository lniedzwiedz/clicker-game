export class ControllerGameCoordinator {

    constructor(controllerConfigurationCoordinator, controllerButtonGameCoordinator, controllerGameStateCoordinator, controllerStatisticsCoordinator) {
        this.controllerConfigurationCoordinator = controllerConfigurationCoordinator;
        this.controllerButtonGameCoordinator = controllerButtonGameCoordinator;
        this.controllerGameStateCoordinator = controllerGameStateCoordinator;
        this.controllerStatisticsCoordinator = controllerStatisticsCoordinator;
    }

    configureGame() {
        this.controllerConfigurationCoordinator.createConfiguration();
        this.controllerGameStateCoordinator.createGameState();
        this.controllerButtonGameCoordinator.createButtonGame();
    }

    setOnStart(onStart) {
        this.controllerGameStateCoordinator
            .setOnStart(onStart);
    }

    configureGameStart() {

        this.controllerConfigurationCoordinator.configureRoundAtStart();

        this.controllerGameStateCoordinator.configureGameStateButtonsAtStart();

        this.controllerStatisticsCoordinator.configureStatisticsAtStart();

    }

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
        this.configureConfigurationsAtStop();
        this.configureButtonGameAtStop();
        this.configureGameStateAtStop();
    }

    configureConfigurationsAtStop() {
        this.controllerConfigurationCoordinator.configureConfigurationAfterClickStop();
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

    configureStatisticAtStart(gameRoundCount) {
        this.controllerStatisticsCoordinator.createConfigurationStatistics(gameRoundCount);
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
        this.controllerButtonGameCoordinator.configureButtonGameForGameOver();
        this.controllerGameStateCoordinator.configureGameStateForGameOver();
        this.controllerConfigurationCoordinator.configureConfigurationForGameOver();
    }

    removeConfigurationGameOver() {
        this.controllerButtonGameCoordinator.resetConfigurationButtonGameText();
    }
}