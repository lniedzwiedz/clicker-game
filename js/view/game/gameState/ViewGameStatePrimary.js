import {
    createElementDiv,
} from "../../../common/function/commonFunctions.js";

import * as variablesGameState from "../../../common/variable/game/gameState/variablesGameStatePrimary.js";


export class ViewGameStatePrimary {

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