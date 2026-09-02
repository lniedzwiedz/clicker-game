function createGameFieldPButtonMain() {
    // start and stop
    createElementDiv(containerGameFiledButtonMain, containerGameFiledButtonsMainParts);
    createGameFieldPButtonMainStart();
    // createGameFieldPButtonMainStop();
}

function createGameFieldPButtonPlay() {
    createElementButton(containerGameFiledButtonPlay, gameFiledButtonPlay);
    setElementClassName(gameFiledButtonPlay, gameFiledButtonPlay);
    // setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
}

function createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart, containerGameFiledButtonsMainStartTextDisplay) {
    createElementButton(gameFiledButtonMainStart, buttonMainStart);
    setFunctionOnclick(buttonMainStart, functionNameOnclickPlayGameColorStart);
    setElementClassNamedAndText(buttonMainStart, gameFiledButtonMain, containerGameFiledButtonsMainStartTextDisplay);
}

function createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart) {
    createElementDivWithTheSamIdAndClassName(containerGameFiledButtonsMainParts, containerGameFiledButtonsMainStart);
    createElementDivWithTheSamIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
}

function createGameFieldPButtonMainStart() {
    createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart, containerGameFiledButtonsMainStartTextDisplay)
}

function createGameFieldPButtonMainStop() {
    let result = isElementsExistById(containerGameFiledButtonsMainStop);
    if (!result) {
        createContainerGameFieldButtonMain(containerGameFiledButtonsMainStop, gameFiledButtonMainStop);
        createAndConfigureGameButton(gameFiledButtonMainStop, buttonMainStop, functionNameOnclickPlayGameColorStop, containerGameFiledButtonsMainStopTextDisplay)
    }
}

function createCSSVariableName(baseVariableName, partToSwitch) {
    let timeKind = "Kind";
    return baseVariableName.replace(timeKind, partToSwitch);
}