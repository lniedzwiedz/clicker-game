export class ControllerConfigurationPrimary {

    constructor(viewConfigurationPrimary) {
        this.viewConfigurationPrimary = viewConfigurationPrimary;
    }

    createConfigurationPrimary() {
        this.viewConfigurationPrimary.createContainerConfigurationPrimary();
    }
}