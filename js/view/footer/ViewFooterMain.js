import {
    createElementDiv,
} from "../../common/function/commonFunctions.js";

import * as variablesFooterMain from "../../common/variable/footer/variablesFooterMain.js";


export class ViewFooterMain {

    createContainerSectionFooterMain() {
        this.createContainerFooterMain();
        this.createContainerFooterMainParts();
    }

    createContainerFooterMain() {

        createElementDiv(
            variablesFooterMain.containerMainPartsId,
            variablesFooterMain.containerFooterMainId
        );
    }

    createContainerFooterMainParts() {
        createElementDiv(
            variablesFooterMain.containerFooterMainId,
            variablesFooterMain.containerFooterMainPartsId
        );
    }
}