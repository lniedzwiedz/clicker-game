export class ControllerDecoration {

    constructor(viewConfigurationDecoration) {
        this.viewConfigurationDecoration = viewConfigurationDecoration;
    }

    createConfigurationDecoration() {
        this.viewConfigurationDecoration.createContainerConfigurationDecoration();
    }
}