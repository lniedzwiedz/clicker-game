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
    setElementClassName(menuTitle, menuTitle)
    createElementP(menuTitle, menuTitleText);
    setElementClassName(menuTitleText, menuTitleText);
    setElementTextById(menuTitleText, menuTitleTextDisplay);
}