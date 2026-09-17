export class ControllerMenu {

    constructor(viewMenu) {
        this.viewMenu = viewMenu;
    }

    createMenuMain() {
        this.viewMenu.createContainerMenuMain();
    }
}