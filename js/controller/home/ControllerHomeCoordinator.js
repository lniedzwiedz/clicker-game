export class ControllerHomeCoordinator {

    constructor(controllerHomePrimary) {
        this.controllerHomePrimary = controllerHomePrimary;
    }

    createHome() {
        this.createHomePrimary();
    }

    createHomePrimary() {
        this.controllerHomePrimary.createHomePrimary();
    }
}