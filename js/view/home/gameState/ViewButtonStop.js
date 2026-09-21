import {
    createElementButton,
    createElementDiv,
    createElementI,
    isElementsExistById,
    removeElementClassNameById,
    addElementClassNameById,
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

        addElementClassNameById(
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

        addElementClassNameById(
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleBeforeClick
        );
    }

    setIconStopStyleBeforeClick() {

        if (isElementsExistById(variablesButtonStop.buttonStopIconStopId)) {

            removeElementClassNameById(
                variablesButtonStop.buttonStopIconStopId,
                variablesButtonStop.buttonStopIconStopStyleAfterClick
            );

            addElementClassNameById(
                variablesButtonStop.buttonStopIconStopId,
                variablesButtonStop.buttonStopIconStopStyleBeforeClick
            );


        }
    }

    setIconStopStyleAfterClick() {

        if (isElementsExistById(variablesButtonStop.buttonStopIconStopId)){
            removeElementClassNameById(
                variablesButtonStop.buttonStopIconStopId,
                variablesButtonStop.buttonStopIconStopStyleBeforeClick
            );

            addElementClassNameById(
                variablesButtonStop.buttonStopIconStopId,
                variablesButtonStop.buttonStopIconStopStyleAfterClick
            );
        }

    }

    setIconStopStyleForGameOver() {

        removeElementClassNameById(
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleAfterClick
        );

        addElementClassNameById(
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleBeforeClick
        );
    }

    removeButtonStopStyleInactive() {

        if (isElementsExistById(variablesButtonStop.buttonStopDisplayFlex)){

            removeElementClassNameById(
                variablesButtonStop.buttonStopDisplayFlex,
                variablesButtonStop.buttonStopInactive
            );
        }
    }
}