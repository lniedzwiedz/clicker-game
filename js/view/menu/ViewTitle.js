import {
    createElementDiv,
    createElementP,
    addElementClassNamedAndText,
    addElementClassNameById
} from "../../common/function/commonFunctions.js";

import * as variablesTitle from "../../common/variable/menu/variablesTitle.js";


export class ViewTitle {

    createContainerTitle() {
        this.createContainerTitleMain();
        this.createContainerTitleMainParts();
        this.createTitleText();
    }

    createContainerTitleMain() {

        createElementDiv(
            variablesTitle.containerMenuMainPartsId,
            variablesTitle.containerTitleMainId
        );
    }

    createContainerTitleMainParts() {

        createElementDiv(
            variablesTitle.containerTitleMainId,
            variablesTitle.titleId
        );

        addElementClassNameById(
            variablesTitle.titleId,
            variablesTitle.titleStyleDisplayFlex
        );
    }

    createTitleText() {

        createElementP(
            variablesTitle.titleId,
            variablesTitle.titleTextId
        );

        addElementClassNamedAndText(
            variablesTitle.titleTextId,
            variablesTitle.titleStyleText,
            variablesTitle.titleText
        );
    }
}