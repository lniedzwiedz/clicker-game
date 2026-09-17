import {ViewConfiguration} from "../view/configuration/ViewConfiguration.js";
import {ControllerConfiguration} from "../controller/configuration/ControllerConfiguration.js";

import {ViewConfigurationDecorationIcon} from "../view/configuration/ViewConfigurationDecorationIcon.js";
import {
    ControllerConfigurationDecorationIcon
} from "../controller/configuration/ControllerConfigurationDecorationIcon.js";

import {ViewConfigurationRound} from "../view/configuration/ViewConfigurationRound.js";
import {ControllerConfigurationRound} from "../controller/configuration/ControllerConfigurationRound.js";

import {ViewButtonsRound} from "../view/configuration/ViewButtonsRound.js";
import {ActionButtonsRound} from "../action/control/ActionButtonsRound.js";
import {ControllerButtonsRound} from "../controller/configuration/ControllerButtonsRound.js";

import {ControllerConfigurationMain} from "../controller/configuration/ControllerConfigurationMain.js";


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

    createConfiguration() {
        this.controllerConfigurationMain.createConfiguration();
    }
}