import {
    createElementDiv
} from "../../common/function/commonFunctions.js";

import * as variablesHome from "../../common/variable/home/variablesHome.js";


export class ViewHomeMain {

    createHomeMain() {
        this.createContainerHomeMain();
        this.createContainerHomeParts();
    }

    createContainerHomeMain() {
        createElementDiv(
            variablesHome.containerMainParts,
            variablesHome.containerHomeMain
        );
    }

    createContainerHomeParts() {
        createElementDiv(
            variablesHome.containerHomeMain,
            variablesHome.containerHomeMainParts
        );
    }
}