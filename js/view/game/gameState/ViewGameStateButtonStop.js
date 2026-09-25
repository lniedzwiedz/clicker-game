import {
    createElementButton,
    createElementDiv,
    createElementI,
    isElementsExistById,
    removeElementClassNameById,
    addElementClassNameById,
    addElementClassNames,
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonStop from "../../../common/variable/game/gameState/variablesGameStateButtonStop.js";


export class ViewGameStateButtonStop {

    createContainerButtonStop() {

        if (!isElementsExistById(variablesButtonStop.containerButtonStopMainId)) {

            this.createContainerButtonStopMain();
            this.createButtonStop();
        }
    }

    createContainerButtonStopMain() {
        createElementDiv(
            variablesButtonStop.containerGameStateMainPartsId,
            variablesButtonStop.containerButtonStopMainId
        );
    }

    createButtonStop() {
        this.createButtonStopMain();
        this.createButtonStopIcon();
    }

    createButtonStopMain() {

        createElementButton(
            variablesButtonStop.containerButtonStopMainId,
            variablesButtonStop.buttonStopId
        );

        // addElementClassNameById(
        //     variablesButtonStop.buttonStopId,
        //     variablesButtonStop.buttonStopStyle
        // );

        addElementClassNames(
            variablesButtonStop.buttonStopId,
            variablesButtonStop.buttonStopStyleDisplayFlex,
            variablesButtonStop.buttonStopStyle
        );
    }

    createButtonStopIcon() {
        this.createIconStop();
        this.addIconStopStyleBeforeClick();
    }

    createIconStop(){

        createElementI(
            variablesButtonStop.buttonStopId,
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

    setButtonStopStyleInactive() {

        // if (isElementsExistById(variablesButtonStop.buttonStopDisplayFlex)){

           addElementClassNameById(
                variablesButtonStop.buttonStopId,
                variablesButtonStop.buttonStopStyleInactive
            );
        // }
    }

    removeButtonStopStyleInactive() {

        if (isElementsExistById(variablesButtonStop.buttonStopId)){

            removeElementClassNameById(
                variablesButtonStop.buttonStopId,
                variablesButtonStop.buttonStopStyleInactive
            );
        }
    }
}