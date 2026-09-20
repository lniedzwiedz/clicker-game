import {ViewHomeMain} from "../../view/home/ViewHomeMain.js";
import {ControllerHomeMain} from "../../controller/home/ControllerHomeMain.js";

import {ControllerHomeCoordinator} from "../../controller/home/ControllerHomeCoordinator.js";


export class ModuleHome {


    constructor() {

        this.viewHome =
            new ViewHomeMain();

        this.controllerHomeMain =
            new ControllerHomeMain(
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