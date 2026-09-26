export class ControllerHomePrimary {

    constructor(viewHomePrimary) {
        this.viewHomePrimary = viewHomePrimary;
    }

    createHomePrimary() {
        this.viewHomePrimary.createContainerHomePrimary();
    }
}