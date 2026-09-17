import {ViewButtons} from "./ViewButtons.js";

import {
    createElementButton,
    setElementClassNameById,
    setElementTextById,
    removeElementClassNameById,
    createElementDiv
} from "../../common/function/commonFunctions.js";

import * as variablesMain from "../../common/variable/main/variablesMain.js";
import * as variablesButtonClickColor from "../../common/variable/control/variablesButtonClickColor.js";


export class ViewButtonClickColor extends ViewButtons {

    createButton() {
        this.createContainerMain();
        this.createContainerParts();
    }

    createContainerMain() {
        createElementDiv(variablesButtonClickColor.containerHomeMainParts, variablesButtonClickColor.containerButtonClickColorMain);
    }

    // createContainerMain() {
    //     createElementDiv(containerButtonStartAndStopMain, variablesButtonClickColor.containerButtonStartAndStopMainParts);
    // }

    createContainerParts() {
        createElementButton(variablesButtonClickColor.containerButtonClickColorMain, variablesButtonClickColor.buttonClickColorDiv);
        setElementClassNameById(variablesButtonClickColor.buttonClickColorDiv, variablesButtonClickColor.buttonClickColorDiv);
    }

    setButtonClickColorRandomColor(gameRandomColor) {
        variablesMain.rootVariables.style.setProperty(variablesMain.cssGameFiledButtonPlayColor, gameRandomColor);
    }

    setButtonClickColorAtStart() {
        this.setButtonClickColorRandomColor(variablesMain.gameFiledButtonPlayStartColor);
    }

    setConfigurationGameOver() {
        setElementTextById(variablesButtonClickColor.buttonClickColorDiv, variablesButtonClickColor.buttonClickColorGameOverTextDisplay);
        setElementClassNameById(variablesButtonClickColor.buttonClickColorDiv, variablesButtonClickColor.buttonClickColorGameOver);
    }

    removeConfigurationGameOver() {
        setElementTextById(variablesButtonClickColor.buttonClickColorDiv, "");
        removeElementClassNameById(variablesButtonClickColor.buttonClickColorDiv, variablesButtonClickColor.buttonClickColorGameOver);
    }
}