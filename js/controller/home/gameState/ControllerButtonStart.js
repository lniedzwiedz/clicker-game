import {
    addEventListenerOnClickButton
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonStart from "../../../common/variable/home/gameState/variablesButtonStart.js";


export class ControllerButtonStart {

    constructor(viewButtonStart, actionButtonStart) {
        this.viewButtonStart = viewButtonStart;
        this.actionButtonStart = actionButtonStart;
        this.onStart = null;
    }

    createButtonStart() {
        this.viewButtonStart.createContainerButtonStart();
        this.addClickStartListener();
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    handleClickStart(event) {
        if (this.onStart) {
            this.onStart();
        }
    }

    addClickStartListener() {
        addEventListenerOnClickButton(
            variablesButtonStart.buttonStartId,
            this.handleClickStart,
            this
        );
    }

    setConfigurationButtonStartAfterClickButtonStart() {
        this.setConfigurationIconStartAfterClick();
    }

    setConfigurationButtonStartAfterClickButtonStop() {
        this.setConfigurationIconStartBeforeClick();
    }

    setConfigurationIconStartBeforeClick() {
        this.viewButtonStart.setIconStartStyleBeforeClick();
    }

    setConfigurationIconStartAfterClick() {
        this.viewButtonStart.setIconStartStyleAfterClick();
    }

    setConfigurationButtonStartForGameOver() {
        this.viewButtonStart.setIconStartStyleForGameOver();
    }
}