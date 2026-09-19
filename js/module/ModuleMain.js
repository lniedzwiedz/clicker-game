import {ViewMain} from "../view/ViewMain.js";

import {ModuleHome} from "./home/ModuleHome.js";
import {ModuleMenu} from "./menu/ModuleMenu.js";
import {ModuleFooter} from "./footer/ModuleFooter.js";

import {ModuleGame} from "./ModuleGame.js";

import {ControllerMain} from "../controller/ControllerMain.js";


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


        this.controllerMain =
            new ControllerMain(
                this.viewMain,
                this.moduleMenu.getControllerMenuMain(),
                this.moduleHome.getControllerHomeMain(),
                this.moduleFooter.getControllerFooterMain(),
                this.moduleGame.getControllerMainGame()
            );
    }

    getControllerMain(){
        return this.controllerMain;
    }
}