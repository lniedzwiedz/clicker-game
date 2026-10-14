import * as variablesGame from "../../../game/common/variablesGame.js";

export class ControllerStatisticsCoordinator {

    constructor(controllerStatisticsTimeCoordinator, controllerStatisticsFraudCoordinator) {
        this.controllerStatisticsTimeCoordinator = controllerStatisticsTimeCoordinator;
        this.controllerStatisticsFraudCoordinator = controllerStatisticsFraudCoordinator;
        // this.onStart = null;
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

    // updateStatistic(
    //     statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
    //     statisticTimeInSecondsMax, statisticTimeInSecondsBest,
    //     fraudCountedRoundNumber, fraudTotalValue, historyRoundNumber) {
    //
    //     this.updateStatisticFraud(
    //         fraudCountedRoundNumber, fraudTotalValue, historyRoundNumber
    //     );
    //
    //     this.updateStatisticTime(
    //         statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
    //         statisticTimeInSecondsMax, statisticTimeInSecondsBest
    //     );
    // }

    updateStatistic(
        // statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        // statisticTimeInSecondsMax, statisticTimeInSecondsBest,
        // statisticsFraudMap) {
        statisticsMap) {

        this.updateStatisticFraud(
            statisticsMap.get(variablesGame.mapKeyStatisticsFraud)
        );

        // this.updateStatisticTime(
        //     statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        //     statisticTimeInSecondsMax, statisticTimeInSecondsBest
        // );

        // this.updateStatisticTime(
        //     statisticsMap.get(variablesGame.mapKeyStatisticsTime)
        // );
    }

    // updateStatisticFraud(
    //     fraudCountedRoundNumber, fraudTotalValue, historyRoundNumber) {
    //
    //     this.controllerStatisticsFraudCoordinator.updateStatisticFraud(
    //         fraudCountedRoundNumber, fraudTotalValue, historyRoundNumber
    //     );
    // }

    updateStatisticFraud(statisticsFraudMap) {
        this.controllerStatisticsFraudCoordinator.updateStatisticFraud(statisticsFraudMap);
    }

    updateStatisticTime(
        statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        statisticTimeInSecondsMax, statisticTimeInSecondsBest) {

        this.controllerStatisticsTimeCoordinator.updateStatisticTime(
            statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax, statisticTimeInSecondsBest);
    }
}