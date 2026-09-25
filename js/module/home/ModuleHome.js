import {ViewHomePrimary} from "../../view/home/ViewHomePrimary.js";
import {ControllerHomePrimary} from "../../controller/home/ControllerHomePrimary.js";

import {ControllerHomeCoordinator} from "../../controller/home/ControllerHomeCoordinator.js";


export class ModuleHome {


    constructor() {

        this.viewHome =
            new ViewHomePrimary();

        this.controllerHomeMain =
            new ControllerHomePrimary(
                this.viewHome
            );

        this.controllerHomeCoordinator =
            new ControllerHomeCoordinator(
                this.controllerHomeMain,
            );
    }

    getControllerHomeCoordinator() {
        return this.controllerHomeCoordinator;
    }
}