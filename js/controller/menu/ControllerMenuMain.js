export class ControllerMenuMain {

    constructor(controllerMenu, controllerTitle) {
        this.controllerMenu = controllerMenu;
        this.controllerTitle = controllerTitle;
    }

    createMenu() {
        this.createMenuMain();
        this.createTitle();
    }

    createMenuMain() {
        this.controllerMenu.createMenuMain();
    }

    createTitle() {
        this.controllerTitle.createTitle();
    }
}