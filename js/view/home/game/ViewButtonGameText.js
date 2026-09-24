import {
    addElementClassNameById,
    createElementP,
    isElementsExistById,
    removeElementById,
    setElementTextById
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonGameText from "../../../common/variable/home/game/variablesButtonGameText.js";


export class ViewButtonGameText {

    createConfigurationButtonGameTextStopped() {
        this.createButtonGameP();
        this.setButtonGameTextGameStopped();
        this.setButtonGameStyleTextGameStopped();
    }

    setButtonGameTextGameStopped() {
        this.setButtonGameText(
            variablesButtonGameText.buttonGameTextGameStopped
        );
    }

    setButtonGameStyleTextGameStopped() {

        addElementClassNameById(
            variablesButtonGameText.buttonGameTextId,
            variablesButtonGameText.buttonGameStyleTextGameStopped
        );
    }

    createConfigurationButtonGameTextGameOver() {
        this.createButtonGameP();
        this.setButtonGameStyleTextGameOver();
        this.setButtonGameTextGameOver();
    }

    setButtonGameTextGameOver() {
        this.setButtonGameText(
            variablesButtonGameText.buttonGameTextGameOver
        );
    }

    setButtonGameStyleTextGameOver() {

        addElementClassNameById(
            variablesButtonGameText.buttonGameTextId,
            variablesButtonGameText.buttonGameStyleTextGameOver
        );
    }

    removeConfigurationButtonGameText() {

        if (isElementsExistById(variablesButtonGameText.buttonGameTextId)) {
            removeElementById(
                variablesButtonGameText.buttonGameTextId
            );
        }
    }

    createButtonGameP() {

        createElementP(
            variablesButtonGameText.buttonGameId,
            variablesButtonGameText.buttonGameTextId
        );
    }

    setButtonGameText(text) {

        setElementTextById(
            variablesButtonGameText.buttonGameTextId,
            text
        );
    }

}