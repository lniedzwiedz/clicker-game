export class ControllerMenuCoordinator {

    constructor(controllerMenuMain, controllerTitle) {
        this.controllerMenuMain = controllerMenuMain;
        this.controllerTitle = controllerTitle;
    }

    createMenu() {
        this.createMenuMain();
        this.createTitle();
    }

    createMenuMain() {
        this.controllerMenuMain.createMenuMain();
    }

    createTitle() {
        this.controllerTitle.createTitle();
    }
}