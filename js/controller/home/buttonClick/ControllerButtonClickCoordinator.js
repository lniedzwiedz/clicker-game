export class ControllerButtonClickCoordinator {

    constructor(controllerButtonClickMain, controllerButtonClickColor, controllerButtonClickText) {
        this.controllerButtonClickMain = controllerButtonClickMain;
        this.controllerButtonClickColor = controllerButtonClickColor;
        this.controllerButtonClickText = controllerButtonClickText
    }

    createButtonClick() {
        this.controllerButtonClickMain.createGameButtonsView();
        // this.controllerButtonStart.createButtonStart();
    }

    setOnClickColor(onClickColor) {
        this.controllerButtonClickMain
            .setOnClickColor(onClickColor);
    }



    setConfigurationAfterClickStop() {
        // this.controllerButtonStop.setConfigurationAfterClick();
        // this.controllerButtonStart.setConfigurationBeforeClick();


        // this.removeEventListenerOnClickButtonStop();
        this.removeEventListenerOnClickButtonClickColor();
    }



    configureClickColor() {
        this.controllerButtonClickMain.configureButtonClickColor();
    }



    configureButtonsAfterGameOver() {
        // this.setConfigurationRoundNumberWhenGameStop();

        this.removeEventListenerOnClickButtonClickColor();
        this.configureClickColorGameOver();
        // this.setIconsColorAfterGameOver();

        // this.setConfigurationButtonStopGameOver();
    }

    removeEventListenerOnClickButtonClickColor() {
        this.controllerButtonClickMain.removeEventListenerOnClickButtonClickColor();
    }


    configureClickColorGameOver() {
        // this.controllerButtonClickMain.configureClickColorGameOver();
        this.controllerButtonClickText.createButtonCLickTextGameOver();
    }


    setButtonClickColor() {
        this.controllerButtonClickMain.setButtonClickColor();
    }

    setButtonClickColorRandomColor(gameRandomColor) {
        this.controllerButtonClickMain.setButtonClickColorRandomColor(gameRandomColor);
    }

    setConfigurationButtonsAtStart() {
        this.controllerButtonClickMain.removeConfigurationGameOver();
        // this.controllerButtonStart.setConfigurationAfterClick();
        // this.controllerButtonStop.setConfigurationBeforeClick();
    }
}