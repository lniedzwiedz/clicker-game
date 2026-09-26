import {
    createElementDiv,
} from "../../../common/function/commonFunctions.js";

import * as variablesGameStatePrimary from "../../../common/variable/game/gameState/variablesGameStatePrimary.js";


export class ViewGameStatePrimary {

    createContainerGameStatePrimary() {
        this.createContainerGameStateMain();
        this.createContainerGameStateMainParts();
    }

    createContainerGameStateMain() {
        createElementDiv(
            variablesGameStatePrimary.containerHomeMainPartsId,
            variablesGameStatePrimary.containerGameStateMainId);
    }

    createContainerGameStateMainParts() {
        createElementDiv(
            variablesGameStatePrimary.containerGameStateMainId,
            variablesGameStatePrimary.containerGameStateMainPartsId);
    }
}