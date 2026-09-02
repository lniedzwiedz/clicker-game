function createFooter() {
    createContainerMainFooter();
    createContainerFooterAuthor();
}

function createContainerMainFooter() {
    createContainerMainElements(containerMainSectionFooter, sectionFooter, containerSectionFooter, containerMainFooter);
    setElementClassNameBy(containerSectionFooter, containerSectionFooter);
}

function createContainerFooterAuthor() {
    createElementDivWithTheSamIdAndClassName(containerMainFooter, containerFooterAuthor);
    createElementP(containerFooterAuthor, footerAuthor);
    setElementClassNameSameAsIdAndText(footerAuthor, footerAuthorData);
}