import {ViewGameConfigurationRound} from "./clickerGame/ViewGameConfigurationRound";
import {
    createElementDiv,
    getElementAttributeValueById, removeElementById,
    removeElementClassNameById, removeFunctionOnclick, setElementClassNameById,
    setElementStyletAsGrid, setElementTextById, setFunctionOnclick,
    valueToString
} from "./common/function/commonFunctions.js";


import * as variablesGameButtons from "./common/variable/clickerGame/variablesGameButtons.js";
import * as variableGameConfigurationRound from "./common/variable/clickerGame/variableGameConfigurationRound.js";
import * as variablesMain from "./common/variable/main/variablesMain.js";
import * as variablesGameStatisticsTimeFraud from "./common/variable/clickerGame/variablesGameStatisticsTimeFraud.js";
import * as variablesGameStatisticsTimeGeneral from "./common/variable/clickerGame/variablesGameStatisticsTimeGeneral";

import {ViewGameStatisticsTimeGeneral} from "./clickerGame/ViewGameStatisticsTimeGeneral.js";
import {ViewGameStatisticsTimeFraud} from "./clickerGame/ViewGameStatisticsTimeFraud.js";
import {ViewGameButton} from "./clickerGame/ViewGameButton.js";

const viewGameStatisticsTimeGeneral = new ViewGameStatisticsTimeGeneral();
const viewGameStatisticsTimeFraud = new ViewGameStatisticsTimeFraud();
const viewGameButton = new ViewGameButton();



let maxClicksNumber = 5;
let maxClicksNumberSetByUser = maxClicksNumber;
let countedClicksNumber = 0;

let gameRandomColor = "#ac4a71";
let gameRandomTimeToChangeColor = 1;
const gameRandomTimeMaxSecond = 10;
let reactionTime = 0;
let reactionTimeTimeout = 0;
let startTime = 0;
let endTime = 0;
let gameTimeTimeoutStart;

let gameStatisticTimeMinInMilliseconds = 1300000;
let gameStatisticTimeAvgInMilliseconds = 0;
let gameStatisticTimeSumInMilliseconds = 0;
let gameStatisticTimeMaxInMilliseconds = 0;
let gameStatisticTimeBestInMilliseconds = gameStatisticTimeMinInMilliseconds;

let currentFunctionOnclickName;
let fraudCountedNumber = 0;
let fraudCountedSumNumber = 0;
let fraudCountRoundIndex = 0;

let timeoutButtonStop;

let clickNumberButton = 1;

const fileWithColors = "#1A1A1D, #3B1C32, #6A1E55, #A64D79, #251B37, #372948, #FFCACA, #FFECEF, " +
    "#F3F2DA, #4E8D7C, #045762, #EA97AD, #FAD9E6, #E4AEC5, #5F7464, #243D25";
const colors = fileWithColors.split(", ");

let gameColors = colors;

let funTimeoutButtonStop = function setTimeoutButtonStop() {
    this.setGameFieldColor(gameRandomColor);
    setFunctionOnclick(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.functionNameOnclickPlayGameColor);
    startTime = performance.now();
}


export class ViewGameClickerColor {

    setConfigurationClickNumber(clickedId) {
        maxClicksNumberSetByUser = getElementAttributeValueById(clickedId);
        this.setConfigurationClickNumberButtonChanges();
    }


