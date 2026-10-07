export class ControllerStatisticsTimeCoordinator {

    constructor(controllerStatisticsTimePrimary, controllerStatisticsTimeSummary, controllerStatisticsTimeHistory) {
        this.controllerStatisticsTimePrimary = controllerStatisticsTimePrimary;
        this.controllerStatisticsTimeSummary = controllerStatisticsTimeSummary;
        this.controllerStatisticsTimeHistory = controllerStatisticsTimeHistory
    }

    configureStatisticsTime() {
        this.createStatisticsTime();
    }

    removeStatisticsTime() {
        this.controllerStatisticsTimePrimary.removeStatisticsTimePrimary();
    }

    createStatisticsTime() {
        this.createStatisticsTimePrimary();
        this.createStatisticsTimeSummary();
        this.createStatisticsTimeHistory();
    }

    createStatisticsTimePrimary() {
        this.controllerStatisticsTimePrimary.createStatisticsTimePrimary()
    }

    createStatisticsTimeSummary() {
        this.controllerStatisticsTimeSummary.createStatisticsTimeSummary();
    }

    createStatisticsTimeHistory() {
        this.controllerStatisticsTimeHistory.createStatisticsTimeHistory();
    }

    updateStatisticTime(statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
                        statisticTimeInSecondsMax, statisticTimeInSecondsBest) {

        this.updateStatisticsTimeSummary(statisticTimeInSecondsBest);
        this.updateStatisticTimeHistory(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax);

    }

    updateStatisticsTimeSummary(statisticTimeInSecondsBest) {
        this.controllerStatisticsTimeSummary.setStatisticsTimeSummaryBestValue(statisticTimeInSecondsBest);
    }

    updateStatisticTimeHistory(
        statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax) {

        this.controllerStatisticsTimeHistory.setStatisticsTimeHistoryRoundNumberValue(
            statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax);
    }
}