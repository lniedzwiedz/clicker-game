import {ViewGameConfigurationRound} from "./clickerGame/ViewGameConfigurationRound";
import {
    createElementDiv,
    getElementAttributeValueById, removeElementById,
    removeElementClassNameById, removeFunctionOnclick, setElementClassNameById,
    setElementStyletAsGrid, setElementTextById, setFunctionOnclick,
    valueToString
} from "./common/function/commonFunctions.js";
import {ViewGameButton} from "./clickerGame/ViewGameButton.js";
// import ViewGameStatisticsTimeFraud from "./clickerGame/ViewGameStatisticsTimeFraud.js";
import viewGameStatisticsTimeFraud from "./clickerGame/ViewGameStatisticsTimeFraud.js";
import {
    functionNameOnclickPlayGameColor,
    gameFiledButtonPlay
} from "./common/variable/clickerGame/variablesGameButtons";

const viewGameConfigurationRound = new ViewGameConfigurationRound();
const viewGameButton = new viewGameButton();


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

const fileWithColors = "#1A1A1D, #3B1C32, #6A1E55, #A64D79, #251B37, #372948, #FFCACA, #FFECEF, " +
    "#F3F2DA, #4E8D7C, #045762, #EA97AD, #FAD9E6, #E4AEC5, #5F7464, #243D25";
const colors = fileWithColors.split(", ");

let gameColors = colors;

let funTimeoutButtonStop = function setTimeoutButtonStop() {
    setGameFieldColor(gameRandomColor);
    setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
    startTime = performance.now();
}

export class ViewGameClickerColor {

    setConfigurationClickNumber(clickedId) {
        maxClicksNumberSetByUser = getElementAttributeValueById(clickedId);
        setConfigurationClickNumberButtonChanges();
    }


    setConfigurationClickNumberButtonChanges() {
        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
            let buttonId = menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber);
            removeElementClassNameById(buttonId, menuGameConfigurationButtonCurrentNumber);

            if (valueToString(maxClicksNumberSetByUser) === valueToString(clickNumber))
                setElementClassNameById(buttonId, menuGameConfigurationButtonCurrentNumber);
        }
    }

    setConfigurationMaxClicksNumberButtonChosen() {
        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
            let buttonId = menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber)
            removeElementClassNameById(buttonId, menuGameConfigurationButtonChosenNumber);

            if (valueToString(maxClicksNumberSetByUser) === valueToString(clickNumber)) {
                setElementClassNameById(buttonId, menuGameConfigurationButtonChosenNumber);
                setElementClassNameById(buttonId, menuGameConfigurationButtonClickNumberGameOn);
            }
        }
    }

    removeConfigurationButtonChosenNumber() {
        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
            let buttonId = menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber)
            removeElementClassNameById(buttonId, menuGameConfigurationButtonChosenNumber);

            if (valueToString(maxClicksNumberSetByUser) === valueToString(clickNumber)) {
                removeElementClassNameById(buttonId, menuGameConfigurationButtonChosenNumber);
                setElementClassNameById(buttonId, menuGameConfigurationButtonCurrentNumber);
            }
        }
    }

    setConfigurationButtonMainAfterClick(elementId) {
        removeElementClassNameById(elementId, gameFiledButtonMainTextDecorationBeforeClick);
        setElementClassNameById(elementId, gameFiledButtonMainTextDecorationAfterClick);
    }

    removeConfigurationButtonMainAfterClick(elementId) {
        let buttonPlay = document.getElementById(elementId);
        if (buttonPlay !== null) {
            removeElementClassNameById(elementId, gameFiledButtonMainTextDecorationAfterClick);
            setElementClassNameById(elementId, gameFiledButtonMainTextDecorationBeforeClick);
        }
    }

    setConfigurationButtonMainGameStart() {
        setConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
        removeConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStopTextDisplayId);
        removeElementClassNameById(gameFiledButtonMainStop, gameFiledButtonMainInactive);
    }

    setConfigurationButtonMainGameStop() {
        setConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStopTextDisplayId);
        removeConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
    }

    setConfigurationButtonMainGameContinue() {
        setConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
    }

    removeConfigurationButtonMainGameContinue() {
        removeConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
    }

    setConfigurationButtonMainGameOver() {
        removeConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
        setElementClassNameById(gameFiledButtonMainStop, gameFiledButtonMainInactive);
    }

    setConfigurationMaxClicksNumber() {
        maxClicksNumber = maxClicksNumberSetByUser;
        setConfigurationMaxClicksNumberButtonChosen();
    }

    playGameColorStart() {
        removeContainersGameFiledButtonsMainStop();
        createContainersGameFiledButtonsMainStop();
        removeContainersGameFiledStatistics();
        setGameButtonStartColor();
        setConfigurationGame();
        removeConfigurationGameOver();
        setConfigurationMaxClicksNumber();
        setConfigurationButtonMainGameStart();

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
        clearTimeoutButtonStop();
        // [extension V1] button continue is active -> // setConfigurationGameStop();
        setConfigurationGameStop();
        // [extension V1] do not even think of removing this function !!!
        // setConfigurationGameContinue();
    }

    setConfigurationGameStop() {
        removeFunctionOnclick(gameFiledButtonPlay);
        removeFunctionOnclick(buttonMainStop);
        removeConfigurationButtonChosenNumber();
        setConfigurationButtonMainGameStop();
    }

