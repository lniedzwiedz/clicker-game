import {ViewGameButton} from "./clickerGame/ViewGameButton.js";
import { ViewMenu } from "./menu/ViewMenu.js";
import {
    createContainerMainElements,
    createElementDiv,
    createElementDivWithTheSameIdAndClassName
} from "./common/function/commonFunctions.js";
import {
    containerGameElements,
    containerMain, containerMainHome,
    containerMainSectionActions, containerMainSectionFooter, containerMainSectionHome,
    containerMainSectionMenu, sectionHome
} from "./common/variable/main/variablesMain";
import {
    containerGameFiledButtonMain,
    containerGameFiledButtonPlay
} from "./common/variable/clickerGame/variablesGameButtons";
import {containerGameFiledStatisticsTime} from "./common/variable/clickerGame/variablesGameStatisticsTimeGeneral";
import {containerGameFiledStatisticsFraud} from "./common/variable/clickerGame/variablesGameStatisticsTimeFraud";
// import {ViewGameConfigurationRound} from "./clickerGame/ViewGameConfigurationRound.js";
// import {ViewGameStatisticsTimeFraud} from "./clickerGame/ViewGameStatisticsTimeFraud.js";
// import {ViewGameStatisticsTimeGeneral} from "./clickerGame/ViewGameStatisticsTimeGeneral.js";

const viewMenu = new ViewMenu();
// const ViewGameConfigurationRound = new ViewGameConfigurationRound();
const viewGameButton = new ViewGameButton();
// const viewGameStatisticsTimeFraud = new ViewGameStatisticsTimeFraud();
// const viewGameStatisticsTimeGeneral = new ViewGameStatisticsTimeGeneral();


function setContainerMainSection() {
    createElementDiv(containerMain, containerMainSectionMenu);
    createElementDiv(containerMain, containerMainSectionActions);
    createElementDiv(containerMain, containerMainSectionFooter);
}

setConfigurationWebpageStart();

function setConfigurationWebpageStart() {
    setContainerMainSection();
    viewMenu.createMenu();
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
    viewGameButton.createGameFieldPButtonPlay();
    viewGameButton.createGameFieldPButtonMain();
    // createGameFieldStatisticsTime();
    // createGameFieldStatisticsFraud();
}

console.log("Clicker game: version 20260903v50_branch_class_1");