export class ControllerFooterPrimary {

    constructor(viewFooterPrimary) {
        this.viewFooterPrimary = viewFooterPrimary
    }

    createFooterPrimary() {
        this.viewFooterPrimary.createContainerSectionFooterPrimary();
    }
}