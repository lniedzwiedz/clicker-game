import {ViewConfiguration} from "../../../view/home/configuration/ViewConfiguration.js";
import {ControllerConfiguration} from "../../../controller/home/configuration/ControllerConfiguration.js";

import {ViewConfigurationDecorationIcon} from "../../../view/home/configuration/ViewConfigurationDecorationIcon.js";
import {
    ControllerConfigurationDecorationIcon
} from "../../../controller/home/configuration/ControllerConfigurationDecorationIcon.js";

import {ViewConfigurationRound} from "../../../view/home/configuration/ViewConfigurationRound.js";
import {ControllerConfigurationRound} from "../../../controller/home/configuration/ControllerConfigurationRound.js";

import {ViewButtonsRound} from "../../../view/home/configuration/ViewButtonsRound.js";
import {ActionButtonsRound} from "../../../action/control/ActionButtonsRound.js";
import {ControllerButtonsRound} from "../../../controller/home/configuration/ControllerButtonsRound.js";

import {ControllerConfigurationMain} from "../../../controller/home/configuration/ControllerConfigurationMain.js";


export class ModuleConfiguration {

    constructor() {

        this.viewConfiguration =
            new ViewConfiguration();

        this.controllerConfiguration =
            new ControllerConfiguration(
                this.viewConfiguration
            );


        this.viewConfigurationIcon =
            new ViewConfigurationDecorationIcon();

        this.controllerConfigurationDecorationIcon =
            new ControllerConfigurationDecorationIcon(
                this.viewConfigurationIcon
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


        this.controllerConfigurationMain =
            new ControllerConfigurationMain(
                this.controllerConfiguration,
                this.controllerConfigurationDecorationIcon,
                this.controllerConfigurationRound,
                this.controllerButtonsRound,
            );
    }

    getControllerConfiguration() {
        return this.controllerConfigurationMain;
    }
}