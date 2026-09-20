import {
    addEventListenerOnClickButton,
    removeEventListenerOnClickButton
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonClickColor from "../../../common/variable/home/buttonClick/variablesButtonClick.js";


export class ControllerButtonClick {

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
                variablesButtonClickColor.buttonClickDisplayFlex,
                this.setConfiguration,
                this
            );
    }

    removeEventListenerOnClickButtonClickColor() {

        removeEventListenerOnClickButton(
            variablesButtonClickColor.buttonClickDisplayFlex,
            this.buttonClickEvent
        );

        this.buttonClickEvent = null;
    }

    configureClickColorGameOver() {
        this.viewButtonClickColor.setConfigurationGameOver();
    }

    setButtonClickColorAtStart() {
        this.viewButtonClickColor.setButtonClickColorAtStart();
    }

    setButtonClickColorRandomColor(gameRandomColor) {
        this.viewButtonClickColor.setButtonClickColorRandomColor(gameRandomColor);
    }

    removeConfigurationGameOver() {
        this.viewButtonClickColor.removeConfigurationGameOver();
    }
}