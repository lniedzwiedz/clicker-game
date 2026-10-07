export class ControllerStatisticsCoordinator {

    constructor(controllerStatisticsTimeCoordinator, controllerStatisticsFraudCoordinator) {
        this.controllerStatisticsTimeCoordinator = controllerStatisticsTimeCoordinator;
        this.controllerStatisticsFraudCoordinator = controllerStatisticsFraudCoordinator;
        this.onStart = null;
    }

    configureStatistic(gameRoundCount) {
        this.configureStatisticsFraud(gameRoundCount);
        this.configureStatisticTime();
    }

    configureStatisticTime() {
        this.controllerStatisticsTimeCoordinator.configureStatisticsTime();
    }

    configureStatisticsFraud(gameRoundCount) {
        this.controllerStatisticsFraudCoordinator.configureStatisticsFraud(gameRoundCount);
    }

    removeStatistics() {
        this.removeStatisticsFraud();
        this.removeStatisticsTime();
    }

    removeStatisticsFraud() {
        this.controllerStatisticsFraudCoordinator.removeStatisticsFraud();
    }

    removeStatisticsTime() {
        this.controllerStatisticsTimeCoordinator.removeStatisticsTime();
    }

    updateStatistic(
        statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        statisticTimeInSecondsMax, statisticTimeInSecondsBest,
        fraudCountedRoundNumber, fraudTotalValue, historyRoundNumber) {

        this.updateStatisticFraud(
            fraudCountedRoundNumber, fraudTotalValue, historyRoundNumber
        );

        this.updateStatisticTime(
            statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax, statisticTimeInSecondsBest
        );
    }

    updateStatisticFraud(
        fraudCountedRoundNumber, fraudTotalValue, historyRoundNumber) {

        this.controllerStatisticsFraudCoordinator.updateStatisticFraud(
            fraudCountedRoundNumber, fraudTotalValue, historyRoundNumber
        );
    }

    updateStatisticTime(
        statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        statisticTimeInSecondsMax, statisticTimeInSecondsBest) {

        this.controllerStatisticsTimeCoordinator.updateStatisticTime(
            statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax, statisticTimeInSecondsBest);
    }
}