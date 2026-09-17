import {ViewMenu} from "../view/menu/ViewMenu.js";
import {ControllerMenu} from "../controller/menu/ControllerMenu.js";

import {ViewTitle} from "../view/menu/ViewTitle.js";
import {ControllerTitle} from "../controller/menu/ControllerTitle.js";

import {ModuleGame} from "./ModuleGame.js";


export class ModuleMain {

    constructor() {

        // this.viewMenu =
        //     new ViewMenu();
        //
        // this.cntrollerMenu =
        //     new ControllerMenu(this.viewMenu);
        //
        // this.viewTitle =
        //     new ViewTitle();
        //
        // this.controllerTitle =
        //     new ControllerTitle(this.viewTitle);

        this.moduleGame =
            new ModuleGame();
    }

    createGame() {
        this.cntrollerMenu.createMenu();
        this.controllerTitle.createTitle();
        this.moduleGame.createGame();
    }
}