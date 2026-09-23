import {
    createElementButton,
    addElementClassNameById,
    createElementDiv
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonGameMain from "../../../common/variable/home/game/variablesButtonGameMain.js";


export class ViewButtonGameMain {

    createContainerButtonGame() {
        this.createContainerButtonCLickMain();
        this.createButtonCLick();
    }

    createContainerButtonCLickMain() {
        createElementDiv(
            variablesButtonGameMain.containerHomeMainParts,
            variablesButtonGameMain.containerButtonGameMain);
    }

    createButtonCLick() {
        this.createButtonCLickMain();
    }

    createButtonCLickMain() {

        createElementButton(
            variablesButtonGameMain.containerButtonGameMain,
            variablesButtonGameMain.buttonGameDisplayFlex
        );

        addElementClassNameById(
            variablesButtonGameMain.buttonGameDisplayFlex,
            variablesButtonGameMain.buttonGameStyle
        );
    }
}