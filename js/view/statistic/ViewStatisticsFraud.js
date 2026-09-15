import {
    createElementDiv,
    createElementDivAnaDivChild,
    createElementDivWithIdAndSetClassName,
    createElementDivWithTheSameIdAndClassName,
    createElementI, createElementP, createElementPWithTheSameIdAndClassName,
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
    statisticsFraudCounterRoundDisplayFlexPrefix
} from "../../common/variable/statistic/variablesStatisticsFraud.js";


class ViewStatisticsFraud {

    createContainerStatisticsFraudSumMain() {
        createElementDivAnaDivChild(variablesStatisticsFraud.containerStatisticsFraudMainParts, variablesStatisticsFraud.containerStatisticsFraudSumMain, variablesStatisticsFraud.containerStatisticsFraudSumMainParts);
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
            variablesStatisticsFraud.containerStatisticsFraudSumDisplayValueUpdateMain,
        );

        createElementDivWithIdAndSetClassName(
            variablesStatisticsFraud.containerStatisticsFraudSumDisplayValueUpdateMain,
            variablesStatisticsFraud.containerStatisticsFraudSumDisplayValueUpdateMainParts,
        );

        createElementDivWithIdAndSetClassName(
            variablesStatisticsFraud.containerStatisticsFraudSumDisplayValueUpdateMainParts,
            variablesStatisticsFraud.statisticsFraudSumDisplayValueUpdateFlex,
            variablesStatisticsFraud.commonConfigurationFlex
        );

        createElementPWithTheSameIdAndClassName(
            variablesStatisticsFraud.statisticsFraudSumDisplayValueUpdateFlex,
            variablesStatisticsFraud.statisticsFraudSumDisplayValue
        );

