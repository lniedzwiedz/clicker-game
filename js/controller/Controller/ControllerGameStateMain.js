export class ControllerGameStateMain {

    constructor(controllerGameState, controllerButtonStart, controllerButtonStop) {
        this.controllerGameState = controllerGameState;
        this.controllerButtonStart = controllerButtonStart;
        this.controllerButtonStop = controllerButtonStop
    }

    createGameState() {
        this.createGameStateMain();
        this.createButtonStart();
    }

    createGameStateMain() {
        this.controllerGameState.createGameStateMain();
    }

    createButtonStart() {
        this.controllerButtonStart.createButtonStart();
    }

    setOnStart(onStart) {
        this.controllerButtonStart
            .setOnStart(onStart);
    }

    createButtonStop() {
        this.controllerButtonStop.createButtonStop();
    }

    setOnStop(onStop) {
        this.controllerButtonStop
            .setOnStop(onStop);
    }

    setConfigurationAfterClickStop() {
        this.controllerButtonStop.setConfigurationAfterClick();
        this.controllerButtonStart.setConfigurationBeforeClick();


        this.removeEventListenerOnClickButtonStop();
        // this.removeEventListenerOnClickButtonClickColor();
    }

    removeEventListenerOnClickButtonStop() {
        this.controllerButtonStop.removeEventListenerOnClickButtonStop();
    }


    setConfigurationButtonsAtStart() {
        // this.controllerButtonClickColor.removeConfigurationGameOver();
        this.controllerButtonStart.setConfigurationAfterClick();
        this.controllerButtonStop.setConfigurationBeforeClick();
    }

    configureButtonsAfterGameOver() {
        // this.setConfigurationRoundNumberWhenGameStop();

        // this.removeEventListenerOnClickButtonClickColor();
        // this.configureClickColorGameOver();
        this.setIconsColorAfterGameOver();

        this.setConfigurationButtonStopGameOver();
    }

    setIconsColorAfterGameOver() {
        this.controllerButtonStart.setConfigurationBeforeClick();
        this.controllerButtonStop.setConfigurationBeforeClick();
    }

    setConfigurationButtonStopGameOver() {
        this.controllerButtonStop.setConfigurationGameOver();
    }
}