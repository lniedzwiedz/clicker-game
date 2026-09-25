export class ControllerPrimary {

    constructor(viewMain) {
        this.viewMain = viewMain;
    }

    createMain() {
        this.viewMain.createMain();
    }
}