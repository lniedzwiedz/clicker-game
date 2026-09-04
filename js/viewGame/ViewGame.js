import {GameRoundAction} from "../action/GameRoundAction.js";
import {ViewGameConfigurationRound} from "./ViewGameConfigurationRound.js";
import {ViewGameButtonPlay} from "./ViewGameButtonPlay.js";

export class ViewGame {

    constructor() {
        this.gameRoundAction = new GameRoundAction();

        this.viewGameConfigurationRound =
            new ViewGameConfigurationRound(this.gameRoundAction);

        this.viewGameButtonPlay =
            new ViewGameButtonPlay(this.gameRoundAction);
    }

    createViewGamePlay() {
        this.viewGameButtonPlay.createViewGameButtonPlay();
    }

    createViewGameConfigurationRound() {
        this.viewGameConfigurationRound.createViewGameConfigurationRound();
    }
}