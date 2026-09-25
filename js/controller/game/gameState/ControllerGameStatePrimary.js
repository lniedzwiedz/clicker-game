export class ControllerGameStatePrimary {

    constructor(viewGameStateMain) {
        this.viewGameStateMain = viewGameStateMain;
    }

    createGameStateMain() {
        this.viewGameStateMain.createGameStateMain();
    }
}