export class ControllerConfigurationCoordinator {

    constructor(controllerConfiguration, controllerConfigurationDecoration, controllerRoundCoordinator) {
        this.controllerConfiguration = controllerConfiguration;
        this.controllerConfigurationDecoration = controllerConfigurationDecoration;
        this.controllerRoundCoordinator = controllerRoundCoordinator;
    }

    createConfiguration() {
        this.createConfigurationMain();
        this.createConfigurationDecoration();
        this.createConfigurationRound();
    }

    createConfigurationMain() {
        this.controllerConfiguration.createConfigurationMain();
    }

    createConfigurationDecoration() {
        this.controllerConfigurationDecoration.createConfigurationDecoration();
    }

    createConfigurationRound() {
        this.controllerRoundCoordinator.createConfigurationRound();
    }

    getRoundNumber() {
        return this.controllerRoundCoordinator.getRoundNumber();
    }

    configureConfigurationAtStart() {
        this.controllerRoundCoordinator.configureConfigurationAtStart();
    }

    configureConfigurationAtStop() {
        this.controllerRoundCoordinator.configureConfigurationAtStop();
    }

    configureConfigurationForGameOver() {
        this.controllerRoundCoordinator.configureConfigurationForGameOver();
    }
}