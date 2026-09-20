import {ViewFooterMain} from "../../view/footer/ViewFooterMain.js";
import {ControllerFooterMain} from "../../controller/footer/ControllerFooterMain.js";

import {ViewAuthor} from "../../view/footer/ViewAuthor.js";
import {ControllerAuthor} from "../../controller/footer/ControllerAuthor.js";

import {ControllerFooterCoordinator} from "../../controller/footer/ControllerFooterCoordinator.js";


export class ModuleFooter {

    constructor() {

        this.viewFooterMain =
            new ViewFooterMain();

        this.controllerFooterMain =
            new ControllerFooterMain(
                this.viewFooterMain
            );


        this.viewAuthor =
            new ViewAuthor();

        this.controllerAuthor =
            new ControllerAuthor(
                this.viewAuthor
            );


        this.controllerFooterCoordinator =
            new ControllerFooterCoordinator(
                this.controllerFooterMain,
                this.controllerAuthor
            );
    }

    getControllerFooterCoordinator() {
        return this.controllerFooterCoordinator;
    }
}