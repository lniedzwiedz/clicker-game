import {
    ViewConfigurationRoundButtonsPrimary
} from "../../../view/game/configuration/round/ViewConfigurationRoundButtonsPrimary.js";
import {
    ControllerConfigurationRoundPrimary
} from "../../../controller/game/configuration/round/ControllerConfigurationRoundPrimary.js";

import {ViewConfigurationRoundPrimary} from "../../../view/game/configuration/round/ViewConfigurationRoundPrimary.js";
import {
    ControllerConfigurationRoundButtonsPrimary
} from "../../../controller/game/configuration/round/ControllerConfigurationRoundButtonsPrimary.js";

import ViewConfigurationRoundButtons from "../../../view/game/configuration/round/ViewConfigurationRoundButtons.js";
import {ActionConfigurationRoundButtons} from "../../../action/configuration/ActionConfigurationRoundButtons.js";
import {
    ControllerConfigurationRoundButtons
} from "../../../controller/game/configuration/round/ControllerConfigurationRoundButtons.js";

import {
    ControllerConfigurationRoundCoordinator
} from "../../../controller/game/configuration/round/ControllerConfigurationRoundCoordinator.js";


export class ModuleConfigurationRound {

    constructor() {

        this.viewConfigurationRoundPrimary =
            new ViewConfigurationRoundPrimary();

        this.controllerConfigurationRoundPrimary =
            new ControllerConfigurationRoundPrimary(
                this.viewConfigurationRoundPrimary
            );


        this.viewConfigurationRoundButtonsPrimary =
            new ViewConfigurationRoundButtonsPrimary();

        this.controllerConfigurationRoundButtonsPrimary =
            new ControllerConfigurationRoundButtonsPrimary(
                this.viewConfigurationRoundButtonsPrimary
            );


        this.viewConfigurationRoundButtons =
            new ViewConfigurationRoundButtons();

        this.actionConfigurationRoundButtons =
            new ActionConfigurationRoundButtons();

        this.controllerConfigurationRoundButtons =
            new ControllerConfigurationRoundButtons(
                this.viewConfigurationRoundButtons,
                this.actionConfigurationRoundButtons
            );

        this.controllerConfigurationRoundCoordinator =
            new ControllerConfigurationRoundCoordinator(
                this.controllerConfigurationRoundPrimary,
                this.controllerConfigurationRoundButtonsPrimary,
                this.controllerConfigurationRoundButtons
            );
    }

    getControllerConfigurationRoundCoordinator() {
        return this.controllerConfigurationRoundCoordinator;
    }
}