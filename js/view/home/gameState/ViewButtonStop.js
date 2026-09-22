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
        // createElementI(
        //     variablesButtonStop.buttonStopDisplayFlex,
        //     variablesButtonStop.buttonStopIconStopId,
        //     variablesButtonStop.buttonStopIconStopStyleSolid,
        //     variablesButtonStop.buttonStopIconStop
        // );

        this.createIconStop();

        // addElementClassNameById(
        //     variablesButtonStop.buttonStopIconStopId,
        //     variablesButtonStop.buttonStopIconStopStyleBeforeClick
        // );

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

            // removeElementClassNameById(
            //     variablesButtonStop.buttonStopIconStopId,
            //     variablesButtonStop.buttonStopIconStopStyleAfterClick
            // );

            this.removeIconStopStyleAfterClick();

            // addElementClassNameById(
            //     variablesButtonStop.buttonStopIconStopId,
            //     variablesButtonStop.buttonStopIconStopStyleBeforeClick
            // );

            this.addIconStopStyleBeforeClick();

        }
    }

    setIconStopStyleAfterClick() {

        if (isElementsExistById(variablesButtonStop.buttonStopIconStopId)){

            // removeElementClassNameById(
            //     variablesButtonStop.buttonStopIconStopId,
            //     variablesButtonStop.buttonStopIconStopStyleBeforeClick
            // );

            this.removeIconStopStyleBeforeClick();

            // addElementClassNameById(
            //     variablesButtonStop.buttonStopIconStopId,
            //     variablesButtonStop.buttonStopIconStopStyleAfterClick
            // );

            this.addIconStopStyleAfterClick();
        }

    }

    setIconStopStyleForGameOver() {

        // removeElementClassNameById(
        //     variablesButtonStop.buttonStopIconStopId,
        //     variablesButtonStop.buttonStopIconStopStyleAfterClick
        // );

        this.removeIconStopStyleAfterClick();

        // addElementClassNameById(
        //     variablesButtonStop.buttonStopIconStopId,
        //     variablesButtonStop.buttonStopIconStopStyleBeforeClick
        // );

        this.addIconStopStyleBeforeClick();
    }

    removeButtonStopStyleInactive() {

        if (isElementsExistById(variablesButtonStop.buttonStopDisplayFlex)){

            removeElementClassNameById(
                variablesButtonStop.buttonStopDisplayFlex,
                variablesButtonStop.buttonStopInactive
            );
        }
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
}