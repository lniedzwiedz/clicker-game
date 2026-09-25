import {ViewFooterMain} from "../../view/footer/ViewFooterMain.js";
import {ControllerFooterPrimary} from "../../controller/footer/ControllerFooterPrimary.js";

import {ViewFooterAuthor} from "../../view/footer/ViewFooterAuthor.js";
import {ControllerFooterAuthor} from "../../controller/footer/ControllerFooterAuthor.js";

import {ControllerFooterCoordinator} from "../../controller/footer/ControllerFooterCoordinator.js";


export class ModuleFooter {

    constructor() {

        this.viewFooterMain =
            new ViewFooterMain();

        this.controllerFooterMain =
            new ControllerFooterPrimary(
                this.viewFooterMain
            );


        this.viewAuthor =
            new ViewFooterAuthor();

        this.controllerAuthor =
            new ControllerFooterAuthor(
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