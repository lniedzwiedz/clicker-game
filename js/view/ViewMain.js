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
        createElementDiv(variablesMain.containerMainParts, variablesMain.containerMenuMain);
        createElementDiv(variablesMain.containerMainParts, variablesMain.containerActionsMain);
        createElementDiv(variablesMain.containerMainParts, variablesMain.containerFooterMain);
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
        createContainerMainElements(variablesMain.containerActionsMain, variablesMain.sectionHome, variablesMain.containerHomeMainParts, variablesMain.containerGameMain);
    }

    createContainerHomeMainParts() {
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameMain, variablesMain.containerGameMainParts);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameMainParts, variablesButton.containerButtonClickColorMain);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameMainParts, variablesButton.containerButtonStartAndStopMain);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameMainParts, variablesStatisticsTime.containerGameFiledStatisticsTime);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameMainParts, variablesStatisticsFraud.containerGameFiledStatisticsFraud);
    }
}