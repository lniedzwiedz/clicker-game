import {ViewTitle} from "../../view/menu/ViewTitle.js";
import {ControllerTitle} from "../../controller/menu/ControllerTitle.js";

import {ViewMenuMain} from "../../view/menu/ViewMenuMain.js";

import {ControllerMenuMain} from "../../controller/menu/ControllerMenuMain.js";


export class ModuleMenu {

    constructor() {

        this.viewMenuMain =
            new ViewMenuMain();

        this.viewTitle =
            new ViewTitle();

        this.controllerTitle =
            new ControllerTitle(
                this.viewTitle
            );

        this.controllerMenuMain =
            new ControllerMenuMain(
                this.viewMenuMain,
                this.controllerTitle,
            );
    }

    getControllerMenuMain(){
        return this.controllerMenuMain;
    }
}