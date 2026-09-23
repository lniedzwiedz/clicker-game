import {
    addElementClassNameById,
    createElementP,
    isElementsExistById,
    removeElementById,
    setElementTextById
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonGameText from "../../../common/variable/home/game/variablesButtonGameText.js";


export class ViewButtonGameText {

    createConfigurationButtonGameTextGameOver() {
        this.createButtonGameP();
        this.setButtonGameStyleTextGameOver();
        this.setButtonGameTextGameOver();
    }

    createButtonGameP() {

        createElementP(
            variablesButtonGameText.buttonClickDisplayFlex,
            variablesButtonGameText.buttonGameTextId
        );
    }

    setButtonGameTextGameOver() {
        this.setButtonGameText(
            variablesButtonGameText.buttonGameDisplayTextGameOver
        );
    }

    setButtonGameText(text) {

        setElementTextById(
            variablesButtonGameText.buttonGameTextId,
            text
        );
    }

    setButtonGameStyleTextGameOver() {

        addElementClassNameById(
            variablesButtonGameText.buttonGameTextId,
            variablesButtonGameText.buttonGameStyleTextGameOver
        );
    }

    removeConfigurationButtonGameTextGameOver() {

        if (isElementsExistById(variablesButtonGameText.buttonGameTextId)) {
            removeElementById(
                variablesButtonGameText.buttonGameTextId
            );
        }
    }
}