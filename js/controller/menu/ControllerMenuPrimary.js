export class ControllerMenuPrimary {

    constructor(viewMenuPrimary) {
        this.viewMenuPrimary = viewMenuPrimary
    }

    createMenuPrimary() {
        this.viewMenuPrimary.createContainerMenuPrimary();
    }
}