import {ViewButtonClick} from "../../../view/home/control/ViewButtonClick.js";
import {ActionButtonClick} from "../../../action/control/ActionButtonClick.js";
import {ControllerButtonClick} from "../../../controller/home/buttonClick/ControllerButtonClick.js";

import {ControllerButtonClickCoordinator} from "../../../controller/home/buttonClick/ControllerButtonClickCoordinator.js";


export class ModuleButtonClick {

    constructor() {

        this.viewButtonClick =
            new ViewButtonClick();

        this.actionButtonClick =
            new ActionButtonClick();

        this.controllerButtonClick =
            new ControllerButtonClick(
                this.viewButtonClick,
                this.actionButtonClick
            );


        this.controllerButtonClickCoordinator =
            new ControllerButtonClickCoordinator(
                this.controllerButtonClick
            );
    }

    getControllerButtonClickCoordinator() {
        return this.controllerButtonClickCoordinator;
    }
}