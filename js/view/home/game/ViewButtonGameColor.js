import {
    addElementClassNameById,
    setElementStyleByDocumentQuerySelectorRoot
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonGameColor from "../../../common/variable/home/game/variablesButtonGameColor.js";


export class ViewButtonGameColor {


    setButtonGameBackgroundColorClass() {

        addElementClassNameById(
            variablesButtonGameColor.buttonGameDisplayFlex,
            variablesButtonGameColor.buttonGameStyleBackgroundColor
        )
    }

    setButtonGameBackgroundColorAtStart() {

        setElementStyleByDocumentQuerySelectorRoot(
            variablesButtonGameColor.varCSSButtonGameStyleBackgroundColor,
            variablesButtonGameColor.buttonGameStyleInitialBackgroundColor
        );
    }

    setButtonGameBackgroundColorForRound(roundColor) {
        this.setButtonGameColor(roundColor);
    }

    setButtonGameColor(roundColor) {
        // variablesButtonGameColor.rootVariables.style.
        // setProperty(
        //     variablesButtonGameColor.varCSSButtonGameStyleBackgroundColor,
        //     roundColor
        // );

        setElementStyleByDocumentQuerySelectorRoot(
            variablesButtonGameColor.varCSSButtonGameStyleBackgroundColor,
            roundColor
        )
    }

    setConfigurationButtonGameColorForGameOver() {
        this.setButtonGameColor(
            variablesButtonGameColor.buttonGameStyleBackgroundColorGameOver
        );
    }
}