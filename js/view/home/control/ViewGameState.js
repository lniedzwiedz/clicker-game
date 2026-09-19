import {
    createElementDiv,
} from "../../../common/function/commonFunctions.js";

import * as variablesGameState from "../../../common/variable/home/gameState/variablesGameState.js";


export class ViewGameState {

    createGameStateMain() {
        this.createContainerGameStateMain();
        this.createContainerGameStateMainParts();
    }

    createContainerGameStateMain() {
        createElementDiv(variablesGameState.containerHomeMainParts, variablesGameState.containerGameStateMain);
    }

    createContainerGameStateMainParts() {
        createElementDiv(variablesGameState.containerGameStateMain, variablesGameState.containerGameStateMainParts);
    }
}