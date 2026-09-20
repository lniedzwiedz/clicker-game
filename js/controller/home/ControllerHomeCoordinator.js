export class ControllerHomeCoordinator {

    constructor(controllerHomeMain) {
        this.controllerHomeMain = controllerHomeMain;
    }

    createHome() {
        this.controllerHomeMain.createHomeMain();
    }
}