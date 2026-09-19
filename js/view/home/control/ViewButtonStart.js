import {
    createElementButton,
    createElementDiv,
    createElementI,
    getElementById,
    isElementsExistById,
    removeElementClassNameById,
    setElementClassNameById,
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

        removeElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        );

        setElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleAfterClick
        );
    }

    setConfigurationGameOver() {

        removeElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleAfterClick
        );

        setElementClassNameById(
            variablesButtonStart.buttonStarIconPlayId,
            variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        );

    }

    setConfigurationButtonStartAfterClick() {

        // let elementId =
        //     getElementById(
        //         variablesButtonStart.buttonStarIconPlayId
        //     );
        //
        // removeElementClassNameById(
        //     elementId,
        //     variablesButtonStart.buttonStartIconPlayStyleBeforeClick
        // );
        //
        // setElementClassNameById(
        //     elementId,
        //     variablesButtonStart.buttonStartIconPlayStyleAfterClick
        // );
    }
}