export class ControllerStatisticsCoordinator {

    constructor(controllerStatisticsTimeCoordinator, controllerStatisticsFraudCoordinator) {
        this.controllerStatisticsTimeCoordinator = controllerStatisticsTimeCoordinator;
        this.controllerStatisticsFraudCoordinator = controllerStatisticsFraudCoordinator;
        this.onStart = null;
    }

    // setOnStart(onStart) {
    //     this.onStart = onStart;
    // }

    createStatistics(gameRoundCount) {
       // this.createStatisticTime(gameRoundCount);
       this.createStatisticFraud(gameRoundCount);
    }

    createStatisticFraud(gameRoundCount){
        this.controllerStatisticsFraudCoordinator.createStatisticsFraud(gameRoundCount);
    }

    // createStatisticTime(gameRoundCount){
    //     this.controllerStatisticsTimeCoordinator.createStatisticsTime(gameRoundCount);
    // }

    updateStatistic(
        fraudCountedRoundNumber, fraudTotalValue, fraudRoundIndex){

        this.updateStatisticFraud(
            fraudCountedRoundNumber, fraudTotalValue, fraudRoundIndex
        );

        // this.updateStatisticTime();
    }

    updateStatisticFraud(
        fraudCountedRoundNumber, fraudTotalValue, fraudRoundIndex){

        this.controllerStatisticsFraudCoordinator.updateStatisticFraud(
            fraudCountedRoundNumber, fraudTotalValue, fraudRoundIndex
        );
    }

    updateStatisticTime(){
        // this.controllerStatisticsTimeCoordinator.updateStatisticTime();
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