import {
    addEventListenerOnClickButton,
    isElementsExistById,
    removeEventListenerOnClickButton
} from "../../../common/function/commonFunctions.js";

import * as variablesGameStateButtonStop from "../../../common/variable/game/gameState/variablesGameStateButtonStop.js";


export class ControllerGameStateButtonStop {

    constructor(viewGameStateButtonStop) {
        this.viewButtonStop = viewGameStateButtonStop;
        this.onStop = null;
        this.buttonClickEvent = null;
    }

    createButtonStop() {
        this.createContainerGameStateButtonStop();
        this.addClickStopListener();
    }

    createContainerGameStateButtonStop() {
        this.viewButtonStop.createContainerGameStateButtonStop();
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

        if (isElementsExistById(variablesGameStateButtonStop.containerButtonStopMainId)) {

            this.buttonClickEvent =
                addEventListenerOnClickButton(
                    variablesGameStateButtonStop.buttonStopId,
                    this.handleClickStop,
                    this
                );
        }
    }

    removeClickStopListener() {

        if (isElementsExistById(variablesGameStateButtonStop.containerButtonStopMainId)) {

            removeEventListenerOnClickButton(
                variablesGameStateButtonStop.buttonStopId,
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