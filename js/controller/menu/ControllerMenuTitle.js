export class ControllerMenuTitle {

    constructor(viewMenuTitle) {
        this.viewMenuTitle = viewMenuTitle;
    }

    createMenuTitle() {
        this.viewMenuTitle.createContainerMenuTitle();
    }
}