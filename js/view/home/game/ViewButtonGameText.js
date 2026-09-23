import {
    addElementClassNameById,
    createElementP, removeElementById,
    setElementTextById
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonGameText from "../../../common/variable/home/game/variablesButtonGameText.js";


export class ViewButtonGameText {

    createConfigurationButtonGameTextGameOver() {

        this.createButtonGameP();
        this.setButtonGameStyleTextGameOver();

        // this.setButtonGameText(
        //     variablesButtonGameText.buttonClickDisplayTextGameOver
        // );

        this.setButtonGameTextGameOver();
    }

    createButtonGameP() {

        createElementP(
            variablesButtonGameText.buttonClickDisplayFlex,
            variablesButtonGameText.buttonClickTextId
        );
    }

    setButtonGameTextGameOver() {
        this.setButtonGameText(
            variablesButtonGameText.buttonClickDisplayTextGameOver
        );
    }

    setButtonGameText(text) {

        setElementTextById(
            variablesButtonGameText.buttonClickTextId,
            text
        );
    }

    setButtonGameStyleTextGameOver() {

        addElementClassNameById(
            variablesButtonGameText.buttonClickTextId,
            variablesButtonGameText.buttonClickStyleTextGameOver
        );
    }

    removeConfigurationButtonGameTextGameOver() {

        removeElementById(
            variablesButtonGameText.buttonClickTextId
        );
    }
}