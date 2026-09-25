import {
    createElementDiv
} from "../common/function/commonFunctions.js";

import * as variablesMain from "../common/variable/variablesPrimary.js";


export class ViewPrimary {

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