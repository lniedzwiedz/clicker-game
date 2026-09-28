export class ControllerConfigurationRoundCoordinator {

    constructor(controllerConfigurationRoundPrimary, controllerConfigurationRoundButtonsPrimary, controllerConfigurationRoundButtons) {
        this.controllerConfigurationRoundPrimary = controllerConfigurationRoundPrimary;
        this.controllerConfigurationRoundButtonsPrimary = controllerConfigurationRoundButtonsPrimary
        this.controllerConfigurationRoundButtons = controllerConfigurationRoundButtons
    }

    createConfigurationRound() {
        this.createConfigurationRoundPrimary();
        this.createConfigurationRoundButtonsPrimary();
        this.createConfigurationRoundButtons();
    }

    createConfigurationRoundPrimary() {
        this.controllerConfigurationRoundPrimary.createConfigurationRoundPrimary();
    }

    createConfigurationRoundButtonsPrimary(){
        this.controllerConfigurationRoundButtonsPrimary.createConfigurationRoundButtonsPrimary();
    }

    createConfigurationRoundButtons() {
        this.controllerConfigurationRoundButtons.createConfigurationRoundButtons()
    }

    getRoundNumber() {
        return this.controllerConfigurationRoundButtons.getRoundNumber();
    }

    configureConfigurationAtStart() {
        this.controllerConfigurationRoundButtons.setConfigurationRoundButtonsAtStart();
    }

    configureConfigurationAtStop() {
        this.controllerConfigurationRoundButtons.setConfigurationRoundButtonsAtStop();
    }

    configureConfigurationForGameOver() {
        this.controllerConfigurationRoundButtons.setConfigurationRoundButtonsForGameOver();
    }
}