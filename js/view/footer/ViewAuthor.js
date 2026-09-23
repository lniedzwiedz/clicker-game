import {
    createElementDiv,
    createElementP,
    addElementClassNameSameAsIdAndSetText
} from "../../common/function/commonFunctions.js";

import * as variablesAuthor from "../../common/variable/footer/variablesAuthor.js";


export class ViewAuthor {

    createAuthor() {
        this.createContainerAuthorMain();
        this.createElementAuthorMain();
        this.createAuthorText();
    }

    createContainerAuthorMain() {

        createElementDiv(
            variablesAuthor.containerFooterMainParts,
            variablesAuthor.containerAuthorMain
        );
    }

    createElementAuthorMain() {
        createElementDiv(
            variablesAuthor.containerAuthorMain,
            variablesAuthor.footerAuthorDisplayTextFlex
        );
    }

    createAuthorText() {

        createElementP(
            variablesAuthor.footerAuthorDisplayTextFlex,
            variablesAuthor.footerAuthorStyleText
        );

        addElementClassNameSameAsIdAndSetText(
            variablesAuthor.footerAuthorStyleText,
            variablesAuthor.footerAuthorDisplayText
        );
    }
}