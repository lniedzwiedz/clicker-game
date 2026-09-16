import {
    createElementDiv
} from "../../common/function/commonFunctions.js";

import * as variablesMenu from "../../common/variable/menu/variablesMenu.js";

export class ViewMenu {

    createMenu() {
        this.createContainerMain();
    }

    createContainerMain() {

        createElementDiv(
            variablesMenu.containerMainParts,
            variablesMenu.containerMenuMain
        );

        createElementDiv(
            variablesMenu.containerMenuMain,
            variablesMenu.containerMenuMainParts
        );
    }
}