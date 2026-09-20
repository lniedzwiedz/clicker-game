import {
    createElementDiv, createElementDivWithTheSameIdAndClassName, createElementP, setElementClassNameSameAsIdAndSetText
} from "../../common/function/commonFunctions.js";

import * as variablesAuthor from "../../common/variable/footer/variablesAuthor.js";


export class ViewAuthor{

    createAuthor(){
        this.createAuthorMain();
        this.createAuthorText();
    }

    createAuthorMain(){

        createElementDiv(
            variablesAuthor.containerFooterMainParts,
            variablesAuthor.footerAuthorDisplayTextFlex
        );
    }

    createAuthorParts(){

    }

    createAuthorText(){

        createElementP(
            variablesAuthor.footerAuthorDisplayTextFlex,
            variablesAuthor.footerAuthorStyleText
        );

        setElementClassNameSameAsIdAndSetText(
            variablesAuthor.footerAuthorStyleText,
            variablesAuthor.footerAuthorText
        );
    }


    // createFooterAuthor() {
    //
    //     createElementDivWithTheSameIdAndClassName(
    //         variablesAuthor.containerFooterMainParts,
    //         variablesAuthor.footerAuthorDisplayTextFlex
    //     );
    //
    //     createElementP(
    //         variablesAuthor.footerAuthorDisplayTextFlex,
    //         variablesAuthor.footerAuthorStyleText
    //     );
    //
    //     setElementClassNameSameAsIdAndSetText(
    //         variablesAuthor.footerAuthorStyleText,
    //         variablesAuthor.footerAuthorData
    //     );
    // }
}