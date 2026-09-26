import {
    createElementDiv,
} from "../../common/function/commonFunctions.js";

import * as variablesFooterPrimary from "../../common/variable/footer/variablesFooterPrimary.js";


export class ViewFooterPrimary {

    createContainerFooterPrimary() {
        this.createContainerFooterMain();
        this.createContainerFooterMainParts();
    }

    createContainerFooterMain() {
        createElementDiv(
            variablesFooterPrimary.containerMainPartsId,
            variablesFooterPrimary.containerFooterMainId
        );
    }

    createContainerFooterMainParts() {
        createElementDiv(
            variablesFooterPrimary.containerFooterMainId,
            variablesFooterPrimary.containerFooterMainPartsId
        );
    }
}