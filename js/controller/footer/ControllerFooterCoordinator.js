export class ControllerFooterCoordinator {

    constructor(controllerFooterMain, controllerAuthor) {
        this.controllerFooterMain = controllerFooterMain;
        this.controllerAuthor = controllerAuthor
    }

    createFooter() {
        this.createFooterMain();
        this.createAuthor();
    }

    createFooterMain() {
        this.controllerFooterMain.createFooterMain();
    }

    createAuthor() {
        this.controllerAuthor.createAuthor();
    }
}