        setElementTextById(
            variablesStatisticsFraud.statisticsFraudSumDisplayValue,
            variablesStatisticsFraud.statisticsFraudSumDisplayDefaultText
        );
    }

    createContainerStatisticsFraudSumIcons() {
        // this.createContainerStatisticsFraudMain(
        //     variablesStatisticsFraud.containerStatisticsFraudSumMainParts,
        //     variablesStatisticsFraud.containerStatisticsFraudSumDisplayIconsMain,
        //     variablesStatisticsTime.containerGameFiledCommonStaticText,
        //     variablesStatisticsFraud.statisticsFraudSumDisplayIconsFlex,
        //     variablesStatisticsTime.commonGameFiledDisplay
        // );

        createElementDivWithIdAndSetClassName(
            variablesStatisticsFraud.containerStatisticsFraudSumMainParts,
            variablesStatisticsFraud.containerStatisticsFraudSumDisplayIconsMain,
        );

        createElementDivWithIdAndSetClassName(
            variablesStatisticsFraud.containerStatisticsFraudSumDisplayIconsMain,
            variablesStatisticsFraud.containerStatisticsFraudSumDisplayIconsMainParts,
        );

        createElementDivWithIdAndSetClassName(
            variablesStatisticsFraud.containerStatisticsFraudSumDisplayIconsMainParts,
            variablesStatisticsFraud.statisticsFraudSumDisplayIconsFlex,
            variablesStatisticsFraud.commonConfigurationFlex
        );

        // createElementDiv(
        //     variablesStatisticsFraud.statisticsFraudSumDisplayIconsFlex,
        //     variablesStatisticsFraud.statisticsFraudSumIcons
        // );


        createElementI(variablesStatisticsFraud.statisticsFraudSumDisplayIconsFlex, variablesStatisticsFraud.statisticsFraudSumIconLeft, variablesStatisticsFraud.statisticsFraudSumIconStyleSolid, variablesStatisticsFraud.statisticsFraudSumIconGem);
        createElementI(variablesStatisticsFraud.statisticsFraudSumDisplayIconsFlex, variablesStatisticsFraud.statisticsFraudSumIconMiddle, variablesStatisticsFraud.statisticsFraudSumIconStyleSolid, variablesStatisticsFraud.statisticsFraudSumIconWhiskeyGlass);
        setElementClassNameById(variablesStatisticsFraud.statisticsFraudSumIconMiddle, variablesStatisticsFraud.statisticsFraudSumIconStyleWhiskeyGlassMain);
        createElementI(variablesStatisticsFraud.statisticsFraudSumDisplayIconsFlex, variablesStatisticsFraud.statisticsFraudSumIconRight, variablesStatisticsFraud.statisticsFraudSumIconStyleSolid, variablesStatisticsFraud.statisticsFraudSumIconGem);
    }

    createContainerStatisticsFraudSum() {
        this.createContainerStatisticsFraudSumMain();
        this.createContainerStatisticsFraudSumUpdate()
        this.createContainerStatisticsFraudSumIcons();
    }

    // ???????????????????

    createContainerStatisticsFraudRoundNumberUpdate() {
        createElementDivWithTheSameIdAndClassName(
            variablesStatisticsFraud.containerStatisticsFraudMainParts,
            variablesStatisticsFraud.containerStatisticsFraudCounterMain
        );

        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudCounterMain,
            variablesStatisticsFraud.containerStatisticsFraudCounterMainParts
        );

       // round number --------------------------------------------------------------
        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudCounterMainParts,
            variablesStatisticsFraud.containerStatisticsFraudCounterRoundMain
        );

        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudCounterRoundMain,
            variablesStatisticsFraud.containerStatisticsFraudCounterRoundMainParts
        );




        // counter name --------------------------------------------------------------
        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudCounterMainParts,
            variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayValueMain
        );

        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayValueMain,
            variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayValueMainParts
        );

        createElementDivWithTheSameIdAndClassName(
            variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayValueMainParts,
            variablesStatisticsFraud.statisticsFraudCounterNameDisplayValueFlex
        );

        setElementClassNameById(
            variablesStatisticsFraud.statisticsFraudCounterNameDisplayValueFlex,
            variablesStatisticsFraud.commonConfigurationFlex
        );

        createElementPWithTheSameIdAndClassName(
            variablesStatisticsFraud.statisticsFraudCounterNameDisplayValueFlex,
            variablesStatisticsFraud.statisticsFraudCounterNameDisplayValue
        );

        setElementTextById(
            variablesStatisticsFraud.statisticsFraudCounterNameDisplayValue,
            variablesStatisticsFraud.statisticsFraudCounterNameDisplayName
        );
    }

    createGameFieldStatisticsFraud(maxClicksNumber) {
        createElementDivWithTheSameIdAndClassName(variablesStatisticsFraud.containerStatisticsFraudMain, variablesStatisticsFraud.containerStatisticsFraudMainParts);
        this.createContainerStatisticsFraudSum();
        this.createContainerStatisticsFraudRoundNumberUpdate();
        this.createContainerStatisticsFraudRoundNumberUpdateValue(maxClicksNumber);
    }

    createElementFraudCountRoundInner(parentId, childId, iId, pId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(childId, variablesStatisticsFraud.commonConfigurationFlex);
        // setElementClassNameById(childId, variablesStatisticsTime.commonStaticText);
        // setElementClassNameById(childId, variablesStatisticsFraud.fraudCountRoundCommon);

        createElementI(childId, iId, variablesStatisticsFraud.statisticsFraudSumIconStyleSolid, variablesStatisticsFraud.statisticsFraudSumIconWhiskeyGlass);
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

        // let parentId = variablesStatisticsFraud.containerStatisticsFraudCounterRoundMain;
        let parentId = variablesStatisticsFraud.containerStatisticsFraudCounterRoundMainParts;
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

            let childId = variablesStatisticsFraud.statisticsFraudCounterRoundNumberMainPrefix + valueToString(i);
            this.createElementFraudCountRoundMain(parentId, childId);

            let gridTemplateRowsChild = "1fr";
            let gridTemplateColumnsChild = "1fr";
            setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);

            // let grandchildId = variablesStatisticsFraud.fraudSumValueUpdatePerRoundPrefix + valueToString(i);
            let grandchildId = variablesStatisticsFraud.statisticsFraudCounterRoundDisplayFlexPrefix + valueToString(i);


            let iId = variablesStatisticsFraud.statisticsFraudIconWhiskeyGlassPrefix + valueToString(i);
            let pId = variablesStatisticsFraud.statisticsFraudCounterRoundDisplaySum + valueToString(i);
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

        let elementId = variablesStatisticsFraud.statisticsFraudCounterRoundDisplaySum + fraudRoundIndex;
        let text = variablesStatisticsFraud.statisticsFraudDisplaySpace + result;

        setElementTextById(elementId, text);
    }

    setStatisticFraudCountedSumValue(fraudCountedSumNumber) {
        // setElementTextById(variablesStatisticsFraud.statisticsFraudSumUpdateNumberDiv, fraudCountedSumNumber);
        setElementTextById(variablesStatisticsFraud.statisticsFraudSumDisplayValue, fraudCountedSumNumber);
    }

    removeContainerStatisticsFraud() {
        if (isElementsExistById(variablesStatisticsFraud.containerStatisticsFraudMainParts))
            removeElementById(variablesStatisticsFraud.containerStatisticsFraudMainParts);
    }
}

export default ViewStatisticsFraud