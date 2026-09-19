export class ControllerGameState {

    constructor(viewGameState) {
        this.viewGameState = viewGameState;
    }

    createGameStateMain() {
        this.viewGameState.createGameStateMain();
    }
}