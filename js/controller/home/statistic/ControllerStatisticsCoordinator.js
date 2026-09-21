import {
    addEventListenerOnClickButton
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonClickColor from "../../../common/variable/home/buttonClick/variablesButtonClick.js";


export class ControllerStatisticsCoordinator {

    constructor(controllerStatisticsTime, controllerStatisticsFraud) {
        this.controllerStatisticsTime = controllerStatisticsTime;
        this.controllerStatisticsFraud = controllerStatisticsFraud;
        this.onStart = null;
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    createConfigurationStatistics(maxClicksNumber) {
        this.createGameFieldStatisticsTime();
        this.createConfigurationStatisticsFraud(maxClicksNumber);
    }

    createGameFieldStatisticsTime() {
        this.controllerStatisticsTime.createStatisticsTime();
    }

    setConfigurationCLickColor(event) {
        if (this.onStart) {
            this.onStart();
        }
    }

    configureButtonClickColor() {
        addEventListenerOnClickButton(
            variablesButtonClickColor.buttonClickDisplayFlex,
            this.setConfigurationCLickColor,
            this
        );
    }

    createConfigurationStatisticsFraud(maxClicksNumber) {
        this.controllerStatisticsFraud.createConfigurationGameStatisticsTimeFraud(maxClicksNumber);
    }

    setStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex) {
        this.controllerStatisticsFraud.setStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex);
    }

    configureStatisticTime(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest) {
        this.controllerStatisticsTime.setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest);
    }

    removeGameFieldStatisticsTime() {
        this.controllerStatisticsTime.removeGameFieldStatisticsTime();
    }

    removeStatisticsFraud() {
        this.controllerStatisticsFraud.removeStatisticsFraud();
    }

    removeStatistics() {
        // to do -> remove main not main part container
        this.removeGameFieldStatisticsTime();
        this.removeStatisticsFraud();
    }
}