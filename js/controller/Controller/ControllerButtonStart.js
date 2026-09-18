import {
    addEventListenerOnClickButton
} from "../../common/function/commonFunctions.js";

import * as variablesButton from "../../common/variable/control/variablesGameState.js";

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
            variablesButton.buttonStart,
            this.handleClickStart,
            this
        );
    }

    setConfigurationBeforeClick() {
        this.viewButtonStart.setIconColorBeforeClick();
    }

    setConfigurationAfterClick() {
        this.viewButtonStart.setIconColorAfterClick();
    }
}