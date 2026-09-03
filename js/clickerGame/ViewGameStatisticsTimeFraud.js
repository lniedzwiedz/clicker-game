import {
    createElementDiv,
    createElementDivAnaDivChild,
    createElementDivWithIdAndSetClassName, createElementDivWithTheSameIdAndClassName,
    setElementClassNameById, setElementClassNamedAndText, setElementClassNameSameAsIdAndSetText
} from "../common/function/commonFunctions.js";

import * as variablesGameStatisticsTimeFraud from "../common/variable/clickerGame/variablesGameStatisticsTimeFraud.js";
import {ViewGameClickerColor} from "../ViewGameClickerColor";
import * as variablesGameStatisticsTimeGeneral from "../common/variable/clickerGame/variablesGameStatisticsTimeGeneral.js";

const viewGameClickerColor = new ViewGameClickerColor();

export class ViewGameStatisticsTimeFraud {

    createContainerStatisticsFraudSumMain() {
        createElementDivAnaDivChild(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBest, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestParts);
        setElementClassNameById(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestParts, variablesGameStatisticsTimeGeneral.containerGameFiledCommonParts);
    }

    createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay) {
        createElementDivWithIdAndSetClassName(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate);
        createElementDivWithIdAndSetClassName(containerGameFiledStatisticsFraudGamePlay, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay);
    }

    createContainerStatisticsFraudSumUpdate() {
        this.createContainerStatisticsFraudMain(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestGamePlay, variablesGameStatisticsTimeFraud.fraudCountRoundUpdateSumNumber, variablesGameStatisticsTimeFraud.gameFiledStatisticsFraudBestGamePlay, variablesGameStatisticsTimeGeneral.commonGameFiledDisplay);
        createElementDivWithIdAndSetClassName(variablesGameStatisticsTimeFraud.gameFiledStatisticsFraudBestGamePlay, variablesGameStatisticsTimeFraud.statisticsFraudBestGamePlay, variablesGameStatisticsTimeGeneral.commonGamePlayTextUpdate);
        setElementClassNamedAndText(variablesGameStatisticsTimeFraud.statisticsFraudBestGamePlay, variablesGameStatisticsTimeFraud.statisticsFraudBestUpdateNumber, variablesGameStatisticsTimeFraud.statisticsFraudBestGamePlayDisplay);
    }

    createContainerStatisticsFraudSumTextStatic() {
        this.createContainerStatisticsFraudMain(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestText, variablesGameStatisticsTimeGeneral.containerGameFiledCommonStaticText, variablesGameStatisticsTimeFraud.gameFiledStatisticsFraudBestText, variablesGameStatisticsTimeGeneral.commonGameFiledDisplay);
        createElementDivWithIdAndSetClassName(variablesGameStatisticsTimeFraud.gameFiledStatisticsFraudBestText, variablesGameStatisticsTimeFraud.statisticsFraudBestText, variablesGameStatisticsTimeGeneral.commonStaticText);
        setElementClassNameSameAsIdAndSetText(variablesGameStatisticsTimeFraud.statisticsFraudBestText, variablesGameStatisticsTimeFraud.statisticsFraudBestTextDisplay);
    }

    createContainerStatisticsFraudSum() {
        this.createContainerStatisticsFraudSumMain();
        this.createContainerStatisticsFraudSumUpdate()
        this.createContainerStatisticsFraudSumTextStatic();
    }

    createContainerStatisticsFraudRoundUpdate() {
        createElementDivWithTheSameIdAndClassName(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCount);
        createElementDivWithIdAndSetClassName(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCount, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountParts, variablesGameStatisticsTimeGeneral.containerGameFiledCommonParts);
        createElementDiv(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountGamePlay);
        createElementDiv(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountText);
        this.createContainerStatisticsFraudMain(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountText, variablesGameStatisticsTimeFraud.gameFiledStatisticsFraudCountText, variablesGameStatisticsTimeGeneral.commonGameFiledDisplay, variablesGameStatisticsTimeFraud.statisticsFraudCountText, variablesGameStatisticsTimeGeneral);
        setElementClassNameSameAsIdAndSetText(variablesGameStatisticsTimeFraud.statisticsFraudCountText, variablesGameStatisticsTimeFraud.statisticsFraudCountTextDisplay);
    }

    createGameFieldStatisticsFraud() {
        createElementDivWithTheSameIdAndClassName(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraud, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudParts);
        this.createContainerStatisticsFraudSum();
        this.createContainerStatisticsFraudRoundUpdate();
        viewGameClickerColor.createContainerStatisticsFraudCountPerRound();
    }
}