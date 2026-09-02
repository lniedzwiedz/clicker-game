function createContainerStatisticsFraudSumMain() {
    createElementDiv(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudBest);
    createElementDiv(containerGameFiledStatisticsFraudBest, containerGameFiledStatisticsFraudBestParts);
    setElementClassName(containerGameFiledStatisticsFraudBestParts, containerGameFiledCommonParts);
}

function createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay) {
    createElementDivWithDifferentIdAndClassName(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate);
    createElementDivWithDifferentIdAndClassName(containerGameFiledStatisticsFraudGamePlay, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay);
}

function createContainerStatisticsFraudSumUpdate() {
    createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudBestParts, containerGameFiledStatisticsFraudBestGamePlay, fraudCountRoundUpdateSumNumber, gameFiledStatisticsFraudBestGamePlay, commonGameFiledDisplay);
    createElementDivWithDifferentIdAndClassName(gameFiledStatisticsFraudBestGamePlay, statisticsFraudBestGamePlay, commonGamePlayTextUpdate);
    setElementClassName(statisticsFraudBestGamePlay, statisticsFraudBestUpdateNumber);
    setElementTextById(statisticsFraudBestGamePlay, statisticsFraudBestGamePlayDisplay);
}

function createContainerStatisticsFraudSumTextStatic() {
    createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudBestParts, containerGameFiledStatisticsFraudBestText, containerGameFiledCommonStaticText, gameFiledStatisticsFraudBestText, commonGameFiledDisplay);
    createElementDivWithDifferentIdAndClassName(gameFiledStatisticsFraudBestText, statisticsFraudBestText, commonStaticText);
    setElementClassNameSameAsIdAndText(statisticsFraudBestText, statisticsFraudBestTextDisplay);
}

function createContainerStatisticsFraudSum() {
    createContainerStatisticsFraudSumMain();
    createContainerStatisticsFraudSumUpdate()
    createContainerStatisticsFraudSumTextStatic();
}

function createContainerStatisticsFraudRoundUpdate() {
    // container main
    createElementDivWithTheSamIdAndClassName(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudCount);
    createElementDivWithDifferentIdAndClassName(containerGameFiledStatisticsFraudCount, containerGameFiledStatisticsFraudCountParts, containerGameFiledCommonParts);
    // game play - round update
    createElementDiv(containerGameFiledStatisticsFraudCountParts, containerGameFiledStatisticsFraudCountGamePlay);
    // text - static
    createElementDiv(containerGameFiledStatisticsFraudCountParts, containerGameFiledStatisticsFraudCountText);
    createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudCountText, gameFiledStatisticsFraudCountText, commonGameFiledDisplay, statisticsFraudCountText, commonStaticText);
    setElementClassNameSameAsIdAndText(statisticsFraudCountText, statisticsFraudCountTextDisplay);
}

function createGameFieldStatisticsFraud() {
    createElementDivWithTheSamIdAndClassName(containerGameFiledStatisticsFraud, containerGameFiledStatisticsFraudParts);
    createContainerStatisticsFraudSum();
    createContainerStatisticsFraudRoundUpdate();
    createContainerStatisticsFraudCountPerRound();
}