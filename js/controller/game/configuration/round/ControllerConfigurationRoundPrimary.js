export class ControllerConfigurationRoundPrimary {

    constructor(viewConfigurationRoundPrimary) {
        this.viewConfigurationRoundPrimary = viewConfigurationRoundPrimary;
    }

    createConfigurationRoundPrimary() {
        this.viewConfigurationRoundPrimary.createContainerConfigurationRoundPrimary();
    }
}