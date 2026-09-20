import {
    createElementButton,
    setElementClassNameById,
    setElementTextById,
    removeElementClassNameById,
    createElementDiv
} from "../../../common/function/commonFunctions.js";

import * as variablesMain from "../../../common/variable/variablesMain.js";
import * as variablesButtonClickColor from "../../../common/variable/home/buttonClick/variablesButtonClick.js";


export class ViewButtonClick {

    createButtonCLickColor() {
        this.createContainerButtonCLickMain();
        this.createContainerButtonCLickMainParts();
    }

    createContainerButtonCLickMain() {
        createElementDiv(variablesButtonClickColor.containerHomeMainParts, variablesButtonClickColor.containerButtonClickMain);
    }

    createContainerButtonCLickMainParts() {
        createElementButton(variablesButtonClickColor.containerButtonClickMain, variablesButtonClickColor.buttonClickDisplayFlex);
        setElementClassNameById(variablesButtonClickColor.buttonClickDisplayFlex, variablesButtonClickColor.buttonClickDisplayFlex);
    }

    setButtonClickColorRandomColor(gameRandomColor) {
        variablesMain.rootVariables.style.setProperty(variablesMain.cssGameFiledButtonPlayColor, gameRandomColor);
    }

    setButtonClickColorAtStart() {
        this.setButtonClickColorRandomColor(variablesMain.gameFiledButtonPlayStartColor);
    }

    setConfigurationGameOver() {
        setElementTextById(variablesButtonClickColor.buttonClickDisplayFlex, variablesButtonClickColor.buttonClickDisplayTextGameOver);
        setElementClassNameById(variablesButtonClickColor.buttonClickDisplayFlex, variablesButtonClickColor.buttonClickStyleGameOver);
    }

    removeConfigurationGameOver() {
        setElementTextById(variablesButtonClickColor.buttonClickDisplayFlex, "");
        removeElementClassNameById(variablesButtonClickColor.buttonClickDisplayFlex, variablesButtonClickColor.buttonClickStyleGameOver);
    }
}