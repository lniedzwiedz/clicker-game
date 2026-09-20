export class ControllerConfigurationMain {

    constructor(viewConfigurationMain) {
        this.viewConfigurationMain = viewConfigurationMain;
    }

    createConfigurationMain() {
        this.viewConfigurationMain.createContainerConfigurationMain();
    }
}