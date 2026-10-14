import * as variablesGameStatisticsTime from "../../../../game/common/variablesGameStatisticsTime.js";


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

    updateStatisticTime(
        // statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        //                 statisticTimeInSecondsMax, statisticTimeInSecondsBest
        statisticsTimedMap) {

        let statisticTimeBest = statisticsTimedMap.get(variablesGameStatisticsTime.mapKeyStatisticTimeBest);
        console.log("statisticTimeBest = " + statisticTimeBest);

        this.updateStatisticsTimeSummary(statisticTimeBest);

        let statisticTimeMin = statisticsTimedMap.get(variablesGameStatisticsTime.mapKeyStatisticTimeMin);
        let statisticTimeAvg = statisticsTimedMap.get(variablesGameStatisticsTime.mapKeyStatisticTimeAvg);
        let statisticTimeMax = statisticsTimedMap.get(variablesGameStatisticsTime.mapKeyStatisticTimeMax);

        this.updateStatisticTimeHistory(statisticTimeMin, statisticTimeAvg, statisticTimeMax);

    }

    updateStatisticsTimeSummary(statisticTimeBest) {
        this.controllerStatisticsTimeSummary.setStatisticsTimeSummaryBestValue(statisticTimeBest);
    }

    updateStatisticTimeHistory(
        statisticTimeMin, statisticTimeAvg, statisticTimeMax) {

        this.controllerStatisticsTimeHistory.setStatisticsTimeHistoryRoundNumberValue(
            statisticTimeMin, statisticTimeAvg, statisticTimeMax);
    }
}