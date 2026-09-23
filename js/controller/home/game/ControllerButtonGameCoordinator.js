export class ControllerButtonGameCoordinator {

    constructor(controllerButtonGameMain, controllerButtonGameColor, controllerButtonClickText) {
        this.controllerButtonGameMain = controllerButtonGameMain;
        this.controllerButtonGameColor = controllerButtonGameColor;
        this.controllerButtonClickText = controllerButtonClickText
    }

    createButtonGame() {
        this.controllerButtonGameMain.createButtonGameMain();
        this.controllerButtonGameColor.setButtonGameBackgroundColorClass();
        this.controllerButtonGameColor.setButtonGameBackgroundColorAtStart();
    }

    setOnGame(onGame) {
        this.controllerButtonGameMain
            .setOnGame(onGame);
    }

    setButtonGameColor(roundColor) {
        this.controllerButtonGameColor.setButtonGameColorForRound(roundColor);
    }

    // setConfigurationAfterClickStop() {
    //     // this.controllerButtonStop.setConfigurationAfterClick();
    //     // this.controllerButtonStart.setConfigurationBeforeClick();
    //
    //
    //     // this.removeEventListenerOnClickButtonStop();
    //     this.removeEventListenerOnClickButtonClickColor();
    // }


    addButtonGameListener() {
        this.controllerButtonGameMain.addButtonGameClickListener();
    }

    configureButtonGameAfterGameOver() {
        this.removeClickGameListener();
        this.createButtonGameTextGameOver();
        this.setButtonGameStyleGameOver();
    }

    removeClickGameListener() {
        this.controllerButtonGameMain.removeButtonGameClickListener();
    }

    createButtonGameTextGameOver() {
        this.controllerButtonClickText.createButtonGameTextGameOver();
    }

    setButtonGameStyleGameOver() {
        this.controllerButtonGameColor.setConfigurationButtonGameColorForGameOver();
    }

    resetConfigurationButtonGameAfterGameOver() {
        this.removeButtonGameTextGameOver();
        this.removeButtonGameStyleGameOver();
    }

    removeButtonGameStyleGameOver() {
        this.controllerButtonGameColor.setButtonGameBackgroundColorAtStart();
    }

    removeButtonGameTextGameOver() {
        this.controllerButtonClickText.removeButtonGameTextGameOver();
    }


    // setButtonClickColor() {
    //     this.controllerButtonGameMain.setButtonGameColor();
    // }

    // setButtonClickColorRandomColor(gameRandomColor) {
    //     // this.controllerButtonGameMain.setButtonClickColorRandomColor(gameRandomColor);
    // }

    // setConfigurationButtonsAtStart() {
    //     this.controllerButtonGameMain.removeConfigurationGameOver();
    //     // this.controllerButtonStart.setConfigurationAfterClick();
    //     // this.controllerButtonStop.setConfigurationBeforeClick();
    // }
}