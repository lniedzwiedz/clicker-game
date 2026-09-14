import {ViewButtons} from "./ViewButtons.js";

import * as variablesButton from "../../common/variable/control/variablesButton.js";


export class ViewButtonStart extends ViewButtons {

    createContainerButtonStartMain() {
        this.createContainerButtonMain(variablesButton.containerButtonStartMain, variablesButton.buttonStartDiv);
        this.createAndConfigureButton(variablesButton.buttonStartDiv, variablesButton.buttonStart, variablesButton.buttonStartDisplayIcon)
    }

    setIconColorBeforeClick() {
        this.setConfigurationButtonBeforeClick(variablesButton.buttonStartDisplayText);
    }

    setIconColorAfterClick() {
        this.setConfigurationButtonAfterClick(variablesButton.buttonStartDisplayText);
    }
}