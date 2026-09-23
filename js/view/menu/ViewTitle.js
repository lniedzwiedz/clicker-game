import {
    createElementDiv,
    createElementP,
    addElementClassNamedAndText
} from "../../common/function/commonFunctions.js";

import * as variablesTitle from "../../common/variable/menu/variablesTitle.js";


export class ViewTitle {

    createContainerTitle() {
        this.createContainerTitleMain();
        this.createElementTitleMain();
        this.createTitleText();
    }

    createContainerTitleMain() {

        createElementDiv(
            variablesTitle.containerMenuMainParts,
            variablesTitle.containerTitleMain
        );
    }

    createElementTitleMain() {

        createElementDiv(
            variablesTitle.containerTitleMain,
            variablesTitle.titleDisplayTitleFlex
        );
    }

    createTitleText() {

        createElementP(
            variablesTitle.titleDisplayTitleFlex,
            variablesTitle.titleStyleTitleText
        );

        addElementClassNamedAndText(
            variablesTitle.titleStyleTitleText,
            variablesTitle.titleStyleTitleText,
            variablesTitle.titleDisplayName
        );
    }
}