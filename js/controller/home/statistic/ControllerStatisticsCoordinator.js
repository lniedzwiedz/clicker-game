import {
    addEventListenerOnClickButton
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonClickColor from "../../../common/variable/home/game/variablesButtonGameMain.js";


export class ControllerStatisticsCoordinator {

    constructor(controllerStatisticsTime, controllerStatisticsFraud) {
        this.controllerStatisticsTime = controllerStatisticsTime;
        this.controllerStatisticsFraud = controllerStatisticsFraud;
        this.onStart = null;
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    createConfigurationStatistics(gameRoundCount) {
        // this.createGameFieldStatisticsTime();
        this.createConfigurationStatisticsFraud(gameRoundCount);
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
            variablesButtonClickColor.buttonGameDisplayFlex,
            this.setConfigurationCLickColor,
            this
        );
    }

    createConfigurationStatisticsFraud(gameRoundCount) {
        this.controllerStatisticsFraud.createConfigurationGameStatisticsTimeFraud(gameRoundCount);
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

    configureStatisticsAtStart() {
        // to do -> remove main not main part container
        this.removeGameFieldStatisticsTime();
        this.removeStatisticsFraud();
    }
}