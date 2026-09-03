import {
    createElementDiv,
    createElementDivAnaDivChild,
    createElementDivWithIdAndSetClassName, createElementDivWithTheSameIdAndClassName,
    setElementClassNameById, setElementClassNamedAndText, setElementClassNameSameAsIdAndSetText
} from "../common/function/commonFunctions.js";

import {ViewGameConfigurationRound} from "./ViewGameConfigurationRound.js";
import {
    containerGameFiledStatisticsFraud,
    containerGameFiledStatisticsFraudBest,
    containerGameFiledStatisticsFraudBestGamePlay, containerGameFiledStatisticsFraudBestParts,
    containerGameFiledStatisticsFraudBestText, containerGameFiledStatisticsFraudCount,
    containerGameFiledStatisticsFraudCountGamePlay,
    containerGameFiledStatisticsFraudCountParts, containerGameFiledStatisticsFraudCountText,
    containerGameFiledStatisticsFraudParts, fraudCountRoundUpdateSumNumber, gameFiledStatisticsFraudBestGamePlay,
    gameFiledStatisticsFraudBestText, gameFiledStatisticsFraudCountText,
    statisticsFraudBestGamePlay,
    statisticsFraudBestGamePlayDisplay, statisticsFraudBestText,
    statisticsFraudBestTextDisplay, statisticsFraudBestUpdateNumber, statisticsFraudCountText,
    statisticsFraudCountTextDisplay
} from "../common/variable/clickerGame/variablesGameStatisticsTimeFraud";
import {
    commonGameFiledDisplay, commonGamePlayTextUpdate,
    commonStaticText,
    containerGameFiledCommonParts,
    containerGameFiledCommonStaticText
} from "../common/variable/clickerGame/variablesGameStatisticsTimeGeneral";
const viewGameConfigurationRound = new ViewGameConfigurationRound();

export class ViewGameStatisticsTimeFraud {

    createContainerStatisticsFraudSumMain() {
        createElementDivAnaDivChild(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudBest, containerGameFiledStatisticsFraudBestParts);
        setElementClassNameById(containerGameFiledStatisticsFraudBestParts, containerGameFiledCommonParts);
    }

    createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay) {
        createElementDivWithIdAndSetClassName(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate);
        createElementDivWithIdAndSetClassName(containerGameFiledStatisticsFraudGamePlay, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay);
    }

    createContainerStatisticsFraudSumUpdate() {
        this.createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudBestParts, containerGameFiledStatisticsFraudBestGamePlay, fraudCountRoundUpdateSumNumber, gameFiledStatisticsFraudBestGamePlay, commonGameFiledDisplay);
        createElementDivWithIdAndSetClassName(gameFiledStatisticsFraudBestGamePlay, statisticsFraudBestGamePlay, commonGamePlayTextUpdate);
        setElementClassNamedAndText(statisticsFraudBestGamePlay, statisticsFraudBestUpdateNumber, statisticsFraudBestGamePlayDisplay);
    }

    createContainerStatisticsFraudSumTextStatic() {
        this.createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudBestParts, containerGameFiledStatisticsFraudBestText, containerGameFiledCommonStaticText, gameFiledStatisticsFraudBestText, commonGameFiledDisplay);
        createElementDivWithIdAndSetClassName(gameFiledStatisticsFraudBestText, statisticsFraudBestText, commonStaticText);
        setElementClassNameSameAsIdAndSetText(statisticsFraudBestText, statisticsFraudBestTextDisplay);
    }

    createContainerStatisticsFraudSum() {
        this.createContainerStatisticsFraudSumMain();
        this.createContainerStatisticsFraudSumUpdate()
        this.createContainerStatisticsFraudSumTextStatic();
    }

    createContainerStatisticsFraudRoundUpdate() {
        createElementDivWithTheSameIdAndClassName(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudCount);
        createElementDivWithIdAndSetClassName(containerGameFiledStatisticsFraudCount, containerGameFiledStatisticsFraudCountParts, containerGameFiledCommonParts);
        createElementDiv(containerGameFiledStatisticsFraudCountParts, containerGameFiledStatisticsFraudCountGamePlay);
        createElementDiv(containerGameFiledStatisticsFraudCountParts, containerGameFiledStatisticsFraudCountText);
        this.createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudCountText, gameFiledStatisticsFraudCountText, commonGameFiledDisplay, statisticsFraudCountText, commonStaticText);
        setElementClassNameSameAsIdAndSetText(statisticsFraudCountText, statisticsFraudCountTextDisplay);
    }

    createGameFieldStatisticsFraud() {
        createElementDivWithTheSameIdAndClassName(containerGameFiledStatisticsFraud, containerGameFiledStatisticsFraudParts);
        this.createContainerStatisticsFraudSum();
        this.createContainerStatisticsFraudRoundUpdate();
        viewGameConfigurationRound.createContainerStatisticsFraudCountPerRound();
    }


}