    setConfigurationClickNumberButtonChanges() {
        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
            let buttonId = variableGameConfigurationRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber);
            removeElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);

            if (valueToString(maxClicksNumberSetByUser) === valueToString(clickNumber))
                setElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);
        }
    }

    setConfigurationMaxClicksNumberButtonChosen() {
        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
            let buttonId = variableGameConfigurationRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber)
            removeElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);

            if (valueToString(maxClicksNumberSetByUser) === valueToString(clickNumber)) {
                setElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);
                setElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonClickNumberGameOn);
            }
        }
    }

    removeConfigurationButtonChosenNumber() {
        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
            let buttonId = variableGameConfigurationRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber)
            removeElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);

            if (valueToString(maxClicksNumberSetByUser) === valueToString(clickNumber)) {
                removeElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);
                setElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);
            }
        }
    }

    setConfigurationButtonMainAfterClick(elementId) {
        removeElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationBeforeClick);
        setElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationAfterClick);
    }

    removeConfigurationButtonMainAfterClick(elementId) {
        let buttonPlay = document.getElementById(elementId);
        if (buttonPlay !== null) {
            removeElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationAfterClick);
            setElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationBeforeClick);
        }
    }

    setConfigurationButtonMainGameStart() {
        this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
        removeElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
    }

    setConfigurationButtonMainGameStop() {
        this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }

    setConfigurationButtonMainGameContinue() {
        this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }

    removeConfigurationButtonMainGameContinue() {
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }

    setConfigurationButtonMainGameOver() {
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
        setElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
    }

    setConfigurationMaxClicksNumber() {
        maxClicksNumber = maxClicksNumberSetByUser;
        this.setConfigurationMaxClicksNumberButtonChosen();
    }

    playGameColorStart() {
        this.removeContainersGameFiledButtonsMainStop();
        this.createContainersGameFiledButtonsMainStop();
        this.removeContainersGameFiledStatistics();
        this.setGameButtonStartColor();
        this.setConfigurationGame();
        this.removeConfigurationGameOver();
        this.setConfigurationMaxClicksNumber();
        this.setConfigurationButtonMainGameStart();

        countedClicksNumber = 0;
        fraudCountedNumber = 0;
        fraudCountedSumNumber = 0;
        fraudCountRoundIndex = 0;
        gameStatisticTimeMinInMilliseconds = 1300000;
        gameStatisticTimeAvgInMilliseconds = 0;
        gameStatisticTimeSumInMilliseconds = 0;
        gameStatisticTimeMaxInMilliseconds = 0;
        countedClicksNumber++;
    }

    playGameColorStop() {
        this.clearTimeoutButtonStop();
        // [extension V1] button continue is active -> // setConfigurationGameStop();
        this.setConfigurationGameStop();
        // [extension V1] do not even think of removing this function !!!
        // setConfigurationGameContinue();
    }

    setConfigurationGameStop() {
        removeFunctionOnclick(variablesGameButtons.gameFiledButtonPlay);
        removeFunctionOnclick(variablesGameButtons.buttonMainStop);
        this.removeConfigurationButtonChosenNumber();
        this.setConfigurationButtonMainGameStop();
    }

// [extension V1] do not even think of removing this function !!!
    setConfigurationGameContinue() {
        let functionName = document.getElementById(variablesGameButtons.gameFiledButtonPlay).getAttribute('onclick');

        if (functionName !== null)
            currentFunctionOnclickName = functionName.replace("(this.id)", "");

        setFunctionOnclick(variablesGameButtons.buttonMainStop, variablesGameButtons.functionNameOnclickPlayGameColorContinue);
        setElementTextById(variablesGameButtons.buttonMainStop, variablesGameButtons.containerGameFiledButtonsMainContinueTextDisplay);
        removeFunctionOnclick(variablesGameButtons.gameFiledButtonPlay);
        this.setEndTime();
        this.setClickReactionTimeTimeout();
        this.removeConfigurationButtonMainGameContinue();

        startTime = 0;
        endTime = 0;
    }

