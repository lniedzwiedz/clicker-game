export class ControllerConfigurationCoordinator {

    constructor(controllerConfigurationPrimary, controllerConfigurationDecoration, controllerConfigurationRoundCoordinator) {
        this.controllerConfigurationPrimary = controllerConfigurationPrimary;
        this.controllerConfigurationDecoration = controllerConfigurationDecoration;
        this.controllerConfigurationRoundCoordinator = controllerConfigurationRoundCoordinator;
    }

    createConfiguration() {
        this.createConfigurationPrimary();
        this.createConfigurationDecoration();
        this.createConfigurationRound();
    }

    createConfigurationPrimary() {
        this.controllerConfigurationPrimary.createConfigurationPrimary();
    }

    createConfigurationDecoration() {
        this.controllerConfigurationDecoration.createConfigurationDecoration();
    }

    createConfigurationRound() {
        this.controllerConfigurationRoundCoordinator.createConfigurationRound();
    }

    getRoundNumber() {
        return this.controllerConfigurationRoundCoordinator.getRoundNumber();
    }

    configureConfigurationAtStart() {
        this.controllerConfigurationRoundCoordinator.configureConfigurationAtStart();
    }

    configureRoundButtonsAfterGameEnd(){
        this.controllerConfigurationRoundCoordinator.configureRoundButtonsAfterGameEnd();
    }
}