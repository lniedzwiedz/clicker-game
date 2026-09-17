import {ViewTitle} from "../view/menu/ViewTitle.js";
import {ControllerTitle} from "../controller/menu/ControllerTitle.js";

import {ViewMenu} from "../view/menu/ViewMenu.js";
import {ControllerMenu} from "../controller/menu/ControllerMenu.js";
import {ControllerMenuMain} from "../controller/menu/ControllerMenuMain.js";


export class ModuleMenu {

    constructor() {

        this.viewMenu =
            new ViewMenu();

        this.controllerMenu =
            new ControllerMenu(
                this.viewMenu
            );

        this.viewTitle =
            new ViewTitle();

        this.controllerTitle =
            new ControllerTitle(
                this.viewTitle
            );

        this.controllerMenuMain =
            new ControllerMenuMain(
                this.controllerMenu,
                this.controllerTitle,
            );
    }

    createMenu() {
        this.controllerMenuMain.createMenu();
    }
}