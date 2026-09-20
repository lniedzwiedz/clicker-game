import {ViewFooterMain} from "../../view/footer/ViewFooterMain.js";

import {ViewAuthor} from "../../view/footer/ViewAuthor.js";
import {ControllerAuthor} from "../../controller/footer/ControllerAuthor.js";

import {ControllerFooterMain} from "../../controller/footer/ControllerFooterMain.js";


export class ModuleFooter{

    constructor() {

        this.viewFooterMain =
            new ViewFooterMain();

        this.viewAuthor =
            new ViewAuthor();

        this.controllerAuthor =
            new ControllerAuthor(
                this.viewAuthor
            );

        this.controllerFooterMain =
            new ControllerFooterMain(
                this.viewFooterMain,
                this.controllerAuthor
            );
    }

    getControllerFooterMain(){
        return this.controllerFooterMain;
    }
}