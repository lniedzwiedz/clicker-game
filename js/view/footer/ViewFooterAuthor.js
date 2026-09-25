import {
    createElementDiv,
    createElementP,
    addElementClassNameById,
    addElementClassNamedAndText
} from "../../common/function/commonFunctions.js";

import * as variablesAuthor from "../../common/variable/footer/variablesFooterAuthor.js";


export class ViewFooterAuthor {

    createContainerAuthor() {
        this.createContainerAuthorMain();
        this.createContainerAuthorMainParts();
        this.createAuthorText();
    }

    createContainerAuthorMain() {

        createElementDiv(
            variablesAuthor.containerFooterMainPartsId,
            variablesAuthor.containerAuthorMainId
        );
    }

    createContainerAuthorMainParts() {

        createElementDiv(
            variablesAuthor.containerAuthorMainId,
            variablesAuthor.authorId
        );

        addElementClassNameById(
            variablesAuthor.authorId,
            variablesAuthor.authorStyleDisplayFlex
        );
    }

    createAuthorText() {

        createElementP(
            variablesAuthor.authorId,
            variablesAuthor.authorTextId
        );

        addElementClassNamedAndText(
            variablesAuthor.authorTextId,
            variablesAuthor.authorStyleText,
            variablesAuthor.authorText
        );
    }
}