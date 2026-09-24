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

    configureGameStateButtonsAtStart(){
        this.configureButtonStartAfterClickStart();
        this.configureButtonStopAfterClickStart();
    }

    configureButtonStartAfterClickStart() {
        this.controllerButtonStart.setConfigurationButtonStartAfterClickButtonStart();
    }

    configureButtonStopAfterClickStart() {
        this.controllerButtonStop.setConfigurationButtonStopAfterClickButtonStart();
    }

    createButtonStop() {
        this.controllerButtonStop.createButtonStop();
    }

    setOnStop(onStop) {
        this.controllerButtonStop
            .setOnStop(onStop);
    }

    configureGameStateAtStop() {

        this.configureButtonStartAfterClickStop();
        this.configureButtonStopAfterClickStop();
    }

    configureButtonStartAfterClickStop() {
        this.controllerButtonStart.setConfigurationButtonStartAfterClickButtonStop();
    }

    configureButtonStopAfterClickStop() {
        this.controllerButtonStop.setConfigurationButtonStopAfterClickButtonStop();
    }

    configureGameStateForGameOver() {
        this.setConfigurationButtonStartForGameOver();
        this.setConfigurationButtonStopForGameOver();
    }

    setConfigurationButtonStartForGameOver() {
        this.controllerButtonStart.setConfigurationButtonStartForGameOver();
   }

    setConfigurationButtonStopForGameOver() {
        this.controllerButtonStop.setConfigurationButtonStopForGameOver();
    }
}