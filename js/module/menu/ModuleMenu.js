import {ViewTitle} from "../../view/menu/ViewTitle.js";
import {ControllerTitle} from "../../controller/menu/ControllerTitle.js";

import {ViewMenuMain} from "../../view/menu/ViewMenuMain.js";
import {ControllerMenuMain} from "../../controller/menu/ControllerMenuMain.js";

import {ControllerMenuCoordinator} from "../../controller/menu/ControllerMenuCoordinator.js";


export class ModuleMenu {

    constructor() {

        this.viewMenuMain =
            new ViewMenuMain();

        this.controllerMenuMain =
            new ControllerMenuMain(
                this.viewMenuMain
            );


        this.viewTitle =
            new ViewTitle();

        this.controllerTitle =
            new ControllerTitle(
                this.viewTitle
            );


        this.controllerMenuCoordinator =
            new ControllerMenuCoordinator(
                this.controllerMenuMain,
                this.controllerTitle,
            );
    }

    getControllerMenuCoordinator() {
        return this.controllerMenuCoordinator;
    }
}