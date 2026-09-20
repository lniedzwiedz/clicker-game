import {
    createElementDiv
} from "../../common/function/commonFunctions.js";

import * as variablesMenu from "../../common/variable/menu/variablesMenuMain.js";

export class ViewMenuMain {

    createMenuMain() {

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