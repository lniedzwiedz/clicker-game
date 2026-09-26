import {
    createElementDiv
} from "../common/function/commonFunctions.js";

import * as variablesPrimary from "../common/variable/variablesPrimary.js";


export class ViewPrimary {

    createContainerViewPrimary() {
        this.createContainerMainParts();
    }

    createContainerMainParts() {
        createElementDiv(
            variablesPrimary.containerMainId,
            variablesPrimary.containerMainPartsId
        );
    }
}