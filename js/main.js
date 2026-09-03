function setContainerMainSection() {
    createElementDiv(containerMain, containerMainSectionMenu);
    createElementDiv(containerMain, containerMainSectionActions);
    createElementDiv(containerMain, containerMainSectionFooter);
}

setConfigurationWebpageStart();

function setConfigurationWebpageStart() {
    setContainerMainSection();
    createMenu();
    createSubpageHome();
    createFooter();
}

// main section
function createSubpageHome() {
    createMainContainerHome();
    createContainerGameElements();
}

function createMainContainerHome() {
    createContainerMainElements(containerMainSectionActions, sectionHome, containerMainSectionHome, containerMainHome);
}

function createMainContainerGameElements() {
    createElementDivWithTheSameIdAndClassName(containerMainHome, containerGameElements);
    createElementDivWithTheSameIdAndClassName(containerGameElements, containerGameFiledButtonPlay);
    createElementDivWithTheSameIdAndClassName(containerGameElements, containerGameFiledButtonMain);
    createElementDivWithTheSameIdAndClassName(containerGameElements, containerGameFiledStatisticsTime);
    createElementDivWithTheSameIdAndClassName(containerGameElements, containerGameFiledStatisticsFraud);
}

function createContainerGameElements() {
    createMainContainerGameElements();
    createGameFieldPButtonPlay();
    createGameFieldPButtonMain();
    // createGameFieldStatisticsTime();
    // createGameFieldStatisticsFraud();
}

console.log("Clicker game: version 20260903v50");