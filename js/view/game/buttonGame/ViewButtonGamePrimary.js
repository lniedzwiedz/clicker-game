import {
    createElementButton,
    createElementDiv,
    addElementClassNames
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonGameMain from "../../../common/variable/game/buttonGame/variablesButtonGamePrimary.js";


export class ViewButtonGamePrimary {

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