import {
    addEventListenerOnClickButton,
    removeEventListenerOnClickButton
} from "../../common/function/commonFunctions.js";

import * as variablesButton from "../../common/variable/control/variablesGameState.js";

export class ControllerButtonClickColor {

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
                // to do - fix variable - line 34 + 45
                variablesButton.buttonClickColorDiv,
                this.setConfiguration,
                this
            );
    }

    removeEventListenerOnClickButtonClickColor() {

        removeEventListenerOnClickButton(
            // to do - fix variable - line 34 + 45
            variablesButton.buttonClickColorDiv,
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