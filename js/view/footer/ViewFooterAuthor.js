import {
    createElementDiv,
    createElementP,
    addElementClassNameById,
    addElementClassNamedAndText
} from "../../common/function/commonFunctions.js";

import * as variablesFooterAuthor from "../../common/variable/footer/variablesFooterAuthor.js";


export class ViewFooterAuthor {

    createContainerFooterAuthor() {
        this.createContainerFooterAuthorPrimary();
        this.createFooterAuthor();
    }

    createContainerFooterAuthorPrimary() {
        this.createContainerFooterAuthorMain();
    }

    createContainerFooterAuthorMain() {
        createElementDiv(
            variablesFooterAuthor.containerFooterMainPartsId,
            variablesFooterAuthor.containerFooterAuthorMainId
        );
    }

    createFooterAuthor() {
        this.createFooterAuthorMain();
        this.createFooterAuthorText();
    }

    createFooterAuthorMain() {
        createElementDiv(
            variablesFooterAuthor.containerFooterAuthorMainId,
            variablesFooterAuthor.footerAuthorId
        );

        addElementClassNameById(
            variablesFooterAuthor.footerAuthorId,
            variablesFooterAuthor.footerAuthorStyleDisplayFlex
        );
    }

    createFooterAuthorText() {
        createElementP(
            variablesFooterAuthor.footerAuthorId,
            variablesFooterAuthor.footerAuthorTextId
        );

        addElementClassNamedAndText(
            variablesFooterAuthor.footerAuthorTextId,
            variablesFooterAuthor.footerAuthorStyleText,
            variablesFooterAuthor.footerAuthorText
        );
    }
}