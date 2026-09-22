import {ViewButtonClickMain} from "../../../view/home/buttonClick/ViewButtonClickMain.js";
import {ActionButtonClick} from "../../../action/control/ActionButtonClick.js";
import {ControllerButtonClickMain} from "../../../controller/home/buttonClick/ControllerButtonClickMain.js";

import {ViewButtonClickColor} from "../../../view/home/buttonClick/ViewButtonClickColor.js";
import {ControllerButtonClickColor} from "../../../controller/home/buttonClick/ControllerButtonClickColor.js";

import {ViewButtonClickText} from "../../../view/home/buttonClick/ViewButtonClickText.js";
import {ControllerButtonClickText} from "../../../controller/home/buttonClick/ControllerButtonClickText.js";

import {
    ControllerButtonClickCoordinator
} from "../../../controller/home/buttonClick/ControllerButtonClickCoordinator.js";


export class ModuleButtonClick {

    constructor() {

        this.viewButtonClickMain =
            new ViewButtonClickMain();

        this.actionButtonClick =
            new ActionButtonClick();

        this.controllerButtonClickMain =
            new ControllerButtonClickMain(
                this.viewButtonClickMain,
                this.actionButtonClick
            );


        this.viewButtonColorColor =
            new ViewButtonClickColor();

        this.controllerButtonClickColor =
            new ControllerButtonClickColor(
                this.viewButtonColorColor
            );

        this.viewButtonClickText =
            new ViewButtonClickText();


        this.controllerButtonClickText =
            new ControllerButtonClickText(
                this.viewButtonClickText
            )


        this.controllerButtonClickCoordinator =
            new ControllerButtonClickCoordinator(
                this.controllerButtonClickMain,
                this.controllerButtonClickColor,
                this.controllerButtonClickText
            );
    }

    getControllerButtonClickCoordinator() {
        return this.controllerButtonClickCoordinator;
    }
}