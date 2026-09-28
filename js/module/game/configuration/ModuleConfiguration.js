import {ViewConfigurationPrimary} from "../../../view/game/configuration/ViewConfigurationPrimary.js";
import {ControllerConfigurationPrimary} from "../../../controller/game/configuration/ControllerConfigurationPrimary.js";

import {ViewConfigurationDecoration} from "../../../view/game/configuration/decoration/ViewConfigurationDecoration.js";
import {ControllerConfigurationDecoration} from "../../../controller/game/configuration/decoration/ControllerConfigurationDecoration.js";


import {
    ControllerConfigurationCoordinator
} from "../../../controller/game/configuration/ControllerConfigurationCoordinator.js";

import {ModuleConfigurationRound} from "./ModuleConfigurationRound.js";


export class ModuleConfiguration {

    constructor() {

        this.viewConfigurationPrimary =
            new ViewConfigurationPrimary();

        this.controllerConfigurationPrimary =
            new ControllerConfigurationPrimary(
                this.viewConfigurationPrimary
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
                this.controllerConfigurationPrimary,
                this.controllerConfigurationDecoration,
                this.moduleConfigurationRound.getControllerConfigurationRoundCoordinator(),
            );
    }

    getControllerConfigurationCoordinator() {
        return this.controllerConfigurationCoordinator;
    }
}