import {
    createElementDiv,
} from "../../common/function/commonFunctions.js";

import * as variablesFooterPrimary from "../../common/variable/footer/variablesFooterPrimary.js";


export class ViewFooterPrimary {

    createContainerSectionFooterPrimary() {
        this.createContainerSectionFooterMain();
        this.createContainerSectionFooterMainParts();
    }

    createContainerSectionFooterMain() {

        createElementDiv(
            variablesFooterPrimary.containerMainPartsId,
            variablesFooterPrimary.containerFooterMainId
        );
    }

    createContainerSectionFooterMainParts() {
        createElementDiv(
            variablesFooterPrimary.containerFooterMainId,
            variablesFooterPrimary.containerFooterMainPartsId
        );
    }
}