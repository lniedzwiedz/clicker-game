export class ControllerConfigurationCoordinator {

    // constructor(controllerConfiguration, controllerConfigurationDecoration, controllerConfigurationRound, controllerButtonsRound) {
    constructor(controllerConfiguration, controllerConfigurationDecoration, controllerRoundCoordinator) {
        this.controllerConfiguration = controllerConfiguration;
        this.controllerConfigurationDecoration = controllerConfigurationDecoration;
        // this.controllerConfigurationRound = controllerConfigurationRound;
        // this.controllerButtonsRound = controllerButtonsRound;
        this.controllerRoundCoordinator = controllerRoundCoordinator;
    }

    createConfiguration() {
        this.createConfigurationMain();
        this.createConfigurationDecoration();
        // this.createConfigurationRoundMain();
        // this.createConfigurationdButtonsRound();
        this.createConfigurationRound();
    }

    createConfigurationMain() {
        this.controllerConfiguration.createConfigurationMain();
    }

    createConfigurationDecoration() {
        this.controllerConfigurationDecoration.createConfigurationDecoration();
    }

    createConfigurationRound(){
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

    configureConfigurationForGameOver(){
        this.controllerRoundCoordinator.configureConfigurationForGameOver();
    }
}