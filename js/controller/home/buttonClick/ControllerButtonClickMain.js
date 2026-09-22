import {
    addEventListenerOnClickButton,
    removeEventListenerOnClickButton
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonClick from "../../../common/variable/home/buttonClick/variablesButtonClickMain.js";


export class ControllerButtonClickMain {

    constructor(viewButtonClickColor, actionButtonClickColor) {
        this.viewButtonClickColor = viewButtonClickColor;
        this.actionButtonClickColor = actionButtonClickColor;
        this.onClickColor = null;
        this.buttonClickEvent = null;
    }

    setOnClickColor(onClickColor) {
        this.onClickColor = onClickColor;
    }

    createGameButtonsView() {
        this.viewButtonClickColor.createButtonCLickColor();
    }

    setConfiguration(event) {
        if (this.onClickColor) {
            this.onClickColor();
        }
    }

    configureButtonClickColor() {
        this.buttonClickEvent =
            addEventListenerOnClickButton(
                variablesButtonClick.buttonClickDisplayFlex,
                this.setConfiguration,
                this
            );
    }

    removeEventListenerOnClickButtonClickColor() {

        removeEventListenerOnClickButton(
            variablesButtonClick.buttonClickDisplayFlex,
            this.buttonClickEvent
        );

        this.buttonClickEvent = null;
    }

    // configureClickColorGameOver() {
    //     this.viewButtonClickColor.setConfigurationButtonClickGameOver();
    // }

    setButtonClickColor() {
        this.viewButtonClickColor.setButtonClickColor();
    }

    setButtonClickColorRandomColor(gameRandomColor) {
        this.viewButtonClickColor.setButtonClickColorRandomColor(gameRandomColor);
    }

    removeConfigurationGameOver() {
        this.viewButtonClickColor.removeConfigurationGameOver();
    }
}