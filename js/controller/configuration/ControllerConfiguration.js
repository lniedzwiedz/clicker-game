export class ControllerConfiguration {

    constructor(viewConfiguration) {
        this.viewConfiguration = viewConfiguration;
    }

    createConfigurationMain() {
        this.viewConfiguration.createContainerConfigurationMain();
    }
}