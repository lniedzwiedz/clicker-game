import {
    addEventListenerOnClickButton
} from "../../common/function/commonFunctions.js";

import * as variablesButton from "../../common/variable/control/variablesButton.js";

export class ControllerStatisticsMain {

    constructor(controllerStatisticsTime, controllerStatisticsFraud) {
        this.controllerStatisticsTime = controllerStatisticsTime;
        this.controllerStatisticsFraud = controllerStatisticsFraud;
        this.onStart = null;
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    createConfigurationStatisticsMain(maxClicksNumber) {
        this.createGameFieldStatisticsTime();
        this.createConfigurationStatisticsFraud(maxClicksNumber);
    }

    createGameFieldStatisticsTime() {
        this.controllerStatisticsTime.createGameFieldStatisticsTime();
    }

    setConfigurationCLickColor(event) {
        if (this.onStart) {
            this.onStart();
        }
    }

    configureButtonClickColor() {
        addEventListenerOnClickButton(
            variablesButton.buttonClickColorDiv,
            this.setConfigurationCLickColor,
            this
        );
    }

    createConfigurationStatisticsFraud(maxClicksNumber) {
        this.controllerStatisticsFraud.createConfigurationGameStatisticsTimeFraud(maxClicksNumber);
    }

    setGameStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex) {
        this.controllerStatisticsFraud.setGameStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex);
    }

    configureStatisticTime(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest) {
        this.controllerStatisticsTime.setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest);
    }

    removeGameFieldStatisticsTime() {
        this.controllerStatisticsTime.removeGameFieldStatisticsTime();
    }

    removeGameFieldStatisticsFraud() {
        this.controllerStatisticsFraud.removeGameFieldStatisticsFraud();
    }

    removeContainerStatisticParts() {
        this.removeGameFieldStatisticsTime();
        this.removeGameFieldStatisticsFraud();
    }
}