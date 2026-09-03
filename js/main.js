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
} from "./common/variable/main/variablesMain.js";
import {
    containerGameFiledButtonMain,
    containerGameFiledButtonPlay
} from "./common/variable/clickerGame/variablesGameButtons.js";
import {containerGameFiledStatisticsTime} from "./common/variable/clickerGame/variablesGameStatisticsTimeGeneral.js";
import {containerGameFiledStatisticsFraud} from "./common/variable/clickerGame/variablesGameStatisticsTimeFraud.js";
import {ViewFooter} from "./footer/ViewFooter.js";


const viewMenu = new ViewMenu();
const viewGameButton = new ViewGameButton();
const viewFooter = new ViewFooter();



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
    viewFooter.createFooter();
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

console.log("Clicker game: version 20260903v50_branch_class_3");