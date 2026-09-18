import {ViewButtonClickColor} from "../view/control/ViewButtonClickColor.js";
import {ActionButtonClickColor} from "../action/control/ActionButtonClickColor.js";
import {ControllerButtonClickColor} from "../controller/Controller/ControllerButtonClickColor.js";


import {ControllerButtonsMain} from "../controller/Controller/ControllerButtonsMain.js";


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

    createGame() {
        // this.controllerButtonClickColor.createGameButtonsView();
        // this.controllerButtonStart.createButtonStart();
        this.controllerButtonsMain.createGameButtons();
    }

    getControllerButtonsMain() {
        return this.controllerButtonsMain;
    }
}