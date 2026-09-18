import {ViewButtons} from "./ViewButtons.js";

import {
    createElementButton,
    createElementDiv,
    createElementI,
    getElementById,
    isElementsExistById,
    removeElementClassNameById,
    setElementClassNameById,
} from "../../common/function/commonFunctions.js";

import * as variablesButtonStart from "../../common/variable/control/variablesButtonStart.js";


export class ViewButtonStart extends ViewButtons {

    createContainerButtonStart() {
        this.createContainerButtonStartMain();
        this.createButtonStart();
    }

    createContainerButtonStartMain() {
        createElementDiv(
            variablesButtonStart.containerGameStateMainParts,
            variablesButtonStart.containerButtonStartMain
        );
    }

    createButtonStart() {
        this.createButtonStartMain();
        this.createButtonStartIcon();
    }

    createButtonStartMain() {
        createElementButton(
            variablesButtonStart.containerButtonStartMain,
            variablesButtonStart.buttonStartDisplayFlex
        );

        setElementClassNameById(
            variablesButtonStart.buttonStartDisplayFlex,
            variablesButtonStart.buttonStartStyle
        );
    }

    createButtonStartIcon() {
        createElementI(
            variablesButtonStart.buttonStartDisplayFlex,
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleSolid,
            variablesButtonStart.buttonStartIconPlay
        );

        setElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        );
    }

    setIconColorBeforeClick() {
        this.setConfigurationButtonStartBeforeClick(
            variablesButtonStart.buttonStartIconPlay
        );
    }

    setConfigurationButtonStartBeforeClick() {
        let elementId =
            getElementById(
                variablesButtonStart.buttonStarIconPlayId
            );

        if (isElementsExistById(elementId)) {
            removeElementClassNameById(
                elementId,
                variablesButtonStart.buttonStartIconPlayStyleAfterClick
            );
        }
    }

    setIconColorAfterClick() {
        this.setConfigurationButtonStartAfterClick(
            variablesButtonStart.buttonStartIconPlay
        );
    }

    setConfigurationButtonStartAfterClick() {

        let elementId =
            getElementById(
                variablesButtonStart.buttonStarIconPlayId
            );

        removeElementClassNameById(
            elementId,
            variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        );

        setElementClassNameById(
            elementId,
            variablesButtonStart.buttonStartIconPlayStyleAfterClick
        );
    }
}