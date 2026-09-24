import {
    addEventListenerOnClickButton,
    isElementsExistById,
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
        this.createContainerButtonStop();
        this.addClickStopListener();
    }

    createContainerButtonStop() {
        this.viewButtonStop.createContainerButtonStop();
    }

    setOnStop(onStop) {
        this.onStop = onStop;
    }

    handleClickStop() {
        if (this.onStop) {
            this.onStop();
        }
    }

    addClickStopListener() {

        if (isElementsExistById(variablesButtonStop.containerButtonStopMainId)) {

            this.buttonClickEvent =
                addEventListenerOnClickButton(
                    variablesButtonStop.buttonStopId,
                    this.handleClickStop,
                    this
                );
        }
    }

    removeClickStopListener() {

        if (isElementsExistById(variablesButtonStop.containerButtonStopMainId)) {

            removeEventListenerOnClickButton(
                variablesButtonStop.buttonStopId,
                this.buttonClickEvent
            );

            this.buttonClickEvent = null;
        }
    }

    setConfigurationButtonStopAfterClickButtonStart() {
        this.setConfigurationIconStopBeforeClick();
        this.removeButtonStopStyleInactive();
    }

    setConfigurationIconStopBeforeClick() {
        this.viewButtonStop.setIconStopStyleBeforeClick();
    }

    removeButtonStopStyleInactive() {
        this.viewButtonStop.removeButtonStopStyleInactive();
    }

    setConfigurationButtonStopAfterClickButtonStop() {
        this.setConfigurationIconStopAfterClick();
        this.removeClickStopListener();

    }

    setConfigurationIconStopAfterClick() {
        this.viewButtonStop.setIconStopStyleAfterClick();
    }

    setConfigurationButtonStopForGameOver() {
        this.setIconStopStyleForGameOver();
        this.setButtonStopStyleInactive();
        this.removeClickStopListener();
    }

    setIconStopStyleForGameOver() {
        this.viewButtonStop.setIconStopStyleForGameOver();
    }

    setButtonStopStyleInactive() {
        this.viewButtonStop.setButtonStopStyleInactive();
    }
}