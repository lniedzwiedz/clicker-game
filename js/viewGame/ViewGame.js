import {GameRoundAction} from "../action/GameRoundAction.js";
import {ViewGameConfigurationRound} from "./ViewGameConfigurationRound.js";
import {GameButtonsPlayView} from "./GameButtonsPlayView.js";
import {GameButtonsPlayAction} from "../action/GameButtonsPlayAction.js";
import {GameButtonsRoundController} from "../controller/GameButtonsRoundController.js";
import {GameButtonsPlayController} from "../controller/GameButtonsPlayController.js";

export class ViewGame {

    constructor() {

        this.gameRoundAction =
            new GameRoundAction();

        this.viewGameConfigurationRound =
            new ViewGameConfigurationRound();

        this.gameRoundController =
            new GameButtonsRoundController(
                this.viewGameConfigurationRound, this.gameRoundAction);


        this.gameButtonsView =
            new GameButtonsPlayView();

        this.gameButtonsAction =
            new GameButtonsPlayAction();

        this.gameButtonsController =
            new GameButtonsPlayController(
                this.gameButtonsView, this.gameButtonsAction, this.gameRoundAction);


    }

    createViewGameConfigurationRound() {
        this.gameRoundController.createConfigurationRound();
    }

    createGameButtonsConfigurationView() {
        this.gameButtonsController.createGameButtonsView();
    }
}