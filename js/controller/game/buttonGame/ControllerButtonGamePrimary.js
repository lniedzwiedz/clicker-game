import {
    addEventListenerOnClickButton,
    removeEventListenerOnClickButton
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonGameMain from "../../../common/variable/game/buttonGame/variablesButtonGamePrimary.js";


export class ControllerButtonGamePrimary {

    constructor(viewButtonGameMain, actionButtonClickColor) {
        this.viewButtonGameMain = viewButtonGameMain;
        this.actionButtonClickColor = actionButtonClickColor;
        this.onGame = null;
        this.buttonGameEvent = null;
    }

    createButtonGameMainAtStart() {
        this.viewButtonGameMain.createContainerButtonGame();
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
                variablesButtonGameMain.buttonGameId,
                this.handleClickGame,
                this
            );
    }

    removeButtonGameClickListener() {

        removeEventListenerOnClickButton(
            variablesButtonGameMain.buttonGameId,
            this.buttonGameEvent
        );

        this.buttonGameEvent = null;
    }
}