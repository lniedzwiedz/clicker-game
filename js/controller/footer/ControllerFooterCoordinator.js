export class ControllerFooterCoordinator {

    constructor(controllerFooterPrimary, controllerFooterAuthor) {
        this.controllerFooterPrimary = controllerFooterPrimary;
        this.controllerFooterAuthor = controllerFooterAuthor
    }

    createFooter() {
        this.createFooterPrimary();
        this.createFooterAuthor();
    }

    createFooterPrimary() {
        this.controllerFooterPrimary.createFooterPrimary();
    }

    createFooterAuthor() {
        this.controllerFooterAuthor.createFooterAuthor();
    }
}