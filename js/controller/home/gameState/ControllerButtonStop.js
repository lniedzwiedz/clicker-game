import {
    addEventListenerOnClickButton, isElementsExistById,
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

        if (isElementsExistById(variablesButtonStop.containerButtonStopMain)) {

            this.buttonClickEvent =
                addEventListenerOnClickButton(
                    variablesButtonStop.buttonStopDisplayFlex,
                    this.handleClickStop,
                    this
                );
        }
    }

    removeEventListenerOnClickButtonStop() {

        if (isElementsExistById(variablesButtonStop.containerButtonStopMain)) {

            removeEventListenerOnClickButton(
                variablesButtonStop.buttonStopDisplayFlex,
                this.buttonClickEvent
            );
        }


        this.buttonClickEvent = null;
    }

    setConfigurationIconStopBeforeClick() {
        this.viewButtonStop.setIconStopStyleBeforeClick();
        // ??
        this.viewButtonStop.removeButtonStopStyleInactive();
    }

    setConfigurationIconStopAfterClick() {
        this.viewButtonStop.setIconStopStyleAfterClick();
    }

    setConfigurationGameOver() {
        this.viewButtonStop.setIconStopStyleForGameOver();
    }
}