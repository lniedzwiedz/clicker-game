export class ControllerConfigurationPrimary {

    constructor(viewConfigurationMain) {
        this.viewConfigurationMain = viewConfigurationMain;
    }

    createConfigurationMain() {
        this.viewConfigurationMain.createContainerConfigurationMain();
    }
}