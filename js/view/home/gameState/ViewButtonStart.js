import {
    createElementButton,
    createElementDiv,
    createElementI,
    removeElementClassNameById,
    addElementClassNameById,
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonStart from "../../../common/variable/home/gameState/variablesButtonStart.js";


export class ViewButtonStart {

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
        this.createButtonStartIconPlay();
    }

    createButtonStartMain() {
        createElementButton(
            variablesButtonStart.containerButtonStartMain,
            variablesButtonStart.buttonStartDisplayFlex
        );

        addElementClassNameById(
            variablesButtonStart.buttonStartDisplayFlex,
            variablesButtonStart.buttonStartStyle
        );
    }

    createButtonStartIconPlay() {
        // createElementI(
        //     variablesButtonStart.buttonStartDisplayFlex,
        //     variablesButtonStart.buttonStarIconPlayId,
        //     variablesButtonStart.buttonStartIconPlayStyleSolid,
        //     variablesButtonStart.buttonStartIconPlay
        // );

        this.createIconPlay();

        // addElementClassNameById(
        //     variablesButtonStart.buttonStarIconPlayId,
        //     variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        // );

        this.addIconPlayStyleBeforeClick();
    }

    createIconPlay(){

        createElementI(
            variablesButtonStart.buttonStartDisplayFlex,
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleSolid,
            variablesButtonStart.buttonStartIconPlay
        );
    }


    setIconStartStyleBeforeClick() {
        // if (isElementsExistById(variablesButtonStart.buttonStarIconPlayId)) {

            // removeElementClassNameById(
            //     variablesButtonStart.buttonStarIconPlayId,
            //     variablesButtonStart.buttonStartIconPlayStyleAfterClick
            // );

            this.removeIconPlayStyleAfterClick();
            this.addIconPlayStyleBeforeClick();

            // this.removeIconPlayStyleBeforeClick();
            // this.addIconPlayStyleAfterClick()
        // }
    }

    setIconStartStyleAfterClick() {

        // removeElementClassNameById(
        //     variablesButtonStart.buttonStarIconPlayId,
        //     variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        // );

        this.removeIconPlayStyleBeforeClick();

        // addElementClassNameById(
        //     variablesButtonStart.buttonStarIconPlayId,
        //     variablesButtonStart.buttonStartIconPlayStyleAfterClick
        // );

        this.addIconPlayStyleAfterClick();
    }

    addIconPlayStyleBeforeClick(){

        addElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        );
    }

    removeIconPlayStyleBeforeClick(){

        removeElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        );
    }

    addIconPlayStyleAfterClick(){

        addElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleAfterClick
        );
    }

    removeIconPlayStyleAfterClick(){

        removeElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleAfterClick
        );
    }

    setIconStartStyleForGameOver() {

        // removeElementClassNameById(
        //     variablesButtonStart.buttonStarIconPlayId,
        //     variablesButtonStart.buttonStartIconPlayStyleAfterClick
        // );

        this.removeIconPlayStyleAfterClick()

        // addElementClassNameById(
        //     variablesButtonStart.buttonStarIconPlayId,
        //     variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        // );

        this.addIconPlayStyleBeforeClick();
    }
}