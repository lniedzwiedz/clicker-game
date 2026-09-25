import {ViewConfigurationRound} from "../../../view/game/configuration/ViewConfigurationRound.js";
import {ControllerRoundPrimary} from "../../../controller/game/configuration/round/ControllerRoundPrimary.js";

import {ViewConfigurationButtonsRound} from "../../../view/game/configuration/ViewConfigurationButtonsRound.js";
import {ActionButtonsRound} from "../../../action/control/ActionButtonsRound.js";
import {ControllerButtonsRound} from "../../../controller/game/configuration/round/ControllerButtonsRound.js";

import {ControllerRoundCoordinator} from "../../../controller/game/configuration/round/ControllerRoundCoordinator.js";

export class ModuleConfigurationRound {

    constructor() {

        this.viewConfigurationRound =
            new ViewConfigurationRound();

        this.controllerRoundMain =
            new ControllerRoundPrimary(
                this.viewConfigurationRound
            );


        this.viewButtonsRound =
            new ViewConfigurationButtonsRound();

        this.actionButtonsRound =
            new ActionButtonsRound();

        this.controllerButtonsRound =
            new ControllerButtonsRound(
                this.viewButtonsRound,
                this.actionButtonsRound
            );

        this. controllerRoundCoordinator =
            new ControllerRoundCoordinator(
                this.controllerRoundMain,
                this.controllerButtonsRound
            );
    }

    getControllerRoundCoordinator() {
        return this.controllerRoundCoordinator;
    }
}