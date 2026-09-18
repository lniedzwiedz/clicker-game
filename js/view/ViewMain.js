import {
    createElementDiv
} from "../common/function/commonFunctions.js";

import * as variablesMain from "../common/variable/main/variablesMain.js";
import * as variablesFooter from "../common/variable/footer/variablesFooter.js";


export class ViewMain {

    createContainerMainSection() {
        this.createContainerHomeMain();
        this.createContainerHomeMainParts();
    }

    createContainerHomeMain() {

        createElementDiv(
            variablesMain.containerMain,
            variablesMain.containerMainParts
        );

        // to do - remove - move to home Main
        createElementDiv(
            variablesMain.containerMainParts,
            variablesMain.containerHomeMain
        );

        // to do - remove - move to footer
        createElementDiv(
            variablesMain.containerMain,
            variablesFooter.containerSectionFooterMain
        );
    }

    createContainerHomeMainParts() {

        createElementDiv(
            variablesMain.containerHomeMain,
            variablesMain.containerHomeMainParts,
        );
    }
}