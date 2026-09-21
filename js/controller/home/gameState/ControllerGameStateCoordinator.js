export class ControllerGameStateCoordinator {

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

    // START -----------------

    setConfigurationGameStateButtonsAfterClickButtonStart(){

        this.setConfigurationButtonStartAfterClickButtonStart();
        this.setConfigurationButtonStopAfterClickButtonStart();
    }

    setConfigurationButtonStartAfterClickButtonStart() {
        this.controllerButtonStart.setConfigurationIconStartAfterClick();
    }

    setConfigurationButtonStopAfterClickButtonStart() {
        this.controllerButtonStop.setConfigurationIconStopBeforeClick();
        this.controllerButtonStop.removeEventListenerOnClickButtonStop();
    }


    // STOP -----------------

    setConfigurationGameStateButtonsAfterClickButtonStop() {
        // this.controllerButtonStop.setConfigurationIconStopAfterClick();
        // this.controllerButtonStart.setConfigurationIconStartBeforeClick();


        // this.removeEventListenerOnClickButtonStop();
        // this.removeEventListenerOnClickButtonClickColor();

        this.setConfigurationButtonStartAfterClickButtonStop();
        this.setConfigurationButtonStopAfterClickButtonStop();
    }

    setConfigurationButtonStartAfterClickButtonStop() {
        this.controllerButtonStart.setConfigurationIconStartBeforeClick();
    }

    setConfigurationButtonStopAfterClickButtonStop() {
        this.controllerButtonStop.setConfigurationIconStopAfterClick();
        this.controllerButtonStop.removeEventListenerOnClickButtonStop();
    }


    // removeEventListenerOnClickButtonStop() {
    //     this.controllerButtonStop.removeEventListenerOnClickButtonStop();
    // }

    // setConfigurationGameStateButtonsAfterClickButtonStart(){
    //     this.setConfigurationButtonIconsAtStart();
    //
    //     // setConfigurationGameStateButtonsAfterClickButtonStart
    // }

    setConfigurationButtonIconsAtStart() {
        // this.controllerButtonClickColor.removeConfigurationGameOver();
        // this.controllerButtonStart.setConfigurationIconStartAfterClick();
        // this.controllerButtonStop.setConfigurationIconStopAfterClick();
    }


    configureButtonsAfterGameOver() {
        // this.setConfigurationRoundNumberWhenGameStop();

        // this.removeEventListenerOnClickButtonClickColor();
        // this.configureClickColorGameOver();
        this.setIconsColorAfterGameOver();

        this.setConfigurationButtonStopGameOver();
    }

    setIconsColorAfterGameOver() {
        this.controllerButtonStart.setConfigurationIconStartBeforeClick();
        this.controllerButtonStop.setConfigurationIconStopBeforeClick();
    }

    setConfigurationButtonStopGameOver() {
        this.controllerButtonStop.setIconStopStyleForGameOver();
    }
}