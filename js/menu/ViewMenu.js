import {
    createContainerMainElements,
    createElementDivWithTheSameIdAndClassName,
    createElementP,
    setElementClassNamedAndText
} from "../common/function/commonFunctions.js";

let clickNumberButton = 1;


import {ViewGameConfigurationRound} from "../clickerGame/ViewGameConfigurationRound.js";
import * as variablesMain from "../common/variable/main/variablesMain.js";
import * as variablesMenu from "../common/variable/menu/variablesMenu.js";


const viewGameConfigurationRound = new ViewGameConfigurationRound();

export class ViewMenu {

    createMenu() {
        this.createContainerMainMenu();
        this.createContainerMainMenuParts();
        this.createContainerManuTitle();
        viewGameConfigurationRound.createContainerManuConfigurationRound();
    }

    createContainerMainMenu() {
        createContainerMainElements(variablesMain.containerMainSectionMenu, variablesMenu.sectionMenu, variablesMenu.containerSectionMenu, variablesMenu.containerMenuMain);
    }

    createContainerMainMenuParts() {
        createElementDivWithTheSameIdAndClassName(variablesMenu.containerMenuMain, variablesMenu.containerMenuMainParts);
    }

    createContainerManuTitle() {
        createElementDivWithTheSameIdAndClassName(variablesMenu.containerMenuMainParts, variablesMenu.containerMenuTitleMain);
        createElementDivWithTheSameIdAndClassName(variablesMenu.containerMenuTitleMain, variablesMenu.menuTitle);
        createElementP(variablesMenu.menuTitle, variablesMenu.menuTitleText);
        setElementClassNamedAndText(variablesMenu.menuTitleText, variablesMenu.menuTitleText, variablesMenu.menuTitleTextDisplay);
    }
}