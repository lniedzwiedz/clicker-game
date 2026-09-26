export class ControllerGameStatePrimary {

    constructor(viewGameStatePrimary) {
        this.viewGameStatePrimary = viewGameStatePrimary;
    }

    createGameStatePrimary() {
        this.viewGameStatePrimary.createContainerGameStatePrimary();
    }
}