export class ControllerConfigurationRound {

    constructor(viewConfigurationRound) {
        this.viewConfigurationRound = viewConfigurationRound;
    }

    createConfigurationRoundMain() {
        this.viewConfigurationRound.createContainerConfigurationRound();
    }
}