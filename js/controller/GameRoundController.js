import * as variableGameConfigurationRound from "../common/variable/clickerGame/variableGameConfigurationRound.js";

import {valueToString} from "../common/function/commonFunctions.js";


export class GameRoundController {

    constructor(viewGameConfigurationRound, gameRoundAction) {
        this.viewGameConfigurationRound = viewGameConfigurationRound;
        this.gameRoundAction = gameRoundAction;
    }

    createConfigurationRound() {
        this.viewGameConfigurationRound.createViewGameConfigurationRound();
        this.configureClickButtons();
    }

    configureClickButtons() {

        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {

            const buttonId = variableGameConfigurationRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber);
            const button = document.getElementById(buttonId);

            button.addEventListener("click", (event) => {
                this.gameRoundAction.setConfigurationClickNumberButtonChanges(event);
            });
        }
    }
}