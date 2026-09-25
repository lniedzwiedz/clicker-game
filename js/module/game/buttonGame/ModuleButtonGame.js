import {ViewButtonGamePrimary} from "../../../view/game/buttonGame/ViewButtonGamePrimary.js";
import {ActionButtonClick} from "../../../action/control/ActionButtonClick.js";
import {ControllerButtonGamePrimary} from "../../../controller/game/buttonGame/ControllerButtonGamePrimary.js";

import {ViewButtonGameColor} from "../../../view/game/buttonGame/ViewButtonGameColor.js";
import {ControllerButtonGameColor} from "../../../controller/game/buttonGame/ControllerButtonGameColor.js";

import {ViewButtonGameText} from "../../../view/game/buttonGame/ViewButtonGameText.js";
import {ControllerButtonGameText} from "../../../controller/game/buttonGame/ControllerButtonGameText.js";

import {
    ControllerButtonGameCoordinator
} from "../../../controller/game/buttonGame/ControllerButtonGameCoordinator.js";


export class ModuleButtonGame {

    constructor() {

        this.viewButtonGameMain =
            new ViewButtonGamePrimary();

        this.actionButtonClick =
            new ActionButtonClick();

        this.controllerButtonGameMain =
            new ControllerButtonGamePrimary(
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