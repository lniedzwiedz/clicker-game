import {Game} from "../Game.js";

export class ControllerClickerGame {

    constructor(controllerGameCoordinator) {
        this.controllerGameCoordinator = controllerGameCoordinator
    }

    startClickerGame() {

        this.controllerGameCoordinator
            .configureGame();

        this.controllerGameCoordinator.setOnStart(() =>
            this.startGame());
    }

    startGame() {

        this.createButtonStop();

        this.controllerGameCoordinator
            .configureGameStart();


        const roundNumber =
            this.controllerGameCoordinator
                .getRoundNumber();

        this.game =
            new Game(roundNumber);

        // ustawiamy callback FRAUD
        this.configureCounterFraud();

        // DODAJEMY LISTENER TYLKO RAZ
        this.controllerGameCoordinator
            .configureClickColor();

        // tutaj ustawienie koloru
        this.controllerGameCoordinator
            .setButtonClickColor();

        // pierwsza runda / druga runda / trzecia runda / .......
        this.startRound();
    }

    createButtonStop() {

        this.controllerGameCoordinator
            .createButtonStop();

        this.configureButtonStop();
    }

    configureButtonStop() {

        this.controllerGameCoordinator.setOnStop(() =>
            this.handleClickStop());
    }

    handleClickStop() {

        this.controllerGameCoordinator
            .configureGameStateButtonsAtStop();

        this.clearClickTimeout();
    }

    clearClickTimeout() {

        if (this.clickColorTimeout) {

            clearTimeout(this.clickColorTimeout);
            this.clickColorTimeout = null;
        }
    }

    startRound() {

        if (!this.game.isGameRunning()) {
            this.controllerGameCoordinator.gameOver();
            return;
        }

        this.game
            .setNextRoundNumber();

        this.configureCounterFraud();

        this.game
            .playClickColorCounterTime();

        this.runTimeoutBeforeClick();
    }

    runTimeoutBeforeClick() {

        const timeout =
            this.game.getRandomTimeBeforeChangeColor();

        this.clickColorTimeout =
            setTimeout(() => {

                const color =
                    this.game.getRandomColor();

                this.controllerGameCoordinator.setButtonClickColorRandomColor(color);

                this.game.setStartTime();

                this.configureClickColorCounterTime();

            }, timeout);
    }

    configureCounterFraud() {
        this.controllerGameCoordinator.setOnClickColor(() =>
            this.countFraud());
    }

    countFraud() {
        this.game.playCounterFraud();
    }

    configureClickColorCounterTime() {
        this.controllerGameCoordinator.setOnClickColor(() =>
            this.processClickColor());
    }

    processClickColor() {

        const roundNumber = this.game.getRoundNumber();

        if (roundNumber === 1){
            this.controllerGameCoordinator
                .configureStatisticAtStart(roundNumber);
        }

        this.setStatisticsTime();
        this.setStatisticFraud();

        this.startRound();
    }

    setStatisticFraud() {

        this.game.setFraudCountedSum();

        let fraudCountedRoundNumber =
            this.game.getFraudCountedClicks();

        let fraudCountedSumNumber =
            this.game.getFraudCountedSum();

        let fraudRoundIndex =
            this.game.getFraudRoundElementIndexToUpdate();

        this.controllerGameCoordinator.updateStatisticFraud(
            fraudCountedRoundNumber,
            fraudCountedSumNumber,
            fraudRoundIndex);

        this.game.resetFraudCountedClicks();
        this.game.setFraudRoundElementIndexToUpdate();
    }

    setStatisticsTime() {

        this.game.setConfigurationTime();

        let statisticTimeInSecondsMin =
            this.game.getStatisticTimeInSecondsMin();

        let statisticTimeInSecondsAvg =
            this.game.getStatisticTimeInSecondsAvg();

        let statisticTimeInSecondsMax =
            this.game.getStatisticTimeInSecondsMax();

        let statisticTimeInSecondsBest =
            this.game.getStatisticTimeInSecondsBest();

        this.controllerGameCoordinator.updateStatisticFraud(
            statisticTimeInSecondsMin,
            statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax,
            statisticTimeInSecondsBest
        );
    }
}