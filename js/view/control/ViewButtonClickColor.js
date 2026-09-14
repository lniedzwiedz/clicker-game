import {ViewButtons} from "./ViewButtons.js";

import {
    createElementDiv,
    createElementButton,
    setElementClassNameById,
    setElementTextById,
    removeElementClassNameById
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesButton.js";
import * as variablesMain from "../../common/variable/main/variablesMain.js";


export class ViewButtonClickColor extends ViewButtons {

    createButton() {
        this.createContainerMain();
        this.createContainerParts();
    }

    createContainerMain() {
        createElementDiv(variablesGameButtons.containerButtonStartAndStopMain, variablesGameButtons.containerButtonStartAndStopMainParts);
    }

    createContainerParts() {
        createElementButton(variablesGameButtons.containerButtonClickColorMain, variablesGameButtons.buttonClickColorDiv);
        setElementClassNameById(variablesGameButtons.buttonClickColorDiv, variablesGameButtons.buttonClickColorDiv);
    }

    setButtonClickColorRandomColor(gameRandomColor) {
        variablesMain.rootVariables.style.setProperty(variablesMain.cssGameFiledButtonPlayColor, gameRandomColor);
    }

    setButtonClickColorAtStart() {
        this.setButtonClickColorRandomColor(variablesMain.gameFiledButtonPlayStartColor);
    }

    setConfigurationGameOver() {
        setElementTextById(variablesGameButtons.buttonClickColorDiv, variablesGameButtons.buttonClickColorGameOverTextDisplay);
        setElementClassNameById(variablesGameButtons.buttonClickColorDiv, variablesGameButtons.buttonClickColorGameOver);
    }

    removeConfigurationGameOver() {
        setElementTextById(variablesGameButtons.buttonClickColorDiv, "");
        removeElementClassNameById(variablesGameButtons.buttonClickColorDiv, variablesGameButtons.buttonClickColorGameOver);
    }
}