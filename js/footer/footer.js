function createFooter() {
    createContainerMainFooter();
    createContainerFooterAuthor();
}

function createContainerMainFooter() {
    createContainerMainElements(containerMainSectionFooter, sectionFooter, containerSectionFooter, containerMainFooter);
    setElementClassNameById(containerSectionFooter, containerSectionFooter);
}

function createContainerFooterAuthor() {
    createElementDivWithTheSamIdAndClassName(containerMainFooter, containerFooterAuthor);
    createElementP(containerFooterAuthor, footerAuthor);
    setElementClassNameSameAsIdAndText(footerAuthor, footerAuthorData);
}