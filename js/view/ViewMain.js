import {
    createContainerMainElements,
    createElementDiv,
    createElementDivWithTheSameIdAndClassName
} from "../common/function/commonFunctions.js";

import * as variablesMain from "../common/variable/main/variablesMain.js";
import * as variablesButton from "../common/variable/control/variablesButton.js";
import * as variablesStatisticsTime from "../common/variable/statistic/variablesStatisticsTime.js";
import * as variablesStatisticsFraud from "../common/variable/statistic/variablesStatisticsFraud.js";

export class ViewMain {

    createContainerSectionMain() {
        createElementDiv(variablesMain.containerMain, variablesMain.containerMainSectionMenu);
        createElementDiv(variablesMain.containerMain, variablesMain.containerMainSectionActions);
        createElementDiv(variablesMain.containerMain, variablesMain.containerMainSectionFooter);
    }

    createContainerMainSection() {
        this.createContainerSectionMain();
        this.createContainerHome();
    }

    createContainerHome() {
        this.createContainerHomeMain();
        this.createContainerHomeMainParts();
    }

    createContainerHomeMain() {
        createContainerMainElements(variablesMain.containerMainSectionActions, variablesMain.sectionHome, variablesMain.containerMainSectionHome, variablesMain.containerMainHome);
    }

    createContainerHomeMainParts() {
        createElementDivWithTheSameIdAndClassName(variablesMain.containerMainHome, variablesMain.containerGameElements);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameElements, variablesButton.containerButtonClickColorMain);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameElements, variablesButton.containerButtonStartAndStopMain);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameElements, variablesStatisticsTime.containerGameFiledStatisticsTime);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameElements, variablesStatisticsFraud.containerGameFiledStatisticsFraud);
    }
}