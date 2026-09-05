import {
    getElementById,
    removeElementClassNameById,
    setElementClassNameById
} from "../common/function/commonFunctions.js";
import * as variablesGameButtons from "../common/variable/clickerGame/variablesGameButtons.js";
import * as variableGameConfigurationRound from "../common/variable/clickerGame/variableGameConfigurationRound.js";


export class GameButtonsPlayController {

    constructor(gameButtonsView, gameButtonsAction, gameRoundAction) {
        this.gameButtonsView = gameButtonsView;
        this.gameButtonsAction = gameButtonsAction;
        this.gameRoundAction = gameRoundAction;
    }

    createGameButtonsView() {
        this.gameButtonsView.createViewGameButtonPlay();
        this.configureStartButton();
    }


    setFunctionOnClickButton(buttonId, functionToCall) {
        const button = getElementById(buttonId);
        button.addEventListener("click", (event) => {
            functionToCall.call(this, event);
        });
    }

    setConfigurationStartForPlay(event) {
        // console.log("START GAME");
        // this.gameRoundAction.setButtonIdChosenFinaRoundNumberForGame(event);

        this.setConfigurationButtonsFinalNumberForPlay();
        this.gameButtonsView.createGameFieldPButtonMainStop();
        //
        // this.gameEngine.playGameSetConfigurationStart();
        // this.gameButtonPlayAction.removeContainersGameFiledButtonsMainStop();

    }

    configureStartButton() {
        this.setFunctionOnClickButton(
            variablesGameButtons.buttonMainStart,
            this.setConfigurationStartForPlay
        );
    }

    setConfigurationButtonsFinalNumberForPlay(){

        const max =  this.gameRoundAction.getButtonIdPMaxClicksNumberSetByUser();
        this.gameRoundAction.setButtonIdPMaxClicksNumberSetByUser();
        const buttonIdPrevious = this.gameRoundAction.getButtonIdPrevious();
        const currentButtonId =  this.gameRoundAction.getButtonIdCurrent();

        removeElementClassNameById(buttonIdPrevious, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);
        removeElementClassNameById(max, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);
        setElementClassNameById(currentButtonId, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);
    }


    setConfigurationStopForPlay(event) {
        console.log("STOP GAME ");


        // this.createGameFieldPButtonMainStop();

    }
}