import {
    createElementButton,
    addElementClassNameById,
    createElementDiv, removeElementClassNameById, addElementClassNames
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonGameMain from "../../../common/variable/home/game/variablesButtonGameMain.js";


export class ViewButtonGameMain {

    createContainerButtonGame() {
        this.createContainerButtonGameMain();
        this.createButtonGame();
    }

    createContainerButtonGameMain() {
        createElementDiv(
            variablesButtonGameMain.containerHomeMainParts,
            variablesButtonGameMain.containerButtonGameMain);
    }

    createButtonGame() {
        this.createButtonGameMain();
    }

    createButtonGameMain() {

        createElementButton(
            variablesButtonGameMain.containerButtonGameMain,
            variablesButtonGameMain.buttonGameDisplayFlex
        );

        addElementClassNameById(
            variablesButtonGameMain.buttonGameDisplayFlex,
            variablesButtonGameMain.buttonGameStyle
        );
    }

    // setButtonGameStyleGameOver() {
    //
    //     addElementClassNameById(
    //         variablesButtonGameMain.buttonGameDisplayFlex,
    //         variablesButtonGameMain.buttonGameStyleGameOver
    //     );
    // }
    //
    // removeButtonGameStyleGameOver() {
    //
    //     removeElementClassNameById(
    //         variablesButtonGameMain.buttonGameDisplayFlex,
    //         variablesButtonGameMain.buttonGameStyleGameOver
    //     );
    // }
}