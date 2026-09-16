import {
    createElementDiv,
    createElementDivWithTheSameIdAndClassName,
    createElementP,
    setElementClassNameSameAsIdAndSetText
} from "../../common/function/commonFunctions.js";

import * as variablesFooter from "../../common/variable/footer/variablesFooter.js";

export class ViewFooter {

    createFooter() {
        this.createContainerMainFooter();
        this.createFooterAuthor();
    }

    createContainerMainFooter() {

        createElementDiv(
            variablesFooter.containerSectionFooterMain,
            variablesFooter.containerFooterMain
        );

        createElementDiv(
            variablesFooter.containerFooterMain,
            variablesFooter.containerFooterMainParts
        );
    }

    createFooterAuthor() {

        createElementDivWithTheSameIdAndClassName(
            variablesFooter.containerFooterMainParts,
            variablesFooter.footerAuthorDisplayTextFlex
        );

        createElementP(
            variablesFooter.footerAuthorDisplayTextFlex,
            variablesFooter.footerAuthorStyleText
        );

        setElementClassNameSameAsIdAndSetText(
            variablesFooter.footerAuthorStyleText,
            variablesFooter.footerAuthorData
        );
    }
}