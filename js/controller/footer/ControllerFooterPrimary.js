export class ControllerFooterPrimary {

    constructor(viewFooterMain) {
        this.viewFooterMain = viewFooterMain
    }

    createFooterMain() {
        this.viewFooterMain.createContainerSectionFooterMain();
    }
}