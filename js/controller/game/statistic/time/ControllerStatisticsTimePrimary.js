export class ControllerStatisticsTimePrimary {

    constructor(viewStatisticsTimePrimary, actionStatisticsTime) {
        this.viewStatisticsTimePrimary = viewStatisticsTimePrimary;
        this.actionStatisticsTime = actionStatisticsTime;
    }

    createStatisticsTimePrimary() {
        this.viewStatisticsTimePrimary.createContainerStatisticsTimePrimary();
    }

    // createStatisticsTime() {
    //     this.viewStatisticsTime.createGameFieldStatisticsTime();
    // }
    //
    // removeGameFieldStatisticsTime() {
    //     this.viewStatisticsTime.removeGameFieldStatisticsTime();
    // }
    //
    // setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest) {
    //     this.viewStatisticsTime.setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest);
    // }
}