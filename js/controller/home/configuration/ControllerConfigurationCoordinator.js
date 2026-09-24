export class ControllerConfigurationCoordinator {

    constructor(controllerConfiguration, controllerConfigurationDecoration, controllerConfigurationRound, controllerButtonsRound) {
        this.controllerConfiguration = controllerConfiguration;
        this.controllerConfigurationDecoration = controllerConfigurationDecoration;
        this.controllerConfigurationRound = controllerConfigurationRound;
        this.controllerButtonsRound = controllerButtonsRound;
    }

    createConfiguration() {
        this.createConfigurationMain();
        this.createConfigurationDecoration();
        this.createConfigurationRoundMain();
        this.createConfigurationButtonsRound();
    }

    createConfigurationMain() {
        this.controllerConfiguration.createConfigurationMain();
    }

    createConfigurationDecoration() {
        this.controllerConfigurationDecoration.createConfigurationDecoration();
    }

    createConfigurationRoundMain() {
        this.controllerConfigurationRound.createConfigurationRoundMain();
    }

    createConfigurationButtonsRound() {
        this.controllerButtonsRound.createConfigurationRound()
    }

    getRoundNumber() {
        return this.controllerButtonsRound.getRoundNumber();
    }

    configureRoundAtStart() {
        this.controllerButtonsRound.setConfigurationRoundButtonsAtStart();
    }

    configureConfigurationAfterClickStop() {
        this.controllerButtonsRound.setConfigurationRoundButtonsAtStop();
    }

    configureConfigurationForGameOver(){
        this.controllerButtonsRound.setConfigurationButtonsRoundForGameOver();
    }
}