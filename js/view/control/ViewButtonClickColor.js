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
        createElementButton(variablesButtonClickColor.containerButtonClickColorMain, variablesButtonClickColor.buttonClickColorDisplayFlex);
        setElementClassNameById(variablesButtonClickColor.buttonClickColorDisplayFlex, variablesButtonClickColor.buttonClickColorDisplayFlex);
    }

    setButtonClickColorRandomColor(gameRandomColor) {
        variablesMain.rootVariables.style.setProperty(variablesMain.cssGameFiledButtonPlayColor, gameRandomColor);
    }

    setButtonClickColorAtStart() {
        this.setButtonClickColorRandomColor(variablesMain.gameFiledButtonPlayStartColor);
    }

    setConfigurationGameOver() {
        setElementTextById(variablesButtonClickColor.buttonClickColorDisplayFlex, variablesButtonClickColor.buttonClickColorDisplayTextGameOver);
        setElementClassNameById(variablesButtonClickColor.buttonClickColorDisplayFlex, variablesButtonClickColor.buttonClickColorStyleGameOver);
    }

    removeConfigurationGameOver() {
        setElementTextById(variablesButtonClickColor.buttonClickColorDisplayFlex, "");
        removeElementClassNameById(variablesButtonClickColor.buttonClickColorDisplayFlex, variablesButtonClickColor.buttonClickColorStyleGameOver);
    }
}