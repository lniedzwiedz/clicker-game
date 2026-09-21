export class ControllerButtonClickCoordinator {

    // constructor(controllerButtonStart, controllerButtonStop, controllerButtonClickColor) {
    //     this.controllerButtonStart = controllerButtonStart;
    //     this.controllerButtonStop = controllerButtonStop;
    //     this.controllerButtonClickColor = controllerButtonClickColor;
    // }

    constructor(controllerButtonClick) {
        this.controllerButtonClick = controllerButtonClick;
    }

    createGameButtons() {
        this.controllerButtonClick.createGameButtonsView();
        // this.controllerButtonStart.createButtonStart();
    }

    setOnClickColor(onClickColor) {
        this.controllerButtonClick
            .setOnClickColor(onClickColor);
    }

    // setOnStart(onStart) {
    //     this.controllerButtonStart
    //         .setOnStart(onStart);
    // }
    //
    // setOnStop(onStop) {
    //     this.controllerButtonStop
    //         .setOnStop(onStop);
    // }

    setConfigurationAfterClickStop() {
        // this.controllerButtonStop.setConfigurationAfterClick();
        // this.controllerButtonStart.setConfigurationBeforeClick();


        // this.removeEventListenerOnClickButtonStop();
        this.removeEventListenerOnClickButtonClickColor();
    }

    // createButtonStop() {
    //     this.controllerButtonStop.createButtonStop();
    // }

    configureClickColor() {
        this.controllerButtonClick.configureButtonClickColor();
    }

    // getRoundNumber() {
    //     return this.controllerButtonsRound.getRoundNumber();
    // }
    //
    // setConfigurationForRoundNumber() {
    //     this.controllerButtonsRound.setConfigurationButtonsFinalNumberForPlay();
    // }
    //
    // setConfigurationRoundNumberWhenGameStop() {
    //     this.controllerButtonsRound.setConfigurationRoundNumberWhenGameStop();
    // }

    configureButtonsAfterGameOver() {
        // this.setConfigurationRoundNumberWhenGameStop();

        this.removeEventListenerOnClickButtonClickColor();
        this.configureClickColorGameOver();
        // this.setIconsColorAfterGameOver();

        // this.setConfigurationButtonStopGameOver();
    }

    removeEventListenerOnClickButtonClickColor() {
        this.controllerButtonClick.removeEventListenerOnClickButtonClickColor();
    }

    // removeEventListenerOnClickButtonStop() {
    //     this.controllerButtonStop.removeEventListenerOnClickButtonStop();
    // }

    configureClickColorGameOver() {
        this.controllerButtonClick.configureClickColorGameOver();
    }

    // setIconsColorAfterGameOver() {
    //     this.controllerButtonStart.setConfigurationBeforeClick();
    //     this.controllerButtonStop.setConfigurationBeforeClick();
    // }

    // setConfigurationButtonStopGameOver() {
    //     this.controllerButtonStop.setConfigurationGameOver();
    // }

    setButtonClickColor() {
        this.controllerButtonClick.setButtonClickColor();
    }

    setButtonClickColorRandomColor(gameRandomColor) {
        this.controllerButtonClick.setButtonClickColorRandomColor(gameRandomColor);
    }

    setConfigurationButtonsAtStart() {
        this.controllerButtonClick.removeConfigurationGameOver();
        // this.controllerButtonStart.setConfigurationAfterClick();
        // this.controllerButtonStop.setConfigurationBeforeClick();
    }
}