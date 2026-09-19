import {
    createElementButton,
    setElementClassNameById,
    setElementTextById,
    removeElementClassNameById,
    createElementDiv
} from "../../../common/function/commonFunctions.js";

import * as variablesMain from "../../../common/variable/variablesMain.js";
import * as variablesButtonClickColor from "../../../common/variable/home/play/variablesButtonClickColor.js";


export class ViewButtonClickColor {

    createButtonCLickColor() {
        this.createContainerMain();
        this.createContainerParts();
    }

    createContainerMain() {
        createElementDiv(variablesButtonClickColor.containerHomeMainParts, variablesButtonClickColor.containerButtonClickColorMain);
    }

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