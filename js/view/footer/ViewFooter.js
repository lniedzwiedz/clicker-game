import {
    createElementDiv,
    createElementDivWithTheSameIdAndClassName,
    createElementP,
    setElementClassNameSameAsIdAndSetText
} from "../../common/function/commonFunctions.js";

import * as variablesFooter from "../../common/variable/footer/variablesFooter.js";
import * as variablesMain from "../../common/variable/variablesMain.js";
import {containerMainParts} from "../../common/variable/footer/variablesFooter.js";

export class ViewFooter {

    createFooter() {
        this.createContainerFooterMain();
        this.createFooterAuthor();
    }

    createContainerFooterMain() {


        createElementDiv(
            variablesFooter.containerMainParts,
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