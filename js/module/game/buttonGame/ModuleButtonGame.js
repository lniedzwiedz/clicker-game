import {ViewButtonGamePrimary} from "../../../view/game/buttonGame/ViewButtonGamePrimary.js";
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

        this.viewButtonGamePrimary =
            new ViewButtonGamePrimary();

        this.controllerButtonGamePrimary =
            new ControllerButtonGamePrimary(
                this.viewButtonGamePrimary,
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
                this.controllerButtonGamePrimary,
                this.controllerButtonGameColor,
                this.controllerButtonClickText
            );
    }

    getControllerButtonGameCoordinator() {
        return this.controllerButtonGameCoordinator;
    }
}