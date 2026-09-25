export class ControllerMenuTitle {

    constructor(viewTitle) {
        this.viewTitle = viewTitle;
    }

    createTitle() {
        this.viewTitle.createContainerTitle();
    }
}