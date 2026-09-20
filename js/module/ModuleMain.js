import {ViewMain} from "../view/ViewMain.js";

import {ModuleHome} from "./home/ModuleHome.js";
import {ModuleMenu} from "./menu/ModuleMenu.js";
import {ModuleFooter} from "./footer/ModuleFooter.js";

import {ModuleGame} from "./play/ModuleGame.js";

import {ControllerCoordinator} from "../controller/ControllerCoordinator.js";


export class ModuleMain {

    constructor() {

        this.viewMain =
            new ViewMain();

        this.moduleMenu =
            new ModuleMenu();

        this.moduleHome =
            new ModuleHome();

        this.moduleFooter =
            new ModuleFooter();


        this.moduleGame =
            new ModuleGame();


        this.controllerCoordinator =
            new ControllerCoordinator(
                this.viewMain,
                this.moduleMenu.getControllerMenuCoordinator(),
                this.moduleHome.getControllerHomeMain(),
                this.moduleFooter.getControllerFooterCoordinator(),
                this.moduleGame.getControllerMainGame()
            );
    }

    // getControllerMain(){
    //     return this.controllerMain;
    // }

    create() {
        this.controllerCoordinator.create();
    }
}