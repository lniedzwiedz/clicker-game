import {ViewConfigurationPrimary} from "../../../view/game/configuration/ViewConfigurationPrimary.js";
import {ControllerConfigurationPrimary} from "../../../controller/game/configuration/ControllerConfigurationPrimary.js";

import {ViewConfigurationDecoration} from "../../../view/game/configuration/ViewConfigurationDecoration.js";
import {ControllerConfigurationDecoration} from "../../../controller/game/configuration/ControllerConfigurationDecoration.js";


import {
    ControllerConfigurationCoordinator
} from "../../../controller/game/configuration/ControllerConfigurationCoordinator.js";

import {ModuleConfigurationRound} from "./ModuleConfigurationRound.js";


export class ModuleConfiguration {

    constructor() {

        this.viewConfigurationMain =
            new ViewConfigurationPrimary();

        this.controllerConfigurationMain =
            new ControllerConfigurationPrimary(
                this.viewConfigurationMain
            );


        this.viewConfigurationDecoration =
            new ViewConfigurationDecoration();

        this.controllerConfigurationDecoration =
            new ControllerConfigurationDecoration(
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