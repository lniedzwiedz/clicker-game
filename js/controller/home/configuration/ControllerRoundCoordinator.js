export class ControllerRoundCoordinator {

    constructor(controllerRoundMain, controllerButtonsRound) {
        this.controllerRoundMain = controllerRoundMain;
        this.controllerButtonsRound = controllerButtonsRound
    }

    createConfigurationRound() {
        this.createConfigurationRoundMain();
        this.createConfigurationButtonsRound();
    }

    createConfigurationRoundMain() {
        this.controllerRoundMain.createConfigurationRoundMain();
    }

    createConfigurationButtonsRound() {
        this.controllerButtonsRound.createConfigurationRound()
    }

    getRoundNumber() {
        return this.controllerButtonsRound.getRoundNumber();
    }

    configureConfigurationAtStart() {
        this.controllerButtonsRound.setConfigurationRoundButtonsAtStart();
    }

    configureConfigurationAtStop() {
        this.controllerButtonsRound.setConfigurationRoundButtonsAtStop();
    }

    configureConfigurationForGameOver(){
        this.controllerButtonsRound.setConfigurationButtonsRoundForGameOver();
    }
}