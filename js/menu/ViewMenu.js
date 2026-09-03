import {
    createContainerMainElements,
    createElementDivWithTheSameIdAndClassName,
    createElementP,
    setElementClassNamedAndText
} from "../common/function/commonFunctions.js";

let clickNumberButton = 1;

import {ViewGameConfigurationRound} from "../clickerGame/ViewGameConfigurationRound.js";
import {containerMainSectionMenu} from "../common/variable/main/variablesMain";

const viewGameConfigurationRound = new ViewGameConfigurationRound();

export class ViewMenu {

    createMenu() {
        this.createContainerMainMenu();
        this.createContainerMainMenuParts();
        this.createContainerManuTitle();
        viewGameConfigurationRound.createContainerManuConfigurationRound();
    }

    createContainerMainMenu() {
        createContainerMainElements(containerMainSectionMenu, sectionMenu, containerSectionMenu, containerMenuMain);
    }

    createContainerMainMenuParts() {
        createElementDivWithTheSameIdAndClassName(containerMenuMain, containerMenuMainParts);
    }

    createContainerManuTitle() {
        createElementDivWithTheSameIdAndClassName(containerMenuMainParts, containerMenuTitleMain);
        createElementDivWithTheSameIdAndClassName(containerMenuTitleMain, menuTitle);
        createElementP(menuTitle, menuTitleText);
        setElementClassNamedAndText(menuTitleText, menuTitleText, menuTitleTextDisplay);
    }
}