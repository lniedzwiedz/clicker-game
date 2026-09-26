import {
    createElementDiv
} from "../../common/function/commonFunctions.js";

import * as variablesMenuPrimary from "../../common/variable/menu/variablesMenuPrimary.js";


export class ViewMenuPrimary {

    createContainerMenuPrimary() {
        this.createContainerMenuMain();
        this.createContainerMenuMainParts();
    }

    createContainerMenuMain() {
        createElementDiv(
            variablesMenuPrimary.containerMainPartsId,
            variablesMenuPrimary.containerMenuMainId
        );
    }

    createContainerMenuMainParts() {
        createElementDiv(
            variablesMenuPrimary.containerMenuMainId,
            variablesMenuPrimary.containerMenuMainPartsId
        );
    }
}