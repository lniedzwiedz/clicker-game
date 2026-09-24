import {ViewConfigurationMain} from "../../../view/home/configuration/ViewConfigurationMain.js";
import {ControllerConfigurationMain} from "../../../controller/home/configuration/ControllerConfigurationMain.js";

import {ViewConfigurationDecoration} from "../../../view/home/configuration/ViewConfigurationDecoration.js";
import {ControllerDecoration} from "../../../controller/home/configuration/ControllerDecoration.js";


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


        this.moduleConfigurationRound =
            new ModuleConfigurationRound();


        this.controllerConfigurationCoordinator =
            new ControllerConfigurationCoordinator(
                this.controllerConfigurationMain,
                this.controllerConfigurationDecoration,
                this.moduleConfigurationRound.getControllerRoundCoordinator(),
            );
    }

    getControllerConfigurationCoordinator() {
        return this.controllerConfigurationCoordinator;
    }
}