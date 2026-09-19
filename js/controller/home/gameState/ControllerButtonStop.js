import {
    addEventListenerOnClickButton,
    removeEventListenerOnClickButton
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonStop from "../../../common/variable/home/gameState/variablesButtonStop.js";


export class ControllerButtonStop {

    constructor(viewButtonStop, actionButtonStop) {
        this.viewButtonStop = viewButtonStop;
        this.actionButtonStop = actionButtonStop;
        this.onStop = null;
        this.buttonClickEvent = null;
    }

    createButtonStop() {
        this.viewButtonStop.createContainerButtonStop();
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
                variablesButtonStop.buttonStopDisplayFlex,
                this.handleClickStop,
                this
            );
    }

    removeEventListenerOnClickButtonStop() {

        removeEventListenerOnClickButton(
            variablesButtonStop.buttonStopDisplayFlex,
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