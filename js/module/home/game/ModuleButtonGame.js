import {ViewButtonGameMain} from "../../../view/home/game/ViewButtonGameMain.js";
import {ActionButtonClick} from "../../../action/control/ActionButtonClick.js";
import {ControllerButtonGameMain} from "../../../controller/home/game/ControllerButtonGameMain.js";

import {ViewButtonGameColor} from "../../../view/home/game/ViewButtonGameColor.js";
import {ControllerButtonGameColor} from "../../../controller/home/game/ControllerButtonGameColor.js";

import {ViewButtonGameText} from "../../../view/home/game/ViewButtonGameText.js";
import {ControllerButtonGameText} from "../../../controller/home/game/ControllerButtonGameText.js";

import {
    ControllerButtonGameCoordinator
} from "../../../controller/home/game/ControllerButtonGameCoordinator.js";


export class ModuleButtonGame {

    constructor() {

        this.viewButtonGameMain =
            new ViewButtonGameMain();

        this.actionButtonClick =
            new ActionButtonClick();

        this.controllerButtonGameMain =
            new ControllerButtonGameMain(
                this.viewButtonGameMain,
                this.actionButtonClick
            );


        this.viewButtonGameColor =
            new ViewButtonGameColor();

        this.controllerButtonGameColor =
            new ControllerButtonGameColor(
                this.viewButtonGameColor
            );

        this.viewButtonGameText =
            new ViewButtonGameText();


        this.controllerButtonClickText =
            new ControllerButtonGameText(
                this.viewButtonGameText
            )


        this.controllerButtonGameCoordinator =
            new ControllerButtonGameCoordinator(
                this.controllerButtonGameMain,
                this.controllerButtonGameColor,
                this.controllerButtonClickText
            );
    }

    getControllerButtonGameCoordinator() {
        return this.controllerButtonGameCoordinator;
    }
}