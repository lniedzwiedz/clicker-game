export class ControllerRoundPrimary {

    constructor(viewConfigurationRound) {
        this.viewConfigurationRound = viewConfigurationRound;
    }

    createConfigurationRoundMain() {
        this.viewConfigurationRound.createContainerConfigurationRound();
    }
}