export class ControllerPrimary {

    constructor(viewPrimary) {
        this.viewPrimary = viewPrimary;
    }

    createViewPrimary() {
        this.viewPrimary.createContainerViewPrimary();
    }
}