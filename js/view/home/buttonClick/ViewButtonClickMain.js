import {
    createElementButton,
    addElementClassNameById,
    setElementTextById,
    removeElementClassNameById,
    createElementDiv, createElementP
} from "../../../common/function/commonFunctions.js";

import * as variablesMain from "../../../common/variable/variablesMain.js";
import * as variablesButtonClick from "../../../common/variable/home/buttonClick/variablesButtonClickMain.js";
import {
    buttonClickDisplayDefaultText,
    buttonClickTextId
} from "../../../common/variable/home/buttonClick/variablesButtonClickMain.js";


export class ViewButtonClickMain {

    createButtonCLickColor() {
        this.createContainerButtonCLickMain();
        this.createButtonCLick();
    }

    createContainerButtonCLickMain() {
        createElementDiv(
            variablesButtonClick.containerHomeMainParts,
            variablesButtonClick.containerButtonClickMain);
    }

    createButtonCLick() {
        this.createButtonCLickMain();
    }

    createButtonCLickMain() {

        createElementButton(
            variablesButtonClick.containerButtonClickMain,
            variablesButtonClick.buttonClickDisplayFlex
        );

        addElementClassNameById(
            variablesButtonClick.buttonClickDisplayFlex,
            variablesButtonClick.buttonClickDisplayFlex
        );
    }



    // setButtonClickColorRandomColor(gameRandomColor) {
    //     variablesMain.rootVariables.style.setProperty(
    //         variablesMain.cssGameFiledButtonPlayColor,
    //         gameRandomColor
    //     );
    // }
    //
    // setButtonClickColor() {
    //     this.setButtonClickColorRandomColor(variablesMain.gameFiledButtonPlayStartColor);
    // }



}