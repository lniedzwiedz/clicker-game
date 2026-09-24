import {
    createElementDiv,
    createElementP,
    addElementClassNameSameAsIdAndSetText, addElementClassNameById
} from "../../common/function/commonFunctions.js";

import * as variablesAuthor from "../../common/variable/footer/variablesAuthor.js";
import {footerAuthorStyleDisplayFlex} from "../../common/variable/footer/variablesAuthor.js";


export class ViewAuthor {

    createAuthor() {
        this.createContainerAuthorMain();
        this.createContainerAuthorMainParts();
        this.createAuthorText();
    }

    createContainerAuthorMain() {

        createElementDiv(
            variablesAuthor.containerFooterMainParts,
            variablesAuthor.containerAuthorMainId
        );
    }

    createContainerAuthorMainParts() {
        createElementDiv(
            variablesAuthor.containerAuthorMainId,
            variablesAuthor.footerAuthorId
        );

        addElementClassNameById(
            variablesAuthor.footerAuthorId,
            variablesAuthor.footerAuthorStyleDisplayFlex
        );
    }

    createAuthorText() {

        createElementP(
            variablesAuthor.footerAuthorId,
            variablesAuthor.footerAuthorTextId
        );

        addElementClassNameSameAsIdAndSetText(
            variablesAuthor.footerAuthorTextId,
            variablesAuthor.footerAuthorText
        );
    }
}