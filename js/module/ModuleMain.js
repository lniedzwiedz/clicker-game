import {ViewPrimary} from "../view/ViewPrimary.js";
import {ControllerPrimary} from "../controller/ControllerPrimary.js";

import {ModuleHome} from "./home/ModuleHome.js";
import {ModuleMenu} from "./menu/ModuleMenu.js";
import {ModuleFooter} from "./footer/ModuleFooter.js";

import ModuleClickerGame from "./game/ModuleClickerGame.js";

import {ControllerCoordinator} from "../controller/ControllerCoordinator.js";



export class ModuleMain {

    constructor() {

        this.viewMain =
            new ViewPrimary();

        this.controllerMain =
            new ControllerPrimary(this.viewMain);


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