import {
    createElementDiv,
} from "../../../common/function/commonFunctions.js";

import * as variablesGameState from "../../../common/variable/home/gameState/variablesGameState.js";


export class ViewGameStateMain {

    createGameStateMain() {
        this.createContainerGameStateMain();
        this.createContainerGameStateMainParts();
    }

    createContainerGameStateMain() {
        createElementDiv(
            variablesGameState.containerHomeMainPartsId,
            variablesGameState.containerGameStateMainId);
    }

    createContainerGameStateMainParts() {
        createElementDiv(
            variablesGameState.containerGameStateMainId,
            variablesGameState.containerGameStateMainPartsId);
    }
}