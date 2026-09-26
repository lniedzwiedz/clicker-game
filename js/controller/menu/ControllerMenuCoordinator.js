export class ControllerMenuCoordinator {

    constructor(controllerMenuPrimary, controllerMenuTitle) {
        this.controllerMenuPrimary = controllerMenuPrimary;
        this.controllerMenuTitle = controllerMenuTitle;
    }

    createMenu() {
        this.createMenuPrimary();
        this.createMenuTitle();
    }

    createMenuPrimary() {
        this.controllerMenuPrimary.createMenuPrimary();
    }

    createMenuTitle() {
        this.controllerMenuTitle.createMenuTitle();
    }
}