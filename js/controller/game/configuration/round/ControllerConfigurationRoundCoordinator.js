export class ControllerConfigurationRoundCoordinator {

    constructor(controllerConfigurationRoundPrimary, controllerConfigurationRoundButtonsPrimary, controllerConfigurationRoundButtons) {
        this.controllerConfigurationRoundPrimary = controllerConfigurationRoundPrimary;
        this.controllerConfigurationRoundButtonsPrimary = controllerConfigurationRoundButtonsPrimary
        this.controllerConfigurationRoundButtons = controllerConfigurationRoundButtons
    }

    createConfigurationRound() {
        this.createConfigurationRoundPrimary();
        this.createConfigurationRoundButtonsPrimary();
        this.configureRoundButtons();
    }

    createConfigurationRoundPrimary() {
        this.controllerConfigurationRoundPrimary.createConfigurationRoundPrimary();
    }

    createConfigurationRoundButtonsPrimary(){
        this.controllerConfigurationRoundButtonsPrimary.createConfigurationRoundButtonsPrimary();
    }

    configureRoundButtons() {
        this.controllerConfigurationRoundButtons.configureRoundButtons()
    }

    getRoundNumber() {
        return this.controllerConfigurationRoundButtons.getRoundNumber();
    }

    configureConfigurationAtStart() {
        this.controllerConfigurationRoundButtons.setConfigurationRoundButtonsAtStart();
    }

    configureRoundButtonsAfterGameEnd(){
        this.controllerConfigurationRoundButtons.setConfigurationRoundButtonsAfterGameEnd();
    }

    // configureConfigurationAtStop() {
    //     this.controllerConfigurationRoundButtons.setConfigurationRoundButtonsAtStop();
    // }
    //
    // configureConfigurationForGameOver() {
    //     this.controllerConfigurationRoundButtons.setConfigurationRoundButtonsForGameOver();
    // }
}