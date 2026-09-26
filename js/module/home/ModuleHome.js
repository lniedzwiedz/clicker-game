import {ViewHomePrimary} from "../../view/home/ViewHomePrimary.js";
import {ControllerHomePrimary} from "../../controller/home/ControllerHomePrimary.js";

import {ControllerHomeCoordinator} from "../../controller/home/ControllerHomeCoordinator.js";


export class ModuleHome {


    constructor() {

        this.viewHomePrimary =
            new ViewHomePrimary();

        this.controllerHomePrimary =
            new ControllerHomePrimary(
                this.viewHomePrimary
            );

        this.controllerHomeCoordinator =
            new ControllerHomeCoordinator(
                this.controllerHomePrimary,
            );
    }

    getControllerHomeCoordinator() {
        return this.controllerHomeCoordinator;
    }
}