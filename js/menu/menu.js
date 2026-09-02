let clickNumberButton = 1;

function createMenu() {
    createContainerMainMenu();
    createContainerMainMenuParts();
    createContainerManuTitle();
    createContainerManuConfiguration();
}

function createContainerMainMenu() {
    createContainerMainElements(containerMainSectionMenu, sectionMenu, containerSectionMenu, containerMenuMain);
}

function createContainerMainMenuParts() {
    createElementDivWithTheSamIdAndClassName(containerMenuMain, containerMenuMainParts);
}

function createContainerManuTitle() {
    createElementDivWithTheSamIdAndClassName(containerMenuMainParts, containerMenuTitleMain);
    createElementDiv(containerMenuTitleMain, menuTitle);
    setElementClassNameBy(menuTitle, menuTitle)
    createElementP(menuTitle, menuTitleText);
    setElementClassNameBy(menuTitleText, menuTitleText);
    setElementTextById(menuTitleText, menuTitleTextDisplay);
}