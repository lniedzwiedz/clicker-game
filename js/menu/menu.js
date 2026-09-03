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
    createElementDivWithTheSameIdAndClassName(containerMenuMain, containerMenuMainParts);
}

function createContainerManuTitle() {
    createElementDivWithTheSameIdAndClassName(containerMenuMainParts, containerMenuTitleMain);
    createElementDivWithTheSameIdAndClassName(containerMenuTitleMain, menuTitle);
    createElementP(menuTitle, menuTitleText);
    setElementClassNamedAndText(menuTitleText, menuTitleText, menuTitleTextDisplay);
}