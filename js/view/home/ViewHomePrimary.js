import {
    createElementDiv
} from "../../common/function/commonFunctions.js";

import * as variablesHomePrimary from "../../common/variable/home/variablesHomePrimary.js";


export class ViewHomePrimary {

    createContainerHomePrimary() {
        this.createContainerHomeMain();
        this.createContainerHomeMainParts();
    }

    createContainerHomeMain() {
        createElementDiv(
            variablesHomePrimary.containerMainPartsId,
            variablesHomePrimary.containerHomeMainId
        );
    }

    createContainerHomeMainParts() {
        createElementDiv(
            variablesHomePrimary.containerHomeMainId,
            variablesHomePrimary.containerHomeMainPartsId
        );
    }
}