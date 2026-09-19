import {ViewFooter} from "../../view/footer/ViewFooter.js";
import {ControllerFooterMain} from "../../controller/footer/ControllerFooterMain.js";


export class ModuleFooter{

    constructor() {

        this.viewFooter =
            new ViewFooter();

        this.controllerFooterMain =
            new ControllerFooterMain(
                this.viewFooter
            );
    }

    getControllerFooterMain(){
        return this.controllerFooterMain;
    }
}