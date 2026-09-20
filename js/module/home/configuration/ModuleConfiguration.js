import {ViewConfigurationMain} from "../../../view/home/configuration/ViewConfigurationMain.js";
import {ControllerConfigurationMain} from "../../../controller/home/configuration/ControllerConfigurationMain.js";

import {ViewConfigurationDecorationIcon} from "../../../view/home/configuration/ViewConfigurationDecorationIcon.js";
import {
    ControllerConfigurationDecorationIcon
} from "../../../controller/home/configuration/ControllerConfigurationDecorationIcon.js";

import {ViewConfigurationRound} from "../../../view/home/configuration/ViewConfigurationRound.js";
import {ControllerConfigurationRound} from "../../../controller/home/configuration/ControllerConfigurationRound.js";

import {ViewButtonsRound} from "../../../view/home/configuration/ViewButtonsRound.js";
import {ActionButtonsRound} from "../../../action/control/ActionButtonsRound.js";
import {ControllerButtonsRound} from "../../../controller/home/configuration/ControllerButtonsRound.js";

import {
    ControllerConfigurationCoordinator
} from "../../../controller/home/configuration/ControllerConfigurationCoordinator.js";


export class ModuleConfiguration {

    constructor() {

        this.viewConfigurationMain =
            new ViewConfigurationMain();

        this.controllerConfiguration =
            new ControllerConfigurationMain(
                this.viewConfigurationMain
            );


        this.viewConfigurationDecorationIcon =
            new ViewConfigurationDecorationIcon();

        this.controllerConfigurationDecorationIcon =
            new ControllerConfigurationDecorationIcon(
                this.viewConfigurationDecorationIcon
            );


        this.viewConfigurationRound =
            new ViewConfigurationRound();

        this.controllerConfigurationRound =
            new ControllerConfigurationRound(
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


        this.controllerConfigurationCoordinator =
            new ControllerConfigurationCoordinator(
                this.controllerConfiguration,
                this.controllerConfigurationDecorationIcon,
                this.controllerConfigurationRound,
                this.controllerButtonsRound,
            );
    }

    getControllerConfigurationCoordinator() {
        return this.controllerConfigurationCoordinator;
    }
}