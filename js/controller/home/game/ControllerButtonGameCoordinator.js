export class ControllerButtonGameCoordinator {

    constructor(controllerButtonGameMain, controllerButtonGameColor, controllerButtonClickText) {
        this.controllerButtonGameMain = controllerButtonGameMain;
        this.controllerButtonGameColor = controllerButtonGameColor;
        this.controllerButtonClickText = controllerButtonClickText
    }

    createButtonGame() {
        this.controllerButtonGameMain.createButtonGameMain();
    }

    setOnGame(onGame) {
        this.controllerButtonGameMain
            .setOnGame(onGame);
    }

    setButtonGameColor(roundColor){
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
        // this.setConfigurationRoundNumberWhenGameStop();

        this.removeClickGameListener();
        // this.setIconsColorAfterGameOver();

        // this.setConfigurationButtonStopGameOver();

        this.controllerButtonClickText.createButtonGameTextGameOver();

    }

    removeClickGameListener() {
        this.controllerButtonGameMain.removeButtonGameClickListener();
    }



    // setButtonClickColor() {
    //     this.controllerButtonGameMain.setButtonGameColor();
    // }

    setButtonClickColorRandomColor(gameRandomColor) {
        this.controllerButtonGameMain.setButtonClickColorRandomColor(gameRandomColor);
    }

    // setConfigurationButtonsAtStart() {
    //     this.controllerButtonGameMain.removeConfigurationGameOver();
    //     // this.controllerButtonStart.setConfigurationAfterClick();
    //     // this.controllerButtonStop.setConfigurationBeforeClick();
    // }
}