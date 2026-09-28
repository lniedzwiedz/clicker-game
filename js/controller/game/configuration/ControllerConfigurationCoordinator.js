export class ControllerConfigurationCoordinator {

    constructor(controllerConfigurationPrimary, controllerConfigurationDecoration, controllerRoundCoordinator) {
        this.controllerConfigurationPrimary = controllerConfigurationPrimary;
        this.controllerConfigurationDecoration = controllerConfigurationDecoration;
        this.controllerRoundCoordinator = controllerRoundCoordinator;
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
        this.controllerRoundCoordinator.createConfigurationRound();
    }


    getRoundNumber() {
        return this.controllerRoundCoordinator.getRoundNumber();
    }

    configureConfigurationAtStart() {
        this.controllerRoundCoordinator.configureConfigurationAtStart();
    }

    configureRoundButtonsAfterGameEnd(){
        this.controllerRoundCoordinator.configureRoundButtonsAfterGameEnd();
    }

    // configureConfigurationAtStop() {
    //     this.controllerRoundCoordinator.configureConfigurationAtStop();
    // }
    //
    // configureConfigurationForGameOver() {
    //     this.controllerRoundCoordinator.configureConfigurationForGameOver();
    // }
}