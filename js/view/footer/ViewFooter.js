import {
    createContainerMainElements,
    createElementDivWithTheSameIdAndClassName,
    createElementP,
    setElementClassNameById,
    setElementClassNameSameAsIdAndSetText
} from "../../common/function/commonFunctions.js";

import * as variablesFooter from "../../common/variable/footer/variablesFooter.js";
import * as variablesMain from "../../common/variable/main/variablesMain.js";

export class ViewFooter {

    createFooter() {
        this.createContainerMainFooter();
        this.createContainerFooterAuthor();
    }

    createContainerMainFooter() {
        createContainerMainElements(variablesMain.containerFooterMain, variablesFooter.sectionFooter, variablesFooter.containerFooterMainParts, variablesFooter.containerMainFooter);
        setElementClassNameById(variablesFooter.containerFooterMainParts, variablesFooter.containerFooterMainParts);
    }

    createContainerFooterAuthor() {
        createElementDivWithTheSameIdAndClassName(variablesFooter.containerMainFooter, variablesFooter.containerFooterAuthorMain);
        createElementP(variablesFooter.containerFooterAuthorMain, variablesFooter.footerAuthor);
        setElementClassNameSameAsIdAndSetText(variablesFooter.footerAuthor, variablesFooter.footerAuthorData);
    }
}