import {ViewConfigurationMain} from "../../../view/home/configuration/ViewConfigurationMain.js";
import {ControllerConfigurationMain} from "../../../controller/home/configuration/ControllerConfigurationMain.js";

import {ViewConfigurationDecoration} from "../../../view/home/configuration/ViewConfigurationDecoration.js";
import {ControllerDecoration} from "../../../controller/home/configuration/ControllerDecoration.js";

import {ViewConfigurationRound} from "../../../view/home/configuration/ViewConfigurationRound.js";
import {ControllerRoundMain} from "../../../controller/home/configuration/ControllerRoundMain.js";

import {ViewButtonsRound} from "../../../view/home/configuration/ViewButtonsRound.js";
import {ActionButtonsRound} from "../../../action/control/ActionButtonsRound.js";
import {ControllerButtonsRound} from "../../../controller/home/configuration/ControllerButtonsRound.js";

import {
    ControllerConfigurationCoordinator
} from "../../../controller/home/configuration/ControllerConfigurationCoordinator.js";

import {ModuleConfigurationRound} from "./ModuleConfigurationRound.js";


export class ModuleConfiguration {

    constructor() {

        this.viewConfigurationMain =
            new ViewConfigurationMain();

        this.controllerConfigurationMain =
            new ControllerConfigurationMain(
                this.viewConfigurationMain
            );


        this.viewConfigurationDecoration =
            new ViewConfigurationDecoration();

        this.controllerConfigurationDecoration =
            new ControllerDecoration(
                this.viewConfigurationDecoration
            );


        // this.viewConfigurationRound =
        //     new ViewConfigurationRound();
        //
        // this.controllerConfigurationRound =
        //     new ControllerRoundMain(
        //         this.viewConfigurationRound
        //     );
        //
        //
        // this.viewButtonsRound =
        //     new ViewButtonsRound();
        //
        // this.actionButtonsRound =
        //     new ActionButtonsRound();
        //
        // this.controllerButtonsRound =
        //     new ControllerButtonsRound(
        //         this.viewButtonsRound,
        //         this.actionButtonsRound
        //     );

        this.moduleConfigurationRound =
            new ModuleConfigurationRound();


        this.controllerConfigurationCoordinator =
            new ControllerConfigurationCoordinator(
                this.controllerConfigurationMain,
                this.controllerConfigurationDecoration,
                // this.controllerConfigurationRound,
                // this.controllerButtonsRound,
                this.moduleConfigurationRound.getControllerRoundCoordinator(),
            );
    }

    getControllerConfigurationCoordinator() {
        return this.controllerConfigurationCoordinator;
    }
}