// [extension V1] do not even think of removing this function !!!
    playGameColorContinue() {
        setFunctionOnclick(variablesGameButtons.buttonMainStop, variablesGameButtons.functionNameOnclickPlayGameColorStop);
        setElementTextById(variablesGameButtons.buttonMainStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay);
        this.setConfigurationButtonMainGameContinue();

        if (currentFunctionOnclickName !== undefined)
            setFunctionOnclick(variablesGameButtons.gameFiledButtonPlay, currentFunctionOnclickName);

        // ???
        gameRandomTimeToChangeColor = gameRandomTimeToChangeColor - gameTimeTimeoutStart;
        this.runTimeoutButtonStop();
        gameTimeTimeoutStart = 0;
    }

    getRandomNumber(maxNumber) {
        return Math.floor((Math.random() * maxNumber));
    }

    setGameRandomColor() {
        let randomNumber = this.getRandomNumber(colors.length);
        let tempColor = gameRandomColor;
        gameRandomColor = colors[randomNumber];
        colors[randomNumber] = tempColor;
    }

    setGameFieldColor(colorName) {
        variablesMain.rootVariables.style.setProperty(variablesMain.cssGameFiledButtonPlayColor, colorName);
    }

    /*let funTimeoutButtonStop = function setTimeoutButtonStop() {
        setGameFieldColor(gameRandomColor);
        setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
        startTime = performance.now();
    }*/


    runTimeoutButtonStop() {
        timeoutButtonStop = setTimeout(funTimeoutButtonStop, gameRandomTimeToChangeColor);
    }

    clearTimeoutButtonStop() {
        clearTimeout(timeoutButtonStop);
    }

    setFunctionOnclickPlayGameColorClickBeforeNewRound() {
        setFunctionOnclick(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.functionNameOnclickPlayGameColorClickBeforeNewRound);
    }

    setGameButtonStartColor() {
        this.setGameFieldColor(variablesMain.gameFiledButtonPlayStartColor);
    }

    setGameRandomTimeInMillisecondsToChangeColor() {
        let randomSecond = this.getRandomNumber(gameRandomTimeMaxSecond) + 1;
        gameRandomTimeToChangeColor = randomSecond * 1000;
    }

    getGameStatisticTimeInSeconds(timeInMilliseconds) {
        return (timeInMilliseconds / 1000).toFixed(4);
    }

    setGameStatisticTimeMinInSeconds() {
        let timeInSeconds = this.getGameStatisticTimeInSeconds(gameStatisticTimeMinInMilliseconds);
        setElementTextById(statisticsTimeMinGamePlay, timeInSeconds);
    }

    setGameStatisticTimeAvgInSeconds() {
        let timeInSeconds = this.getGameStatisticTimeInSeconds(gameStatisticTimeAvgInMilliseconds);
        setElementTextById(variablesGameStatisticsTimeGeneral.statisticsTimeAvgGamePlay, timeInSeconds);
    }

    setGameStatisticTimeMaxInSeconds() {
        let timeInSeconds = this.getGameStatisticTimeInSeconds(gameStatisticTimeMaxInMilliseconds);
        setElementTextById(variablesGameStatisticsTimeGeneral.statisticsTimeMaxGamePlay, timeInSeconds);
    }

    setGameStatisticTimeBestInSeconds() {
        let timeInSeconds = this.getGameStatisticTimeInSeconds(gameStatisticTimeBestInMilliseconds);
        setElementTextById(variablesGameStatisticsTimeGeneral.statisticsTimeBestGamePlay, timeInSeconds);
    }

    setGameStatisticTimeInSeconds() {
        this.setGameStatisticTimeMinInSeconds();
        this.setGameStatisticTimeAvgInSeconds();
        this.setGameStatisticTimeMaxInSeconds();
        this.setGameStatisticTimeBestInSeconds();
    }

    setGameStatisticTimeMinInMilliseconds() {
        if (gameStatisticTimeMinInMilliseconds > reactionTime)
            gameStatisticTimeMinInMilliseconds = reactionTime;
    }

    setGameStatisticTimeSumInMilliseconds() {
        gameStatisticTimeSumInMilliseconds += reactionTime;
    }

    setGameStatisticTimeAvgInMilliseconds() {
        gameStatisticTimeAvgInMilliseconds = gameStatisticTimeSumInMilliseconds / countedClicksNumber;
    }

    setGameStatisticTimeMaxInMilliseconds() {
        if (gameStatisticTimeMaxInMilliseconds < reactionTime)
            gameStatisticTimeMaxInMilliseconds = reactionTime;
    }

    setGameStatisticTimeBestInMilliseconds() {
        if (gameStatisticTimeBestInMilliseconds > gameStatisticTimeMinInMilliseconds)
            gameStatisticTimeBestInMilliseconds = gameStatisticTimeMinInMilliseconds;
    }

    setGameStatisticTimeInMilliseconds() {
        this.setGameStatisticTimeMinInMilliseconds();
        this.setGameStatisticTimeAvgInMilliseconds();
        this.setGameStatisticTimeMaxInMilliseconds();
        this.setGameStatisticTimeBestInMilliseconds();
    }

    playClickerGame() {

        if (countedClicksNumber === 1)
            this.createContainersGameFiledStatistics();

        this.setEndTime();
        this.setClickReactionTime();
        this.setGameStatisticTimeSumInMilliseconds();
        this.setGameStatisticTimeInMilliseconds();
        this.setGameStatisticTimeInSeconds();
        this.setGameStatisticFraudData();

        if (countedClicksNumber < maxClicksNumber) {
            this.setConfigurationGame();
            countedClicksNumber++;
        } else {
            // console.log("GAME OVER");
            this.setConfigurationGameOver();
        }
    }

    setConfigurationGameOver() {
        removeFunctionOnclick(variablesGameButtons.gameFiledButtonPlay);
        removeFunctionOnclick(variablesGameButtons.buttonMainStop);
        setElementTextById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOverTextDisplay);
        setElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOver);
        this.setConfigurationButtonMainGameOver();
        this.removeConfigurationButtonChosenNumber();
    }

    removeConfigurationGameOver() {
        setElementTextById(variablesGameButtons.gameFiledButtonPlay, "");
        removeElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOver);
    }

    setClickReactionTime() {
        reactionTime = endTime - startTime + reactionTimeTimeout;
    }

    setClickReactionTimeTimeout() {
        reactionTimeTimeout = endTime - startTime;
    }

    setEndTime() {
        endTime = performance.now();
    }

    setGameTimeTimeoutStart() {
        gameTimeTimeoutStart = performance.now();
    }

    setConfigurationGame() {
        gameColors = colors;
        startTime = 0;
        endTime = 0;
        reactionTimeTimeout = 0;

        this.setGameRandomColor();
        this.setGameRandomTimeInMillisecondsToChangeColor();
        this.setGameTimeTimeoutStart();
        this.setFunctionOnclickPlayGameColorClickBeforeNewRound();
        this.runTimeoutButtonStop();
    }

    createElementFraudCountRoundInner(parentId, childId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(childId, variablesGameStatisticsTimeGeneral.commonGameFiledDisplay);
        setElementClassNameById(childId, variablesGameStatisticsTimeGeneral.commonStaticText);
        setElementClassNameById(childId, variablesGameStatisticsTimeFraud.fraudCountRoundCommon);
        setElementTextById(childId, variablesGameStatisticsTimeFraud.statisticsFraudCountNumberTextDisplaySetUp);
    }

    createElementFraudCountRoundMain(parentId, childId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(parentId, variablesGameStatisticsTimeFraud.fraudCountRound);
        setElementClassNameById(parentId, variablesGameStatisticsTimeFraud.fraudCountRoundUpdateNumber);
    }

    createContainerStatisticsFraudCountPerRound() {

        let parentId = variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountGamePlay;
        let fraudNumber = maxClicksNumber;

        let gridRowStartNumber = 1;
        let gridColumnStartNumber = 1;
        let gridRowEndNumber = 2;
        let gridColumnEndNumber = 2;

        let gridTemplateRows = "repeat(1, 2fr 6fr 2fr)";
        let gridTemplateColumns = "repeat(" + fraudNumber + ", 1fr 100fr 1fr)";
        setElementStyletAsGrid(parentId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns);

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        for (let i = 0; i < fraudNumber; i++) {

            let childId = variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountGamePlay + "-" + valueToString(i);
            this.createElementFraudCountRoundMain(parentId, childId);

            let gridTemplateRowsChild = "1fr";
            let gridTemplateColumnsChild = "1fr";
            setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);

            let grandChildId = variablesGameStatisticsTimeFraud.fraudCountRoundGamePlayUpdateNumberPrefix + valueToString(i);
            this.createElementFraudCountRoundInner(childId, grandChildId);

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
        }
    }

    playClickerGameClickBeforeNewRound() {
        fraudCountedNumber++;
    }

    setGameStatisticFraudData() {
        fraudCountedSumNumber += fraudCountedNumber;
        this.setGameStatisticFraudCountedNumber();
        this.setGameStatisticFraudCountedSumNumber();
        this.setGameSConfigurationStatisticFraud();
    }

    setGameSConfigurationStatisticFraud() {
        fraudCountRoundIndex++;
        fraudCountedNumber = 0;
    }

    setGameStatisticFraudCountedNumber() {
        let result;
        if (fraudCountedNumber < 10)
            result = valueToString(fraudCountedNumber) + variablesGameStatisticsTimeFraud.statisticsFraudCountNumberTextDisplayLessThanTen;
        else
            result = fraudCountedNumber;

        let elementId = variablesGameStatisticsTimeFraud.fraudCountRoundGamePlayUpdateNumberPrefix + fraudCountRoundIndex;
        let text = variablesGameStatisticsTimeFraud.statisticsFraudCountNumberTextDisplay + result;
        setElementTextById(elementId, text);
    }

    setGameStatisticFraudCountedSumNumber() {
        setElementTextById(variablesGameStatisticsTimeFraud.statisticsFraudBestGamePlay, fraudCountedSumNumber);
    }

    createContainersGameFiledStatistics() {
        viewGameStatisticsTimeGeneral.createGameFieldStatisticsTime();
        viewGameStatisticsTimeFraud.createGameFieldStatisticsFraud();
    }

    removeContainersGameFiledStatistics() {
        removeElementById(variablesGameStatisticsTimeGeneral.containerGameFiledStatisticsTimeParts);
        removeElementById(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudParts);
    }

    createContainersGameFiledButtonsMainStop() {
        viewGameButton.createGameFieldPButtonMainStop();
    }

    removeContainersGameFiledButtonsMainStop() {
        removeElementById(variablesGameButtons.containerGameFiledButtonsMainStop);
    }
}