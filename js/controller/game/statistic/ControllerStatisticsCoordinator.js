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

    // configureStatisticsAtStart(){
    //     this.removeStatisticsFraudPrimary();
    // }

    // removeStatisticsFraudPrimary(){
    //     this.controllerStatisticsFraudCoordinator.removeStatisticsFraudPrimary();
    // }


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

    // updateStatisticTime(
    //     statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
    //     statisticTimeInSecondsMax, statisticTimeInSecondsBest) {
    //
    //     this.controllerStatisticsCoordinator.configureStatisticTime(
    //         statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
    //         statisticTimeInSecondsMax, statisticTimeInSecondsBest
    //     );
    // }

    updateStatisticTime(
        statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
        statisticTimeInSecondsMax, statisticTimeInSecondsBest) {

        this.controllerStatisticsTimeCoordinator.updateStatisticTime(
            statisticTimeInSecondsMin, statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax, statisticTimeInSecondsBest);
    }

    // createGameFieldStatisticsTime() {
    //     this.controllerStatisticsTime.createStatisticsTime();
    // }

    // setConfigurationCLickColor(event) {
    //     if (this.onStart) {
    //         this.onStart();
    //     }
    // }

    // configureButtonClickColor() {
    //     addEventListenerOnClickButton(
    //         variablesButtonClickColor.buttonGameId,
    //         this.setConfigurationCLickColor,
    //         this
    //     );
    // }

    // createConfigurationStatisticsFraud(gameRoundCount) {
    //     this.controllerStatisticsFraudCoordinator.createConfigurationGameStatisticsTimeFraud(gameRoundCount);
    // }

    // setStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex) {
    //     this.controllerStatisticsFraud.setStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex);
    // }
    //
    // configureStatisticTime(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest) {
    //     this.controllerStatisticsTime.setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest);
    // }
    //
    // removeGameFieldStatisticsTime() {
    //     this.controllerStatisticsTime.removeGameFieldStatisticsTime();
    // }
    //
    // removeStatisticsFraud() {
    //     this.controllerStatisticsFraud.removeStatisticsFraud();
    // }
    //
    // configureStatisticsAtStart() {
    //     // to do -> remove main not main part container
    //     // this.removeGameFieldStatisticsTime();
    //     this.removeStatisticsFraud();
    // }
}