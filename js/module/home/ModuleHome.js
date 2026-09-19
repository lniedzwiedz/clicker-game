import {ViewHome} from "../../view/home/ViewHome.js";
import {ControllerHomeMain} from "../../controller/home/ControllerHomeMain.js";

export class ModuleHome{


    constructor() {

        this.viewHome =
            new ViewHome();

        this.controllerHomeMain =
            new ControllerHomeMain(
                this.viewHome,
            );
    }

    getControllerHomeMain(){
        return this.controllerHomeMain;
    }
}