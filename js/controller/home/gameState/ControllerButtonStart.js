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
        this.configureButtonStart();
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    handleClickStart(event) {
        if (this.onStart) {
            this.onStart();
        }
    }

    configureButtonStart() {
        addEventListenerOnClickButton(
            // to do - fix variable
            variablesButtonStart.buttonStartDisplayFlex,
            this.handleClickStart,
            this
        );
    }

    setConfigurationIconStartBeforeClick() {
        this.viewButtonStart.setIconStartStyleBeforeClick();
    }

    setConfigurationIconStartAfterClick() {
        this.viewButtonStart.setIconStartStyleAfterClick();
    }
}