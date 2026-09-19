export class ControllerStatisticsTime {

    constructor(viewStatisticsTime, actionStatisticsTime) {
        this.viewStatisticsTime = viewStatisticsTime;
        this.actionStatisticsTime = actionStatisticsTime;
    }

    createStatisticsTime() {
        this.viewStatisticsTime.createGameFieldStatisticsTime();
    }

    removeGameFieldStatisticsTime() {
        this.viewStatisticsTime.removeGameFieldStatisticsTime();
    }

    setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest) {
        this.viewStatisticsTime.setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest);
    }
}