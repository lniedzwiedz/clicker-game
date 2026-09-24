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
        this.addClickStopListener();
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

        if (isElementsExistById(variablesButtonStop.containerButtonStopMain)) {

            this.buttonClickEvent =
                addEventListenerOnClickButton(
                    variablesButtonStop.buttonStopDisplayFlex,
                    this.handleClickStop,
                    this
                );
        }
    }

    removeClickStopListener() {

        if (isElementsExistById(variablesButtonStop.containerButtonStopMain)) {

            removeEventListenerOnClickButton(
                variablesButtonStop.buttonStopDisplayFlex,
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

    removeButtonStopStyleInactive(){
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
        this.viewButtonStop.setIconStopStyleForGameOver();
        this.viewButtonStop.setButtonStopStyleInactive();

        this.removeClickStopListener();
    }
}