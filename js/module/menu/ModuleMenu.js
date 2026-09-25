import {ViewTitle} from "../../view/menu/ViewTitle.js";
import {ControllerMenuTitle} from "../../controller/menu/ControllerMenuTitle.js";

import {ViewMenuPrimary} from "../../view/menu/ViewMenuPrimary.js";
import {ControllerMenuPrimary} from "../../controller/menu/ControllerMenuPrimary.js";

import {ControllerMenuCoordinator} from "../../controller/menu/ControllerMenuCoordinator.js";


export class ModuleMenu {

    constructor() {

        this.viewMenuMain =
            new ViewMenuPrimary();

        this.controllerMenuMain =
            new ControllerMenuPrimary(
                this.viewMenuMain
            );


        this.viewTitle =
            new ViewTitle();

        this.controllerTitle =
            new ControllerMenuTitle(
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