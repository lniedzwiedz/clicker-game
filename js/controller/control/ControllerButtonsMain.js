export class ControllerButtonsMain {

    constructor(controllerButtonsRound, controllerButtonStart, controllerButtonStop, controllerButtonClickColor) {
        this.controllerButtonsRound = controllerButtonsRound;
        this.controllerButtonStart = controllerButtonStart;
        this.controllerButtonStop = controllerButtonStop;
        this.controllerButtonClickColor = controllerButtonClickColor;
    }

    setOnClickColor(onClickColor) {
        this.controllerButtonClickColor
            .setOnClickColor(onClickColor);
    }

    setOnStart(onStart) {
        this.controllerButtonStart
            .setOnStart(onStart);
    }

    setOnStop(onStop) {
        this.controllerButtonStop
            .setOnStop(onStop);
    }

    setConfigurationAfterClickStop() {
        this.controllerButtonStop.setConfigurationAfterClick();
        this.controllerButtonStart.setConfigurationBeforeClick();

        this.setConfigurationRoundNumberWhenGameStop();

        this.removeEventListenerOnClickButtonStop();
        this.removeEventListenerOnClickButtonClickColor();
    }

    createButtonStop() {
        this.controllerButtonStop.createButtonStop();
    }

    configureClickColor() {
        this.controllerButtonClickColor.configureButtonClickColor();
    }

    getRoundNumber() {
        return this.controllerButtonsRound.getRoundNumber();
    }

    setConfigurationForRoundNumber() {
        this.controllerButtonsRound.setConfigurationButtonsFinalNumberForPlay();
    }

    setConfigurationRoundNumberWhenGameStop() {
        this.controllerButtonsRound.setConfigurationRoundNumberWhenGameStop();
    }

    configureButtonsAfterGameOver() {
        this.setConfigurationRoundNumberWhenGameStop();

        this.removeEventListenerOnClickButtonClickColor();
        this.configureClickColorGameOver();
        this.setIconsColorAfterGameOver();

        this.setConfigurationButtonStopGameOver();
    }

    removeEventListenerOnClickButtonClickColor() {
        this.controllerButtonClickColor.removeEventListenerOnClickButtonClickColor();
    }

    removeEventListenerOnClickButtonStop() {
        this.controllerButtonStop.removeEventListenerOnClickButtonStop();
    }

    configureClickColorGameOver() {
        this.controllerButtonClickColor.configureClickColorGameOver();
    }

    setIconsColorAfterGameOver() {
        this.controllerButtonStart.setConfigurationBeforeClick();
        this.controllerButtonStop.setConfigurationBeforeClick();
    }

    setConfigurationButtonStopGameOver() {
        this.controllerButtonStop.setConfigurationGameOver();
    }

    setButtonClickColorAtStart() {
        this.controllerButtonClickColor.setButtonClickColorAtStart();
    }

    setButtonClickColorRandomColor(gameRandomColor) {
        this.controllerButtonClickColor.setButtonClickColorRandomColor(gameRandomColor);
    }

    setConfigurationButtonsAtStart() {
        this.controllerButtonClickColor.removeConfigurationGameOver();
        this.controllerButtonStart.setConfigurationAfterClick();
        this.controllerButtonStop.setConfigurationBeforeClick();
    }
}