export class ControllerHomePrimary {

    constructor(viewHomeMain) {
        this.viewHomeMain = viewHomeMain;
    }

    createHomeMain() {
        this.viewHomeMain.createContainerSectionHomeMain();
    }
}