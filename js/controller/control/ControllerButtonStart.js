import {
    addEventListenerOnClickButton
} from "../../common/function/commonFunctions.js";

import * as variablesButton from "../../common/variable/control/variablesButton.js";

export class ControllerButtonStart {

    constructor(viewButtonStart, actionButtonStart) {
        this.viewButtonStart = viewButtonStart;
        this.actionButtonStart = actionButtonStart;
        this.onStart = null;
    }

    createButtonStart() {
        this.viewButtonStart.createContainerButtonStartMain();
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