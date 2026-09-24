import {
    createElementDiv
} from "../common/function/commonFunctions.js";

import * as variablesMain from "../common/variable/variablesMain.js";


export class ViewMain {

    createMain() {
        this.createContainerMainParts();
    }

    createContainerMainParts() {

        createElementDiv(
            variablesMain.containerMainId,
            variablesMain.containerMainPartsId
        );
    }
}