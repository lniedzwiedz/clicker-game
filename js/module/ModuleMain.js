import {ViewPrimary} from "../view/ViewPrimary.js";
import {ControllerPrimary} from "../controller/ControllerPrimary.js";

import {ModuleHome} from "./home/ModuleHome.js";
import {ModuleMenu} from "./menu/ModuleMenu.js";
import {ModuleFooter} from "./footer/ModuleFooter.js";

import ModuleClickerGame from "./game/ModuleClickerGame.js";

import {ControllerCoordinator} from "../controller/ControllerCoordinator.js";


export class ModuleMain {

    constructor() {

        this.viewPrimary =
            new ViewPrimary();

        this.controllerPrimary =
            new ControllerPrimary(
                this.viewPrimary
            );


        this.moduleMenu =
            new ModuleMenu();

        this.moduleHome =
            new ModuleHome();

        this.moduleFooter =
            new ModuleFooter();

        this.moduleClickerGame =
            new ModuleClickerGame();


        this.controllerCoordinator =
            new ControllerCoordinator(
                this.controllerPrimary,
                this.moduleMenu.getControllerMenuCoordinator(),
                this.moduleHome.getControllerHomeCoordinator(),
                this.moduleFooter.getControllerFooterCoordinator(),
                this.moduleClickerGame.getControllerGameClicker()
            );
    }

    start() {
        this.controllerCoordinator.create();
    }
}