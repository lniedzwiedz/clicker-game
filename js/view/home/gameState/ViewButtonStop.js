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
        this.createIconStop();
        this.addIconStopStyleBeforeClick();
    }

    createIconStop(){

        createElementI(
            variablesButtonStop.buttonStopDisplayFlex,
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleSolid,
            variablesButtonStop.buttonStopIconStop
        );
    }

    setIconStopStyleBeforeClick() {

        if (isElementsExistById(variablesButtonStop.buttonStopIconStopId)) {

            this.removeIconStopStyleAfterClick();
            this.addIconStopStyleBeforeClick();
        }
    }

    setIconStopStyleAfterClick() {

        if (isElementsExistById(variablesButtonStop.buttonStopIconStopId)){

            this.removeIconStopStyleBeforeClick();
            this.addIconStopStyleAfterClick();
        }
    }

    setIconStopStyleForGameOver() {
        this.removeIconStopStyleAfterClick();
        this.addIconStopStyleBeforeClick();
    }

    addIconStopStyleBeforeClick(){

        addElementClassNameById(
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleBeforeClick
        );
    }

    removeIconStopStyleBeforeClick(){

        removeElementClassNameById(
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleBeforeClick
        );
    }

    addIconStopStyleAfterClick(){

        addElementClassNameById(
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleAfterClick
        );
    }

    removeIconStopStyleAfterClick(){

        removeElementClassNameById(
            variablesButtonStop.buttonStopIconStopId,
            variablesButtonStop.buttonStopIconStopStyleAfterClick
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