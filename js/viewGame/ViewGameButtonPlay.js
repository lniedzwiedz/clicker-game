import {
    createElementDiv,
    createElementButton,
    getElementById, setElementClassNameById, setElementClassNamedAndText,
    createElementDivWithTheSameIdAndClassName, isElementsExistById,
} from "../common/function/commonFunctions.js";

import * as variablesGameButtons from "../common/variable/clickerGame/variablesGameButtons.js";


export class ViewGameButtonPlay {

    constructor(gameRoundAction) {
        this.gameRoundAction = gameRoundAction;
    }

    createViewGameButtonPlay() {
        this.createGameFieldPButtonMain();
        this.createGameFieldPButtonPlay();
    }

    createGameFieldPButtonMain() {
        // start and stop
        createElementDiv(variablesGameButtons.containerGameFiledButtonMain, variablesGameButtons.containerGameFiledButtonsMainParts);
        this.createGameFieldPButtonMainStart();
        // createGameFieldPButtonMainStop();
    }

    createGameFieldPButtonPlay() {
        createElementButton(variablesGameButtons.containerGameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlay);
        setElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlay);
        // setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
    }

    createContainersGameFiledButtonsMainStop() {
        this.createGameFieldPButtonMainStop();
    }

    setFunctionOnClickButton(buttonId, functionToCall) {
        const button = getElementById(buttonId);
        button.addEventListener("click", (event) => {
            functionToCall.call(this, event);
        });
    }

    setFinalGameRoundNumberForPlay(event) {
        this.gameRoundAction.setConfigurationNumberButtonChosen(event);
    }

    createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart, containerGameFiledButtonsMainStartTextDisplay) {
        // createElementButtonAndSetFunctionOnclick(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart);

        createElementButton(gameFiledButtonMainStart, buttonMainStart);
        // this.setFunctionOnClickButton(buttonMainStart, this.setConfigurationButtonMainGameStart);
        this.setFunctionOnClickButton(buttonMainStart, functionNameOnclickPlayGameColorStart);

        setElementClassNamedAndText(buttonMainStart, variablesGameButtons.gameFiledButtonMain, containerGameFiledButtonsMainStartTextDisplay);
    }

    createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart) {
        createElementDivWithTheSameIdAndClassName(variablesGameButtons.containerGameFiledButtonsMainParts, containerGameFiledButtonsMainStart);
        createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    }

    createGameFieldPButtonMainStart() {
        this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStart, variablesGameButtons.gameFiledButtonMainStart);
        // this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStart, variablesGameButtons.buttonMainStart, variablesGameButtons.functionNameOnclickPlayGameColorStart, variablesGameButtons.containerGameFiledButtonsMainStartTextDisplay)
        // this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStart, variablesGameButtons.buttonMainStart, this.setConfigurationButtonMainGameStart, variablesGameButtons.containerGameFiledButtonsMainStartTextDisplay)
        this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStart, variablesGameButtons.buttonMainStart, this.setFinalGameRoundNumberForPlay, variablesGameButtons.containerGameFiledButtonsMainStartTextDisplay)
    }

    createGameFieldPButtonMainStop() {
        let result = isElementsExistById(variablesGameButtons.containerGameFiledButtonsMainStop);
        console.log("yy");
        if (!result) {
            console.log("xD");
            this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStop, variablesGameButtons.gameFiledButtonMainStop);
            this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.buttonMainStop, variablesGameButtons.functionNameOnclickPlayGameColorStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay)
        }
    }


    // setConfigurationButtonMainGameStart() {
    //     this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    //     this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
    //     removeElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
    // }


    setConfigurationMaxClicksNumber() {
        // maxClicksNumber = maxClicksNumberSetByUser;
        // // this.setConfigurationMaxClicksNumberButtonChosen();
        // viewGameConfigurationRound.setConfigurationMaxClicksNumberButtonChosen();


        // viewGameConfigurationRound.getMaxClicksNumberSetByUser()
        // viewGameConfigurationRound.setConfigurationMaxClicksNumberButtonChosen();
    }
}