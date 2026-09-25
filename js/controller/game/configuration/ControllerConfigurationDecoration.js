export class ControllerConfigurationDecoration {

    constructor(viewConfigurationDecoration) {
        this.viewConfigurationDecoration = viewConfigurationDecoration;
    }

    createConfigurationDecoration() {
        this.viewConfigurationDecoration.createContainerConfigurationDecoration();
    }
}