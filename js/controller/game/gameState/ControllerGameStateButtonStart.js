import {
    addEventListenerOnClickButton
} from "../../../common/function/commonFunctions.js";

import * as variablesGameStateButtonStart from "../../../common/variable/game/gameState/variablesGameStateButtonStart.js";


export class ControllerGameStateButtonStart {

    constructor(viewGameStateButtonStart) {
        this.viewButtonStart = viewGameStateButtonStart;
        this.onStart = null;
    }

    createButtonStart() {
        this.createContainerGameStateButtonStart();
        this.addClickStartListener();
    }

    createContainerGameStateButtonStart() {
        this.viewButtonStart.createContainerGameStateButtonStart();
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
            variablesGameStateButtonStart.buttonStartId,
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