import {
    createElementDiv,
} from "../../common/function/commonFunctions.js";

import * as variablesFooterMain from "../../common/variable/footer/variablesFooterMain.js";


export class ViewFooterMain {

    createFooterMain() {
        this.createContainerFooterMain();
        this.createContainerFooterMainParts();
    }

    createContainerFooterMain() {

        createElementDiv(
            variablesFooterMain.containerMainParts,
            variablesFooterMain.containerFooterMain
        );
    }

    createContainerFooterMainParts(){
        createElementDiv(
            variablesFooterMain.containerFooterMain,
            variablesFooterMain.containerFooterMainParts
        );
    }
}