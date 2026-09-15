import {
    createElementDiv,
    createElementDivAnaDivChild,
    createElementDivWithIdAndSetClassName,
    createElementDivWithTheSameIdAndClassName,
    createElementI, createElementP,
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
import {
    containerStatisticsFraudTextNameMainParts,
    statisticsFraudSumDisplayUpdateValueFlex
} from "../../common/variable/statistic/variablesStatisticsFraud.js";


class ViewStatisticsFraud {

    createContainerStatisticsFraudSumMain() {
        createElementDivAnaDivChild(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts, variablesStatisticsFraud.containerStatisticsFraudSumMain, variablesStatisticsFraud.containerStatisticsFraudSumMainParts);
        setElementClassNameById(variablesStatisticsFraud.containerStatisticsFraudSumMainParts, variablesStatisticsTime.containerGameFiledCommonParts);
    }

    createContainerStatisticsFraudMain(parentId, childId, fraudUpdate, grandchildId, displayText) {
        createElementDivWithIdAndSetClassName(parentId, childId, fraudUpdate);

        createElementDivWithIdAndSetClassName(childId, grandchildId, displayText);

        // createElementDiv(childId, grandchildId);

    }

    createContainerStatisticsFraudSumUpdate() {
        // this.createContainerStatisticsFraudMain(
        //     variablesStatisticsFraud.containerStatisticsFraudSumMainParts,
        //     variablesStatisticsFraud.statisticsFraudSumDisplayUpdateNumberMain,
        //     variablesStatisticsFraud.fraudSumValueUpdate,
        //     variablesStatisticsFraud.statisticsFraudSumDisplayUpdateNumberMainParts,
        //     variablesStatisticsTime.commonGameFiledDisplay
        // );

        createElementDivWithIdAndSetClassName(
            variablesStatisticsFraud.containerStatisticsFraudSumMainParts,
            variablesStatisticsFraud.statisticsFraudSumDisplayUpdateValueMain,
        );

        createElementDivWithIdAndSetClassName(
            variablesStatisticsFraud.statisticsFraudSumDisplayUpdateValueMain,
            variablesStatisticsFraud.statisticsFraudSumDisplayUpdateValueMainParts,
        );

        createElementDivWithIdAndSetClassName(
            variablesStatisticsFraud.statisticsFraudSumDisplayUpdateValueMainParts,
            variablesStatisticsFraud.statisticsFraudSumDisplayUpdateValueFlex,
            variablesStatisticsFraud.commonGameFiledDisplay
        );

        createElementP(
            variablesStatisticsFraud.statisticsFraudSumDisplayUpdateValueFlex,
            variablesStatisticsFraud.statisticsFraudSumDisplayValue
        );

        setElementClassNameById(
            variablesStatisticsFraud.statisticsFraudSumDisplayValue,
            variablesStatisticsFraud.statisticsFraudSumDisplayValue
        );

        setElementTextById(
            variablesStatisticsFraud.statisticsFraudSumDisplayValue,
            variablesStatisticsFraud.statisticsFraudDisplayTextSumDefault
        );
    }

    createContainerStatisticsFraudSumIcons() {
        this.createContainerStatisticsFraudMain(
            variablesStatisticsFraud.containerStatisticsFraudSumMainParts,
            variablesStatisticsFraud.containerStatisticsFraudSumDisplayIconsMain,
            variablesStatisticsTime.containerGameFiledCommonStaticText,
            variablesStatisticsFraud.statisticsFraudSumDisplayIcons,
            variablesStatisticsTime.commonGameFiledDisplay
        );

        // createElementDivWithIdAndSetClassName(
        //     variablesStatisticsFraud.statisticsFraudSumDisplayIcons,
        //     variablesStatisticsFraud.statisticsFraudSumText,
        //     variablesStatisticsTime.commonStaticText);

        createElementDiv(
            variablesStatisticsFraud.statisticsFraudSumDisplayIcons,
            variablesStatisticsFraud.statisticsFraudSumText
        );


        createElementI(variablesStatisticsFraud.statisticsFraudSumText, variablesStatisticsFraud.statisticsFraudSumTextLeft, variablesStatisticsFraud.iconStyleSolid, variablesStatisticsFraud.iconGem);
        createElementI(variablesStatisticsFraud.statisticsFraudSumText, variablesStatisticsFraud.statisticsFraudSumTextMiddle, variablesStatisticsFraud.iconStyleSolid, variablesStatisticsFraud.iconWhiskeyGlass);
        setElementClassNameById(variablesStatisticsFraud.statisticsFraudSumTextMiddle, variablesStatisticsFraud.iconStyleWhiskeyGlassFraudSum);
        createElementI(variablesStatisticsFraud.statisticsFraudSumText, variablesStatisticsFraud.statisticsFraudSumTextRight, variablesStatisticsFraud.iconStyleSolid, variablesStatisticsFraud.iconGem);
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
        // this.createContainerStatisticsFraudMain(
        //     variablesStatisticsFraud.containerStatisticsFraudTextNameMain,
        //     variablesStatisticsFraud.statisticsFraudTextName,
        //     variablesStatisticsTime.commonGameFiledDisplay,
        //     variablesStatisticsFraud.statisticsFraudCountText,
        //     variablesStatisticsTime.commonStaticText
        // );

        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudTextNameMain,
            variablesStatisticsFraud.containerStatisticsFraudTextNameMainParts
        );

        // createElementDivWithIdAndSetClassName(
        //     variablesStatisticsFraud.containerStatisticsFraudTextNameMainParts,
        //     variablesStatisticsFraud.statisticsFraudTextName,
        //     variablesStatisticsTime.commonGameFiledDisplay
        // );

        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudTextNameMainParts,
            variablesStatisticsFraud.statisticsFraudTextName,
        );

        createElementDivWithIdAndSetClassName(
            variablesStatisticsFraud.statisticsFraudTextName,
            variablesStatisticsFraud.statisticsFraudCountText,
            variablesStatisticsTime.commonStaticText
        );

        // setElementClassNameSameAsIdAndSetText(variablesStatisticsFraud.statisticsFraudCountText, variablesStatisticsFraud.statisticsFraudDisplayTextCounterName);
        createElementP(variablesStatisticsFraud.statisticsFraudCountText,variablesStatisticsFraud.statisticsFraudCounterNameId );
        setElementTextById(variablesStatisticsFraud.statisticsFraudCounterNameId , variablesStatisticsFraud.statisticsFraudDisplayTextCounterName)
    }

    createGameFieldStatisticsFraud(maxClicksNumber) {
        createElementDivWithTheSameIdAndClassName(variablesStatisticsFraud.containerGameFiledStatisticsFraud, variablesStatisticsFraud.containerGameFiledStatisticsFraudParts);
        this.createContainerStatisticsFraudSum();
        this.createContainerStatisticsFraudRoundNumberUpdate();
        this.createContainerStatisticsFraudRoundNumberUpdateValue(maxClicksNumber);
    }

    createElementFraudCountRoundInner(parentId, childId, iId, pId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(childId, variablesStatisticsTime.commonGameFiledDisplay);
        // setElementClassNameById(childId, variablesStatisticsTime.commonStaticText);
        // setElementClassNameById(childId, variablesStatisticsFraud.fraudCountRoundCommon);

        createElementI(childId, iId, variablesStatisticsFraud.iconStyleSolid, variablesStatisticsFraud.iconWhiskeyGlass);
        // setElementClassNameById(iId , variablesStatisticsFraud.statisticsFraudDisplayIconWhiskeyGlassAndSpace);

        createElementP(childId, pId);
        setElementTextById(pId, variablesStatisticsFraud.statisticsFraudDisplayIconWhiskeyGlassAndSpace);
        setElementClassNameById(pId, variablesStatisticsFraud.fraudSumValueUpdatePerRound)
        // setElementTextById(pId, variablesStatisticsFraud.statisticsFraudDisplayIconWhiskeyGlassAndSpace);
    }

    createElementFraudCountRoundMain(parentId, childId) {
        createElementDiv(parentId, childId);
        // setElementClassNameById(parentId, variablesStatisticsFraud.fraudRoundNumber);
        // setElementClassNameById(parentId, variablesStatisticsFraud.fraudSumValueUpdatePerRound);
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

            let childId = variablesStatisticsFraud.containerStatisticsFraudCounterUpdateMainPartsPrefix + valueToString(i);
            this.createElementFraudCountRoundMain(parentId, childId);

            let gridTemplateRowsChild = "1fr";
            let gridTemplateColumnsChild = "1fr";
            setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);

            // let grandchildId = variablesStatisticsFraud.fraudSumValueUpdatePerRoundPrefix + valueToString(i);
            let grandchildId = variablesStatisticsFraud.fraudSumValueUpdatePerRoundMainPrefix + valueToString(i);


            let iId = variablesStatisticsFraud.fraudIconWhiskeyGlassPrefix + valueToString(i);
            let pId = variablesStatisticsFraud.fraudSumValueUpdatePerRoundPrefix + valueToString(i);
            this.createElementFraudCountRoundInner(childId, grandchildId, iId, pId);


            // this.createElementFraudCountRoundInner(childId, grandchildId, iId);

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
            result = valueToString(fraudCountedRoundNumber) + variablesStatisticsFraud.statisticsFraudDisplaySpace;
        else
            result = fraudCountedRoundNumber;

        let elementId = variablesStatisticsFraud.fraudSumValueUpdatePerRoundPrefix + fraudRoundIndex;
        let text = variablesStatisticsFraud.statisticsFraudDisplaySpace + result;

        setElementTextById(elementId, text);
    }

    setStatisticFraudCountedSumValue(fraudCountedSumNumber) {
        // setElementTextById(variablesStatisticsFraud.statisticsFraudSumUpdateNumberDiv, fraudCountedSumNumber);
        setElementTextById(variablesStatisticsFraud.statisticsFraudSumDisplayValue, fraudCountedSumNumber);
    }

    removeContainerStatisticsFraud() {
        if (isElementsExistById(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts))
            removeElementById(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts);
    }
}

export default ViewStatisticsFraud