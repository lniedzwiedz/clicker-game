import {ViewConfigurationRound} from "../../../view/home/configuration/ViewConfigurationRound.js";
import {ControllerRoundMain} from "../../../controller/home/configuration/ControllerRoundMain.js";

import {ViewButtonsRound} from "../../../view/home/configuration/ViewButtonsRound.js";
import {ActionButtonsRound} from "../../../action/control/ActionButtonsRound.js";
import {ControllerButtonsRound} from "../../../controller/home/configuration/ControllerButtonsRound.js";

import {ControllerRoundCoordinator} from "../../../controller/home/configuration/ControllerRoundCoordinator.js";

export class ModuleConfigurationRound {

    constructor() {

        this.viewConfigurationRound =
            new ViewConfigurationRound();

        this.controllerRoundMain =
            new ControllerRoundMain(
                this.viewConfigurationRound
            );


        this.viewButtonsRound =
            new ViewButtonsRound();

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