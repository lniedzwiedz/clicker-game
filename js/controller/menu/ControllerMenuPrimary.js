export class ControllerMenuPrimary {

    constructor(viewMenuMain) {
        this.viewMenuMain = viewMenuMain
    }

    createMenuMain() {
        this.viewMenuMain.createContainerSectionMenuMain();
    }
}