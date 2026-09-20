import {
    createElementButton,
    createElementDiv,
    createElementI,
    getElementById,
    isElementsExistById,
    removeElementClassNameById,
    setElementClassNameById,
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonStop from "../../../common/variable/home/gameState/variablesButtonStop.js";


export class ViewButtonStop {

    createContainerButtonStop() {

        if (!isElementsExistById(variablesButtonStop.containerButtonStopMain)) {
            this.createContainerButtonStopMain();
            this.createButtonStop();
        }
    }

    createContainerButtonStopMain() {
        createElementDiv(
            variablesButtonStop.containerGameStateMainParts,
            variablesButtonStop.containerButtonStopMain
        );
    }

    createButtonStop() {
        this.createButtonStopMain();
        this.createButtonStopIcon();
    }

    createButtonStopMain() {
        createElementButton(
            variablesButtonStop.containerButtonStopMain,
            variablesButtonStop.buttonStopDisplayFlex
        );

        setElementClassNameById(
            variablesButtonStop.buttonStopDisplayFlex,
            variablesButtonStop.buttonStopStyle
        );
    }

    createButtonStopIcon() {
        createElementI(
            variablesButtonStop.buttonStopDisplayFlex,
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleSolid,
            variablesButtonStop.buttonStopIconStop
        );

        setElementClassNameById(
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleBeforeClick
        );
    }

    setIconColorBeforeClick() {

        let elementId =
            getElementById(
                variablesButtonStop.buttonStopIconStopId
            );

        if (isElementsExistById(elementId)) {
            removeElementClassNameById(
                elementId,
                variablesButtonStop.buttonStopIconStopStyleAfterClick
            );
        }
    }

    setIconColorAfterClick() {

        removeElementClassNameById(
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleBeforeClick
        );

        setElementClassNameById(
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleAfterClick
        );
    }

    setConfigurationGameOver() {

        removeElementClassNameById(
            variablesButtonStop.buttonStopDisplayFlex,
            variablesButtonStop.buttonStopIconStopStyleAfterClick
        );

        setElementClassNameById(
            variablesButtonStop.buttonStopDisplayFlex,
            variablesButtonStop.buttonStopIconStopStyleBeforeClick
        );
    }

    removeConfigurationButtonStop() {
        if (isElementsExistById(variablesButtonStop.buttonStopDisplayFlex))

            removeElementClassNameById(
                variablesButtonStop.buttonStopDisplayFlex,
                variablesButtonStop.buttonStopInactive
            );
    }
}