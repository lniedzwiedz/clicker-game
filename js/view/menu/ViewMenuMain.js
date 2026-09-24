import {
    createElementDiv
} from "../../common/function/commonFunctions.js";

import * as variablesMenu from "../../common/variable/menu/variablesMenuMain.js";


export class ViewMenuMain {

    createContainerSectionMenuMain() {
        this.createContainerMenuMain();
        this.createContainerMenuMainParts();
    }

    createContainerMenuMain() {

        createElementDiv(
            variablesMenu.containerMainPartsId,
            variablesMenu.containerMenuMainId
        );
    }

    createContainerMenuMainParts() {

        createElementDiv(
            variablesMenu.containerMenuMainId,
            variablesMenu.containerMenuMainPartsId
        );
    }
}