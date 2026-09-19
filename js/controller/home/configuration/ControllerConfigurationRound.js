export class ControllerConfigurationRound {

    constructor(viewConfigurationRound) {
        this.viewConfigurationRound = viewConfigurationRound;
    }

    createContainerConfigurationRound() {
        this.viewConfigurationRound.createContainerConfigurationRound();
    }
}