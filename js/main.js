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
    createElementDivWithTheSamIdAndClassName(containerMainHome, containerGameElements);
    createElementDivWithTheSamIdAndClassName(containerGameElements, containerGameFiledButtonPlay);
    createElementDivWithTheSamIdAndClassName(containerGameElements, containerGameFiledButtonMain);
    createElementDivWithTheSamIdAndClassName(containerGameElements, containerGameFiledStatisticsTime);
    createElementDivWithTheSamIdAndClassName(containerGameElements, containerGameFiledStatisticsFraud);
}

function createContainerGameElements() {
    createMainContainerGameElements();
    createGameFieldPButtonPlay();
    createGameFieldPButtonMain();
    // createGameFieldStatisticsTime();
    // createGameFieldStatisticsFraud();
}

console.log("Clicker game: version 20260902v48");