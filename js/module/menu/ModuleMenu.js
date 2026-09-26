import {ViewMenuTitle} from "../../view/menu/ViewMenuTitle.js";
import {ControllerMenuTitle} from "../../controller/menu/ControllerMenuTitle.js";

import {ViewMenuPrimary} from "../../view/menu/ViewMenuPrimary.js";
import {ControllerMenuPrimary} from "../../controller/menu/ControllerMenuPrimary.js";

import {ControllerMenuCoordinator} from "../../controller/menu/ControllerMenuCoordinator.js";


export class ModuleMenu {

    constructor() {

        this.viewMenuPrimary =
            new ViewMenuPrimary();

        this.controllerMenuPrimary =
            new ControllerMenuPrimary(
                this.viewMenuPrimary
            );


        this.viewMenuTitle =
            new ViewMenuTitle();

        this.controllerMenuTitle =
            new ControllerMenuTitle(
                this.viewMenuTitle
            );


        this.controllerMenuCoordinator =
            new ControllerMenuCoordinator(
                this.controllerMenuPrimary,
                this.controllerMenuTitle,
            );
    }

    getControllerMenuCoordinator() {
        return this.controllerMenuCoordinator;
    }
}