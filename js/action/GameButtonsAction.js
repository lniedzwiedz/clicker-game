import {
    getElementById,
    removeElementById,
    removeElementClassNameById,
    setElementClassNameById
} from "../common/function/commonFunctions.js";
import * as variablesGameButtons from "../common/variable/clickerGame/variablesGameButtons.js";

export class GameButtonsAction {

    constructor(gameRoundAction, viewGameButtons) {
        this.gameRoundAction = gameRoundAction;
        this.viewGameButtons = viewGameButtons;
    }

    setFunctionOnClickButton(buttonId, functionToCall) {
        const button = getElementById(buttonId);
        button.addEventListener("click", (event) => {
            functionToCall.call(this, event);
        });
    }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    setConfigurationStartForPlay(event) {
        console.log("START GAME");
        this.gameRoundAction.setConfigurationNumberButtonChosen(event);
        this.viewGameButtons.createGameFieldPButtonMainStop();
        // this.createContainersGameFiledButtonsMainStop();
        //
        // this.gameEngine.playGameSetConfigurationStart();
        // this.gameButtonPlayAction.removeContainersGameFiledButtonsMainStop();

    }

    setFunctionOnCLick(buttonId){
       this.setFunctionOnClickButton(buttonId,this.setConfigurationStartForPlay);
    }


    setConfigurationStopForPlay(event) {
        console.log("STOP GAME ");


        // this.createGameFieldPButtonMainStop();

    }

    removeContainersGameFiledButtonsMainStop() {
        removeElementById(variablesGameButtons.containerGameFiledButtonsMainStop);
    }

    setConfigurationButtonMainAfterClick(elementId) {
        removeElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationBeforeClick);
        setElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationAfterClick);
    }

    removeConfigurationButtonMainAfterClick(elementId) {
        let buttonPlay = document.getElementById(elementId);
        if (buttonPlay !== null) {
            removeElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationAfterClick);
            setElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationBeforeClick);
        }
    }

    setConfigurationButtonMainGameOver() {
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
        setElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
    }

    setConfigurationButtonMainGameStop() {
        this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }

    setConfigurationButtonMainGameContinue() {
        this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }

    removeConfigurationButtonMainGameContinue() {
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }
}