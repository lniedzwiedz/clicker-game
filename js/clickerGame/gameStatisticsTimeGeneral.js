function createContainerStatisticsTime(timeKind, newStatisticsTimeKindTextDisplay) {
    // container main
    let newContainerGameFiledStatisticsTimeKind = createCSSVariableName(containerGameFiledStatisticsTimeKind, timeKind);
    createElementDiv(containerGameFiledStatisticsTimeParts, newContainerGameFiledStatisticsTimeKind);

    let newContainerGameFiledStatisticsTimeKindParts = createCSSVariableName(containerGameFiledStatisticsTimeKindParts, timeKind);
    createElementDiv(newContainerGameFiledStatisticsTimeKind, newContainerGameFiledStatisticsTimeKindParts);
    setElementClassNameById(newContainerGameFiledStatisticsTimeKindParts, containerGameFiledCommonParts);
    setElementClassNameById(newContainerGameFiledStatisticsTimeKindParts, containerGameFiledCommonParts);

    // game play - time update
    let newContainerGameFiledStatisticsTimeKindGamePlay = createCSSVariableName(containerGameFiledStatisticsTimeKindGamePlay, timeKind);
    createElementDiv(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindGamePlay);
    setElementClassNameById(newContainerGameFiledStatisticsTimeKindGamePlay, containerGameFiledCommonGamePlayUpdate);

    let newGameFiledStatisticsTimeKindGamePlay = createCSSVariableName(gameFiledStatisticsTimeKindGamePlay, timeKind);
    createElementDiv(newContainerGameFiledStatisticsTimeKindGamePlay, newGameFiledStatisticsTimeKindGamePlay);
    setElementClassNameById(newGameFiledStatisticsTimeKindGamePlay, commonGameFiledDisplay);

    let newStatisticsTimeKindGamePlay = createCSSVariableName(statisticsTimeKindGamePlay, timeKind);
    createElementDiv(newGameFiledStatisticsTimeKindGamePlay, newStatisticsTimeKindGamePlay);
    setElementClassNameById(createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), commonGamePlayTextUpdate);
    setElementClassNameById(createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), commonGamePlayUpdateTextTime);
    setElementClassNameById(createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), newStatisticsTimeKindGamePlay);

    let newStatisticsTimeKindGamePlayTextDisplay = createCSSVariableName(statisticsTimeKindGamePlayDisplay, timeKind);
    setElementTextById(createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), newStatisticsTimeKindGamePlayTextDisplay);

    // text - static
    let newContainerGameFiledStatisticsTimeKindText = createCSSVariableName(containerGameFiledStatisticsTimeKindText, timeKind);
    createElementDiv(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindText);
    setElementClassNameById(newContainerGameFiledStatisticsTimeKindText, containerGameFiledCommonStaticText);

    let newGameFiledStatisticsTimeKindText = createCSSVariableName(gameFiledStatisticsTimeKindText, timeKind);
    createElementDiv(newContainerGameFiledStatisticsTimeKindText, newGameFiledStatisticsTimeKindText);
    setElementClassNameById(newGameFiledStatisticsTimeKindText, commonGameFiledDisplay);

    let newStatisticsTimeKindText = createCSSVariableName(statisticsTimeKindText, timeKind);
    createElementDiv(newGameFiledStatisticsTimeKindText, newStatisticsTimeKindText);
    setElementClassNameById(newStatisticsTimeKindText, commonStaticText);
    setElementClassNameById(newStatisticsTimeKindText, newStatisticsTimeKindText);
    setElementTextById(newStatisticsTimeKindText, newStatisticsTimeKindTextDisplay);
}

function createContainerStatisticsTimeBest() {
    createContainerStatisticsTime(timeKindBest, statisticsTimeBestTextDisplay);
}

function createContainerStatisticsTimeMin() {
    createContainerStatisticsTime(timeKindMin, statisticsTimeMinTextDisplay);
}

function createContainerStatisticsTimeAvg() {
    createContainerStatisticsTime(timeKindAvg, statisticsTimeAvgTextDisplay);
}

function createContainerStatisticsTimeMax() {
    createContainerStatisticsTime(timeKindMax, statisticsTimeMaxTextDisplay);
}

function createGameFieldStatisticsTime() {
    createElementDivWithTheSamIdAndClassName(containerGameFiledStatisticsTime, containerGameFiledStatisticsTimeParts);
    createContainerStatisticsTimeBest();
    createContainerStatisticsTimeMin();
    createContainerStatisticsTimeAvg();
    createContainerStatisticsTimeMax();
}