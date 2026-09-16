import {
    createContainerMainElements,
    createElementDiv,
    createElementDivWithTheSameIdAndClassName
} from "../common/function/commonFunctions.js";

import * as variablesMain from "../common/variable/main/variablesMain.js";
import * as variablesButton from "../common/variable/control/variablesButton.js";
import * as variablesStatisticsTime from "../common/variable/statistic/variablesStatisticsTime.js";
import * as variablesFooter from "../common/variable/footer/variablesFooter.js";

export class ViewMain {

    createContainerSectionMain() {

        createElementDiv(
            variablesMain.containerMain,
            variablesMain.containerMainParts
        );

        createElementDiv(
            variablesMain.containerMain,
            variablesMain.containerHomeMain
        );

        createElementDiv(
            variablesMain.containerMain,
            variablesFooter.containerSectionFooterMain
        );
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
        createContainerMainElements(
            variablesMain.containerHomeMain,
            variablesMain.sectionHome,
            variablesMain.containerHomeMainParts,
            variablesMain.containerGameMain
        );
    }

    createContainerHomeMainParts() {
        createElementDivWithTheSameIdAndClassName(
            variablesMain.containerGameMain,
            variablesMain.containerGameMainParts
        );

        createElementDivWithTheSameIdAndClassName(
            variablesMain.containerGameMainParts,
            variablesButton.containerButtonClickColorMain
        );

        createElementDivWithTheSameIdAndClassName(
            variablesMain.containerGameMainParts,
            variablesButton.containerButtonStartAndStopMain
        );

        createElementDivWithTheSameIdAndClassName(
            variablesMain.containerGameMainParts,
            variablesStatisticsTime.containerGameFiledStatisticsTime
        );
    }
}