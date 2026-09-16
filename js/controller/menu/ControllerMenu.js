export class ControllerMenu {

    constructor(viewMenu) {
        this.viewMenu = viewMenu;
    }

    createMenu() {
        this.viewMenu.createMenu();
    }
}