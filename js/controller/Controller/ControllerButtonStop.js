import {
    addEventListenerOnClickButton,
    removeEventListenerOnClickButton
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameState.js";

export class ControllerButtonStop {

    constructor(viewButtonStop, actionButtonStop) {
        this.viewButtonStop = viewButtonStop;
        this.actionButtonStop = actionButtonStop;
        this.onStop = null;
        this.buttonClickEvent = null;
    }

    createButtonStop() {
        this.viewButtonStop.createContainerButtonStopMain();
        this.configureButtonStop();
    }

    setOnStop(onStop) {
        this.onStop = onStop;
    }

    handleClickStop() {
        if (this.onStop) {
            this.onStop();
        }
    }

    configureButtonStop() {
        this.buttonClickEvent =
            addEventListenerOnClickButton(
                variablesGameButtons.buttonStop,
                this.handleClickStop,
                this
            );
    }

    removeEventListenerOnClickButtonStop() {

        removeEventListenerOnClickButton(
            variablesGameButtons.buttonStop,
            this.buttonClickEvent
        );

        this.buttonClickEvent = null;
    }

    setConfigurationBeforeClick() {
        this.viewButtonStop.setIconColorBeforeClick();
        this.viewButtonStop.removeConfigurationButtonStop();
    }

    setConfigurationAfterClick() {
        this.viewButtonStop.setIconColorAfterClick();
    }

    setConfigurationGameOver() {
        this.viewButtonStop.setConfigurationGameOver();
    }
}