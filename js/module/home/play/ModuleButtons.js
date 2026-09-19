import {ViewButtonClickColor} from "../../../view/home/control/ViewButtonClickColor.js";
import {ActionButtonClickColor} from "../../../action/control/ActionButtonClickColor.js";
import {ControllerButtonClickColor} from "../../../controller/home/play/ControllerButtonClickColor.js";


import {ControllerButtonsMain} from "../../../controller/home/play/ControllerButtonsMain.js";


export class ModuleButtons {

    constructor() {

        this.viewButtonClickColor =
            new ViewButtonClickColor();

        this.actionButtonClickColor =
            new ActionButtonClickColor();

        this.controllerButtonClickColor =
            new ControllerButtonClickColor(
                this.viewButtonClickColor,
                this.actionButtonClickColor
            );


        this.controllerButtonsMain =
            new ControllerButtonsMain(
                this.controllerButtonClickColor
            );
    }

    getControllerButtonsMain() {
        return this.controllerButtonsMain;
    }
}