// [extension V1] do not even think of removing this function !!!
    setConfigurationGameContinue() {
        let functionName = document.getElementById(gameFiledButtonPlay).getAttribute('onclick');

        if (functionName !== null)
            currentFunctionOnclickName = functionName.replace("(this.id)", "");

        setFunctionOnclicktionOnclick(buttonMainStop, functionNameOnclickPlayGameColorContinue);
        setElementTextById(buttonMainStop, containerGameFiledButtonsMainContinueTextDisplay);
        removeFunctionOnclick(gameFiledButtonPlay);
        setEndTime();
        setClickReactionTimeTimeout();
        removeConfigurationButtonMainGameContinue();

        startTime = 0;
        endTime = 0;
    }

// [extension V1] do not even think of removing this function !!!
    playGameColorContinue() {
        setFunctionOnclick(buttonMainStop, functionNameOnclickPlayGameColorStop);
        setElementTextById(buttonMainStop, containerGameFiledButtonsMainStopTextDisplay);
        setConfigurationButtonMainGameContinue();

        if (currentFunctionOnclickName !== undefined)
            setFunctionOnclick(gameFiledButtonPlay, currentFunctionOnclickName);

        // ???
        gameRandomTimeToChangeColor = gameRandomTimeToChangeColor - gameTimeTimeoutStart;
        runTimeoutButtonStop();
        gameTimeTimeoutStart = 0;
    }

    getRandomNumber(maxNumber) {
        return Math.floor((Math.random() * maxNumber));
    }

    setGameRandomColor() {
        let randomNumber = getRandomNumber(colors.length);
        let tempColor = gameRandomColor;
        gameRandomColor = colors[randomNumber];
        colors[randomNumber] = tempColor;
    }

    setGameFieldColor(colorName) {
        rootVariables.style.setProperty(cssGameFiledButtonPlayColor, colorName);
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
        setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColorClickBeforeNewRound);
    }

    setGameButtonStartColor() {
        setGameFieldColor(gameFiledButtonPlayStartColor);
    }

    setGameRandomTimeInMillisecondsToChangeColor() {
        let randomSecond = getRandomNumber(gameRandomTimeMaxSecond) + 1;
        gameRandomTimeToChangeColor = randomSecond * 1000;
    }

    getGameStatisticTimeInSeconds(timeInMilliseconds) {
        return (timeInMilliseconds / 1000).toFixed(4);
    }

    setGameStatisticTimeMinInSeconds() {
        let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeMinInMilliseconds);
        setElementTextById(statisticsTimeMinGamePlay, timeInSeconds);
    }

    setGameStatisticTimeAvgInSeconds() {
        let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeAvgInMilliseconds);
        setElementTextById(statisticsTimeAvgGamePlay, timeInSeconds);
    }

    setGameStatisticTimeMaxInSeconds() {
        let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeMaxInMilliseconds);
        setElementTextById(statisticsTimeMaxGamePlay, timeInSeconds);
    }

    setGameStatisticTimeBestInSeconds() {
        let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeBestInMilliseconds);
        setElementTextById(statisticsTimeBestGamePlay, timeInSeconds);
    }

    setGameStatisticTimeInSeconds() {
        setGameStatisticTimeMinInSeconds();
        setGameStatisticTimeAvgInSeconds();
        setGameStatisticTimeMaxInSeconds();
        setGameStatisticTimeBestInSeconds();
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
        setGameStatisticTimeMinInMilliseconds();
        setGameStatisticTimeAvgInMilliseconds();
        setGameStatisticTimeMaxInMilliseconds();
        setGameStatisticTimeBestInMilliseconds();
    }

    playClickerGame() {

        if (countedClicksNumber === 1)
            createContainersGameFiledStatistics();

        setEndTime();
        setClickReactionTime();
        setGameStatisticTimeSumInMilliseconds();
        setGameStatisticTimeInMilliseconds();
        setGameStatisticTimeInSeconds();
        setGameStatisticFraudData();

        if (countedClicksNumber < maxClicksNumber) {
            setConfigurationGame();
            countedClicksNumber++;
        } else {
            // console.log("GAME OVER");
            setConfigurationGameOver();
        }
    }

    setConfigurationGameOver() {
        removeFunctionOnclick(gameFiledButtonPlay);
        removeFunctionOnclick(buttonMainStop);
        setElementTextById(gameFiledButtonPlay, gameFiledButtonPlayGameOverTextDisplay);
        setElementClassNameById(gameFiledButtonPlay, gameFiledButtonPlayGameOver);
        setConfigurationButtonMainGameOver();
        removeConfigurationButtonChosenNumber();
    }

    removeConfigurationGameOver() {
        setElementTextById(gameFiledButtonPlay, "");
        removeElementClassNameById(gameFiledButtonPlay, gameFiledButtonPlayGameOver);
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

        setGameRandomColor();
        setGameRandomTimeInMillisecondsToChangeColor();
        setGameTimeTimeoutStart();
        setFunctionOnclickPlayGameColorClickBeforeNewRound();
        runTimeoutButtonStop();
    }

    createElementFraudCountRoundInner(parentId, childId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(childId, commonGameFiledDisplay);
        setElementClassNameById(childId, commonStaticText);
        setElementClassNameById(childId, fraudCountRoundCommon);
        setElementTextById(childId, statisticsFraudCountNumberTextDisplaySetUp);
    }

    createElementFraudCountRoundMain(parentId, childId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(parentId, fraudCountRound);
        setElementClassNameById(parentId, fraudCountRoundUpdateNumber);
    }

    createContainerStatisticsFraudCountPerRound() {

        let parentId = containerGameFiledStatisticsFraudCountGamePlay;
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

            let childId = containerGameFiledStatisticsFraudCountGamePlay + "-" + valueToString(i);
            createElementFraudCountRoundMain(parentId, childId);

            let gridTemplateRowsChild = "1fr";
            let gridTemplateColumnsChild = "1fr";
            setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);

            let grandChildId = fraudCountRoundGamePlayUpdateNumberPrefix + valueToString(i);
            createElementFraudCountRoundInner(childId, grandChildId);

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
        }
    }

    playClickerGameClickBeforeNewRound() {
        fraudCountedNumber++;
    }

    setGameStatisticFraudData() {
        fraudCountedSumNumber += fraudCountedNumber;
        setGameStatisticFraudCountedNumber();
        setGameStatisticFraudCountedSumNumber();
        setGameSConfigurationStatisticFraud();
    }

    setGameSConfigurationStatisticFraud() {
        fraudCountRoundIndex++;
        fraudCountedNumber = 0;
    }

    setGameStatisticFraudCountedNumber() {
        let result;
        if (fraudCountedNumber < 10)
            result = valueToString(fraudCountedNumber) + statisticsFraudCountNumberTextDisplayLessThanTen;
        else
            result = fraudCountedNumber;

        let elementId = fraudCountRoundGamePlayUpdateNumberPrefix + fraudCountRoundIndex;
        let text = statisticsFraudCountNumberTextDisplay + result;
        setElementTextById(elementId, text);
    }

    setGameStatisticFraudCountedSumNumber() {
        setElementTextById(statisticsFraudBestGamePlay, fraudCountedSumNumber);
    }

    createContainersGameFiledStatistics() {
        createGameFieldStatisticsTime();
        viewGameStatisticsTimeFraud.createGameFieldStatisticsFraud();
    }

    removeContainersGameFiledStatistics() {
        removeElementById(containerGameFiledStatisticsTimeParts);
        removeElementById(containerGameFiledStatisticsFraudParts);
    }

    createContainersGameFiledButtonsMainStop() {
        viewGameButton.createGameFieldPButtonMainStop();
    }

    removeContainersGameFiledButtonsMainStop() {
        removeElementById(containerGameFiledButtonsMainStop);
    }
}