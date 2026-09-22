import {
    addElementClassNameById,
    createElementP, removeElementById,
    setElementTextById
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonClickText from "../../../common/variable/home/buttonClick/variablesButtonClickText.js";


export class ViewButtonClickText {

    createConfigurationButtonCLickTextGameOver() {

        this.createButtonClickP();
        this.setButtonClickStyleTextGameOver();

        this.setButtonClickText(
            variablesButtonClickText.buttonClickDisplayTextGameOver
        );
    }

    createButtonClickP() {

        createElementP(
            variablesButtonClickText.buttonClickDisplayFlex,
            variablesButtonClickText.buttonClickTextId
        );
    }

    setButtonClickText(text) {

        setElementTextById(
            variablesButtonClickText.buttonClickTextId,
            text
        );
    }

    setButtonClickStyleTextGameOver() {

        addElementClassNameById(
            variablesButtonClickText.buttonClickTextId,
            variablesButtonClickText.buttonClickStyleTextGameOver
        );
    }

    removeConfigurationButtonCLickTextGameOver() {

        removeElementById(
            variablesButtonClickText.buttonClickTextId
        );
    }
}