import {
    createElementButton,
    createElementDiv,
    addElementClassNames
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonGameMain from "../../../common/variable/home/game/variablesButtonGameMain.js";


export class ViewButtonGameMain {

    createContainerButtonGame() {
        this.createContainerButtonGameMain();
        this.createButtonGame();
    }

    createContainerButtonGameMain() {
        createElementDiv(
            variablesButtonGameMain.containerHomeMainPartsId,
            variablesButtonGameMain.containerButtonGameMainId
        );
    }

    createButtonGame() {
        this.createButtonGameMain();
    }

    createButtonGameMain() {

        createElementButton(
            variablesButtonGameMain.containerButtonGameMainId,
            variablesButtonGameMain.buttonGameId
        );

        addElementClassNames(
            variablesButtonGameMain.buttonGameId,
            variablesButtonGameMain.buttonGameStyleDisplayFlex,
            variablesButtonGameMain.buttonGameStyle
        );
    }
}