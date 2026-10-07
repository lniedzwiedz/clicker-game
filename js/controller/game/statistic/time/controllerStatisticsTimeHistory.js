export class ControllerStatisticsTimeHistory {

    constructor(viewStatisticsTimeHistory) {
        this.viewStatisticsTimeHistory = viewStatisticsTimeHistory;
    }

    createStatisticsTimeHistory() {
        this.viewStatisticsTimeHistory.createContainerStatisticsTimedHistory();
    }

    setStatisticsTimeHistoryRoundNumberValue(
        statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax) {

        this.viewStatisticsTimeHistory.setStatisticsTimeHistoryRoundNumberValue(
            statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax);
    }
}