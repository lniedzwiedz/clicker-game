import {
    createElementDiv
} from "../../common/function/commonFunctions.js";

import * as variablesHome from "../../common/variable/home/variablesHome.js";


export class ViewHomeMain {

    createContainerSectionHomeMain() {
        this.createContainerHomeMain();
        this.createContainerHomeMainParts();
    }

    createContainerHomeMain() {
        createElementDiv(
            variablesHome.containerMainPartsId,
            variablesHome.containerHomeMainId
        );
    }

    createContainerHomeMainParts() {
        createElementDiv(
            variablesHome.containerHomeMainId,
            variablesHome.containerHomeMainPartsId
        );
    }
}