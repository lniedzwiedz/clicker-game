import {
    addEventListenerOnClickButton,
    removeEventListenerOnClickButton
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonGamePrimary from "../../../common/variable/game/buttonGame/variablesButtonGamePrimary.js";


export class ControllerButtonGamePrimary {

    constructor(viewButtonGamePrimary) {
        this.viewButtonGamePrimary = viewButtonGamePrimary;
        this.onGame = null;
        this.buttonGameEvent = null;
    }

    createButtonGameMainAtStart() {
        this.viewButtonGamePrimary.createContainerButtonGame();
    }

    setOnGame(onGame) {
        this.onGame = onGame;
    }

    handleClickGame(event) {
        if (this.onGame) {
            this.onGame();
        }
    }

    addButtonGameClickListener() {
        this.buttonGameEvent =
            addEventListenerOnClickButton(
                variablesButtonGamePrimary.buttonGameId,
                this.handleClickGame,
                this
            );
    }

    removeButtonGameClickListener() {

        removeEventListenerOnClickButton(
            variablesButtonGamePrimary.buttonGameId,
            this.buttonGameEvent
        );

        this.buttonGameEvent = null;
    }
}