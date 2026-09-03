import {
    createContainerMainElements,
    createElementDivWithTheSameIdAndClassName, createElementP,
    setElementClassNameById, setElementClassNameSameAsIdAndSetText
} from "../common/function/commonFunctions";
import {containerMainSectionFooter} from "../common/variable/main/variablesMain";
import {
    containerFooterAuthor,
    containerMainFooter,
    containerSectionFooter, footerAuthor, footerAuthorData,
    sectionFooter
} from "../common/variable/footer/variablesFooter";

export class ViewFooter {

    createFooter() {
        this.createContainerMainFooter();
        this.createContainerFooterAuthor();
    }

    createContainerMainFooter() {
        createContainerMainElements(containerMainSectionFooter, sectionFooter, containerSectionFooter, containerMainFooter);
        setElementClassNameById(containerSectionFooter, containerSectionFooter);
    }

    createContainerFooterAuthor() {
        createElementDivWithTheSameIdAndClassName(containerMainFooter, containerFooterAuthor);
        createElementP(containerFooterAuthor, footerAuthor);
        setElementClassNameSameAsIdAndSetText(footerAuthor, footerAuthorData);
    }
}