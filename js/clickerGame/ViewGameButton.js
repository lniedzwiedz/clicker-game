import {
    createElementDiv,
    createElementButton,
    getElementById, createElementButtonAndSetFunctionOnclick, setElementClassNameById, setElementClassNamedAndText,
    createElementDivWithTheSameIdAndClassName, isElementsExistById
} from "../common/function/commonFunctions.js";

export class ViewGameButton {

    createGameFieldPButtonMain() {
        // start and stop
        createElementDiv(containerGameFiledButtonMain, containerGameFiledButtonsMainParts);
        this.createGameFieldPButtonMainStart();
        // createGameFieldPButtonMainStop();
    }

    createGameFieldPButtonPlay() {
        createElementButton(containerGameFiledButtonPlay, gameFiledButtonPlay);
        setElementClassNameById(gameFiledButtonPlay, gameFiledButtonPlay);
        // setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
    }

    createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart, containerGameFiledButtonsMainStartTextDisplay) {
        createElementButtonAndSetFunctionOnclick(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart);
        setElementClassNamedAndText(buttonMainStart, gameFiledButtonMain, containerGameFiledButtonsMainStartTextDisplay);
    }

    createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart) {
        createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainParts, containerGameFiledButtonsMainStart);
        createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    }

    createGameFieldPButtonMainStart() {
        this.createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
        this.createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart, containerGameFiledButtonsMainStartTextDisplay)
    }

    createGameFieldPButtonMainStop() {
        let result = isElementsExistById(containerGameFiledButtonsMainStop);
        if (!result) {
            this.createContainerGameFieldButtonMain(containerGameFiledButtonsMainStop, gameFiledButtonMainStop);
            this.createAndConfigureGameButton(gameFiledButtonMainStop, buttonMainStop, functionNameOnclickPlayGameColorStop, containerGameFiledButtonsMainStopTextDisplay)
        }
    }
}