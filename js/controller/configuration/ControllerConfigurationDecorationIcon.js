export class ControllerConfigurationDecorationIcon {

    constructor(viewConfigurationDecorationIcon) {
        this.viewConfigurationDecorationIcon = viewConfigurationDecorationIcon;
    }

    createConfigurationDecorationIcon() {
        this.viewConfigurationDecorationIcon.createContainerConfigurationDecorationIcon();
    }
}