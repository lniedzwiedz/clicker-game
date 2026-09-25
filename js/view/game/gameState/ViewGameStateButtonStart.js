import {
    createElementButton,
    createElementDiv,
    createElementI,
    removeElementClassNameById,
    addElementClassNameById,
    addElementClassNames,
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonStart from "../../../common/variable/game/gameState/variablesGameStateButtonStart.js";


export class ViewGameStateButtonStart {

    createContainerButtonStart() {
        this.createContainerButtonStartMain();
        this.createButtonStart();
    }

    createContainerButtonStartMain() {
        createElementDiv(
            variablesButtonStart.containerGameStateMainPartsId,
            variablesButtonStart.containerButtonStartMainId
        );
    }

    createButtonStart() {
        this.createButtonStartMain();
        this.createButtonStartIconPlay();
    }

    createButtonStartMain() {

        createElementButton(
            variablesButtonStart.containerButtonStartMainId,
            variablesButtonStart.buttonStartId
        );

        addElementClassNames(
            variablesButtonStart.buttonStartId,
            variablesButtonStart.buttonStartStyleDisplayFlex,
            variablesButtonStart.buttonStartStyle
        );
    }

    createButtonStartIconPlay() {
        this.createIconPlay();
        this.addIconPlayStyleBeforeClick();
    }

    createIconPlay() {

        createElementI(
            variablesButtonStart.buttonStartId,
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleSolid,
            variablesButtonStart.buttonStartIconPlay
        );
    }

    setIconStartStyleBeforeClick() {
        this.removeIconPlayStyleAfterClick();
        this.addIconPlayStyleBeforeClick();
    }

    setIconStartStyleAfterClick() {
        this.removeIconPlayStyleBeforeClick();
        this.addIconPlayStyleAfterClick();
    }

    setIconStartStyleForGameOver() {
        this.removeIconPlayStyleAfterClick()
        this.addIconPlayStyleBeforeClick();
    }

    addIconPlayStyleBeforeClick() {

        addElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        );
    }

    removeIconPlayStyleBeforeClick() {

        removeElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        );
    }

    addIconPlayStyleAfterClick() {

        addElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleAfterClick
        );
    }

    removeIconPlayStyleAfterClick() {

        removeElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleAfterClick
        );
    }
}