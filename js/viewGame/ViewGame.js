import {GameRoundAction} from "../action/GameRoundAction.js";
import {ViewGameConfigurationRound} from "./ViewGameConfigurationRound.js";
import {ViewGameButtons} from "./ViewGameButtons.js";
import {GameButtonsAction} from "../action/GameButtonsAction.js";
import {GameRoundController} from "../controller/GameRoundController.js";

export class ViewGame {

    constructor() {

        this.gameRoundAction =
            new GameRoundAction();

        this.viewGameConfigurationRound =
            new ViewGameConfigurationRound();

        this.gameRoundController =
            new GameRoundController(
                this.viewGameConfigurationRound, this.gameRoundAction);




        // old - to fix
        this.gameButtonAction =
            new GameButtonsAction(this.gameRoundAction, this.viewGameButtons);


        this.viewGameButtons =
            new ViewGameButtons(this.gameButtonAction);
    }

    createViewGameConfigurationRound() {
        this.gameRoundController.createConfigurationRound();
    }

    createViewGamePlay() {
        this.viewGameButtons.createViewGameButtonPlay();
    }
}