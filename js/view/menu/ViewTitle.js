import {
    createElementDiv,
    createElementP,
    setElementClassNamedAndText
} from "../../common/function/commonFunctions.js";

import * as variablesTitle from "../../common/variable/menu/variablesTitle.js";


export class ViewTitle {

    createContainerTitle() {

        createElementDiv(
            variablesTitle.containerMenuMainParts,
            variablesTitle.containerTitleMain
        );

        createElementDiv(
            variablesTitle.containerTitleMain,
            variablesTitle.titleDisplayTitleFlex
        );

        createElementP(
            variablesTitle.titleDisplayTitleFlex,
            variablesTitle.titleStyleTitleText
        );

        setElementClassNamedAndText(
            variablesTitle.titleStyleTitleText,
            variablesTitle.titleStyleTitleText,
            variablesTitle.titleDisplayName)
        ;
    }
}