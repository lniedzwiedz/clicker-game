import {ViewMain} from "../view/ViewMain.js";
import {ControllerMain} from "../controller/ControllerMain.js";

import {ModuleHome} from "./home/ModuleHome.js";
import {ModuleMenu} from "./menu/ModuleMenu.js";
import {ModuleFooter} from "./footer/ModuleFooter.js";

import ModuleClickerGame from "./ModuleClickerGame.js";

import {ControllerCoordinator} from "../controller/ControllerCoordinator.js";



export class ModuleMain {

    constructor() {

        this.viewMain =
            new ViewMain();

        this.controllerMain =
            new ControllerMain(this.viewMain);


        this.moduleMenu =
            new ModuleMenu();

        this.moduleHome =
            new ModuleHome();

        this.moduleFooter =
            new ModuleFooter();


        // this.moduleGame =
        //     new ModuleGame();

        this.moduleClickerGame =
            new ModuleClickerGame();


        this.controllerCoordinator =
            new ControllerCoordinator(
                this.controllerMain,
                this.moduleMenu.getControllerMenuCoordinator(),
                this.moduleHome.getControllerHomeCoordinator(),
                this.moduleFooter.getControllerFooterCoordinator(),
                // this.moduleGame.getControllerGameCoordinator()
                this.moduleClickerGame.getControllerGameClicker()
            );
    }

    // getControllerMain(){
    //     return this.controllerMain;
    // }

    create() {
        this.controllerCoordinator.create();
    }
}