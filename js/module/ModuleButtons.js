import {ViewButtonClickColor} from "../view/control/ViewButtonClickColor.js";
import {ActionButtonClickColor} from "../action/control/ActionButtonClickColor.js";
import {ControllerButtonClickColor} from "../controller/control/ControllerButtonClickColor.js";

import {ViewButtonStart} from "../view/control/ViewButtonStart.js";
import {ActionButtonStart} from "../action/control/ActionButtonStart.js";
import {ControllerButtonStart} from "../controller/control/ControllerButtonStart.js";

import {ViewButtonStop} from "../view/control/ViewButtonStop.js";
import {ActionButtonStop} from "../action/control/ActionButtonStop.js";
import {ControllerButtonStop} from "../controller/control/ControllerButtonStop.js";

import {ControllerButtonsMain} from "../controller/control/ControllerButtonsMain.js";


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


        this.viewButtonStart =
            new ViewButtonStart();

        this.actionButtonStart =
            new ActionButtonStart();

        this.controllerButtonStart =
            new ControllerButtonStart(
                this.viewButtonStart,
                this.actionButtonStart
            );


        this.viewButtonStop =
            new ViewButtonStop();

        this.actionButtonStop =
            new ActionButtonStop();

        this.controllerButtonStop =
            new ControllerButtonStop(
                this.viewButtonStop,
                this.actionButtonStop
            );


        this.controllerButtonsMain =
            new ControllerButtonsMain(
                this.controllerButtonStart,
                this.controllerButtonStop,
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