import {
    createElementDiv,
    createElementDivAnaDivChild,
    createElementDivWithIdAndSetClassName,
    createElementDivWithTheSameIdAndClassName,
    isElementsExistById,
    removeElementById,
    setElementClassNameById,
    setElementClassNamedAndText,
    setElementClassNameSameAsIdAndSetText,
    setElementStyletAsGrid,
    setElementTextById,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesStatisticsFraud from "../../common/variable/statistic/variablesStatisticsFraud.js";
import * as variablesStatisticsTime from "../../common/variable/statistic/variablesStatisticsTime.js";


export class ViewStatisticsFraud {

    createContainerStatisticsFraudSumMain() {
        createElementDivAnaDivChild(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts, variablesStatisticsFraud.containerStatisticsFraudSumMain, variablesStatisticsFraud.containerStatisticsFraudSumMainParts);
        setElementClassNameById(variablesStatisticsFraud.containerStatisticsFraudSumMainParts, variablesStatisticsTime.containerGameFiledCommonParts);
    }

    createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay) {
        createElementDivWithIdAndSetClassName(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate);
        createElementDivWithIdAndSetClassName(containerGameFiledStatisticsFraudGamePlay, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay);
    }

    createContainerStatisticsFraudSumUpdate() {
        this.createContainerStatisticsFraudMain(variablesStatisticsFraud.containerStatisticsFraudSumMainParts, variablesStatisticsFraud.statisticsFraudSumDisplayUpdateNumberMain, variablesStatisticsFraud.fraudCountRoundUpdateSumNumber, variablesStatisticsFraud.statisticsFraudSumDisplayUpdateNumberMainParts, variablesStatisticsTime.commonGameFiledDisplay);
        createElementDivWithIdAndSetClassName(variablesStatisticsFraud.statisticsFraudSumDisplayUpdateNumberMainParts, variablesStatisticsFraud.statisticsFraudSumUpdateNumberDiv, variablesStatisticsTime.commonGamePlayTextUpdate);
        setElementClassNamedAndText(variablesStatisticsFraud.statisticsFraudSumUpdateNumberDiv, variablesStatisticsFraud.statisticsFraudBestUpdateNumber, variablesStatisticsFraud.statisticsFraudDisplayTextSumDefault);
    }

    createContainerStatisticsFraudSumIcons() {
        this.createContainerStatisticsFraudMain(variablesStatisticsFraud.containerStatisticsFraudSumMainParts, variablesStatisticsFraud.containerStatisticsFraudSumDisplayIcons, variablesStatisticsTime.containerGameFiledCommonStaticText, variablesStatisticsFraud.statisticsFraudSumDisplayIcons, variablesStatisticsTime.commonGameFiledDisplay);
        createElementDivWithIdAndSetClassName(variablesStatisticsFraud.statisticsFraudSumDisplayIcons, variablesStatisticsFraud.statisticsFraudSumText, variablesStatisticsTime.commonStaticText);
        setElementClassNameSameAsIdAndSetText(variablesStatisticsFraud.statisticsFraudSumText, variablesStatisticsFraud.statisticsFraudDisplayIconGem);
    }

    createContainerStatisticsFraudSum() {
        this.createContainerStatisticsFraudSumMain();
        this.createContainerStatisticsFraudSumUpdate()
        this.createContainerStatisticsFraudSumIcons();
    }

    createContainerStatisticsFraudRoundNumberUpdate() {
        createElementDivWithTheSameIdAndClassName(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts, variablesStatisticsFraud.containerStatisticsFraudMain);
        createElementDivWithIdAndSetClassName(variablesStatisticsFraud.containerStatisticsFraudMain, variablesStatisticsFraud.containerStatisticsFraudMainParts, variablesStatisticsTime.containerGameFiledCommonParts);
        createElementDiv(variablesStatisticsFraud.containerStatisticsFraudMainParts, variablesStatisticsFraud.containerStatisticsFraudCounterUpdateMain);
        createElementDiv(variablesStatisticsFraud.containerStatisticsFraudMainParts, variablesStatisticsFraud.containerStatisticsFraudTextNameMain);
        this.createContainerStatisticsFraudMain(variablesStatisticsFraud.containerStatisticsFraudTextNameMain, variablesStatisticsFraud.statisticsFraudTextName, variablesStatisticsTime.commonGameFiledDisplay, variablesStatisticsFraud.statisticsFraudCountText, variablesStatisticsTime.commonStaticText);
        setElementClassNameSameAsIdAndSetText(variablesStatisticsFraud.statisticsFraudCountText, variablesStatisticsFraud.statisticsFraudDisplayTextCounterName);
    }

    createGameFieldStatisticsFraud(maxClicksNumber) {
        createElementDivWithTheSameIdAndClassName(variablesStatisticsFraud.containerGameFiledStatisticsFraud, variablesStatisticsFraud.containerGameFiledStatisticsFraudParts);
        this.createContainerStatisticsFraudSum();
        this.createContainerStatisticsFraudRoundNumberUpdate();
        this.createContainerStatisticsFraudRoundNumberUpdateValue(maxClicksNumber);
    }

    createElementFraudCountRoundInner(parentId, childId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(childId, variablesStatisticsTime.commonGameFiledDisplay);
        setElementClassNameById(childId, variablesStatisticsTime.commonStaticText);
        setElementClassNameById(childId, variablesStatisticsFraud.fraudCountRoundCommon);
        setElementTextById(childId, variablesStatisticsFraud.statisticsFraudDisplayIconWhiskeyGlass);
    }

    createElementFraudCountRoundMain(parentId, childId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(parentId, variablesStatisticsFraud.fraudCountRound);
        setElementClassNameById(parentId, variablesStatisticsFraud.fraudCountRoundUpdateNumber);
    }

    createContainerStatisticsFraudRoundNumberUpdateValue(maxClicksNumber) {

        let parentId = variablesStatisticsFraud.containerStatisticsFraudCounterUpdateMain;
        let fraudNumber = maxClicksNumber;

        let gridRowStartNumber = 1;
        let gridColumnStartNumber = 1;
        let gridRowEndNumber = 2;
        let gridColumnEndNumber = 2;

        let gridTemplateRows = "repeat(1, 2fr 6fr 2fr)";
        let gridTemplateColumns = "repeat(" + fraudNumber + ", 1fr 100fr 1fr)";
        setElementStyletAsGrid(parentId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns);

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        for (let i = 0; i < fraudNumber; i++) {

            let childId = variablesStatisticsFraud.containerStatisticsFraudCounterUpdateMain + "-" + valueToString(i);
            this.createElementFraudCountRoundMain(parentId, childId);

            let gridTemplateRowsChild = "1fr";
            let gridTemplateColumnsChild = "1fr";
            setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);

            let grandChildId = variablesStatisticsFraud.fraudCountRoundUpdateNumberPrefix + valueToString(i);
            this.createElementFraudCountRoundInner(childId, grandChildId);

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
        }
    }

    setStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex) {
        this.setStatisticFraudRoundNumberCountedValue(fraudCountedRoundNumber, fraudRoundIndex);
        this.setStatisticFraudCountedSumValue(fraudCountedSumNumber);
    }

    setStatisticFraudRoundNumberCountedValue(fraudCountedRoundNumber, fraudRoundIndex) {
        let result;
        if (fraudCountedRoundNumber < 10)
            result = valueToString(fraudCountedRoundNumber) + variablesStatisticsFraud.statisticsFraudDisplayIconWhiskeyGlassWhenCountedNumberIsLessThanTen;
        else
            result = fraudCountedRoundNumber;

        let elementId = variablesStatisticsFraud.fraudCountRoundUpdateNumberPrefix + fraudRoundIndex;
        let text = variablesStatisticsFraud.statisticsFraudDisplayIconWhiskeyGlassMedia + result;
        setElementTextById(elementId, text);
    }

    setStatisticFraudCountedSumValue(fraudCountedSumNumber) {
        setElementTextById(variablesStatisticsFraud.statisticsFraudSumUpdateNumberDiv, fraudCountedSumNumber);
    }

    removeContainerStatisticsFraud() {
        if (isElementsExistById(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts)) removeElementById(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts);
    }
}