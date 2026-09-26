import {ViewFooterPrimary} from "../../view/footer/ViewFooterPrimary.js";
import {ControllerFooterPrimary} from "../../controller/footer/ControllerFooterPrimary.js";

import {ViewFooterAuthor} from "../../view/footer/ViewFooterAuthor.js";
import {ControllerFooterAuthor} from "../../controller/footer/ControllerFooterAuthor.js";

import {ControllerFooterCoordinator} from "../../controller/footer/ControllerFooterCoordinator.js";


export class ModuleFooter {

    constructor() {

        this.viewFooterPrimary =
            new ViewFooterPrimary();

        this.controllerFooterPrimary =
            new ControllerFooterPrimary(
                this.viewFooterPrimary
            );


        this.viewFooterAuthor =
            new ViewFooterAuthor();

        this.controllerFooterAuthor =
            new ControllerFooterAuthor(
                this.viewFooterAuthor
            );


        this.controllerFooterCoordinator =
            new ControllerFooterCoordinator(
                this.controllerFooterPrimary,
                this.controllerFooterAuthor
            );
    }

    getControllerFooterCoordinator() {
        return this.controllerFooterCoordinator;
    }
}