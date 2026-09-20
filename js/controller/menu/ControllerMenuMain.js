export class ControllerMenuMain {

    constructor(viewMenuMain, controllerTitle) {
        this.viewMenuMain = viewMenuMain;
        this.controllerTitle = controllerTitle;
    }

    createMenu() {
        this.createMenuMain();
        this.createTitle();
    }

    createMenuMain() {
        this.viewMenuMain.createMenuMain();
    }

    createTitle() {
        this.controllerTitle.createTitle();
    }
}