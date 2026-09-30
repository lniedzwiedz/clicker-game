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

    createConfigurationRoundButtonsPrimary() {
        this.controllerConfigurationRoundButtonsPrimary.createConfigurationRoundButtonsPrimary();
    }

    configureRoundButtons() {
        this.controllerConfigurationRoundButtons.configureRoundButtons()
    }

    getRoundNumber() {
        return this.controllerConfigurationRoundButtons.getRoundButtonNumberValue();
    }

    configureConfigurationAtStart() {
        this.controllerConfigurationRoundButtons.setConfigurationRoundButtonsAtStart();
    }

    configureRoundButtonsAtGameEnd() {
        this.controllerConfigurationRoundButtons.setConfigurationRoundButtonsAfterGameEnd();
    }
}