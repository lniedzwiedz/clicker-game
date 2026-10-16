import * as variablesGameModeFraud from "../common/variablesGameModeFraud.js";


export class GameModeFraud {

    constructor() {
        // this.initializeStatisticsFraudMapPerRound();
        // this.setGameFraudCounter();
    }


    // statisticFraudMapPerRound;

    fraudTotalValuePerGame = 0;
    fraudCounter = 0;
    fraudTotalValuePerRoundNumber = 0;

    setGameFraudCounter() {
        this.fraudTotalValuePerRoundNumber++;
    }

    setFraudTotalValuePerGame() {
        this.fraudTotalValuePerGame += this.fraudTotalValuePerRoundNumber;
    }

    getModeFraudData() {
        let fraudDataMapPerRound = new Map();
        fraudDataMapPerRound.set(dddd, this.fraudTotalValuePerRoundNumber);
        fraudDataMapPerRound.set(ddddd.dddddd, this.fraudTotalValuePerGame);
        return fraudDataMapPerRound;
    }

    getGameFraudCounter() {
        return this.fraudTotalValuePerRoundNumber;
    }

    getFraudTotalValuePerGame() {
        return this.fraudTotalValuePerGame += this.fraudTotalValuePerRoundNumber;
    }


    initializeStatisticsFraudMapPerRound() {
        // this.createStatisticsFraudMapPerRound();
        // this.setStatisticsFraudMapPerRound();
    }

    createStatisticsFraudMapPerRound() {
        this.statisticFraudMapPerRound = new Map();
    }

    // setFroundCounterMapDataBase(currentRoundNumber) {
    setStatisticsFraudMapPerRound() {
        this.statisticFraudMapPerRound.set(
            variablesGameModeFraud.mapKeyStatisticsFraudTotalValuePerGame,
            this.fraudTotalValuePerGame);

        this.statisticFraudMapPerRound.set(
            variablesGameModeFraud.mapKeyStatisticsFraudRoundNumber,
            this.fraudCounter);

        this.statisticFraudMapPerRound.set(
            variablesGameModeFraud.mapKeyStatisticsFraudTotalValuePerRoundNumber,
            this.fraudTotalValuePerRoundNumber);
    }

    // setFraudCountedClicks() {
    setGameRoundModeCounterKind() {
        console.log("1 fraud counter  ");
        this.fraudTotalValuePerRoundNumber++;
    }

    getStatisticsFraudData() {
        // this.setStatisticsFraudData();
        // return this.getStatisticFraudMapPerRound();
    }

    setStatisticsFraudData() {
        // this.setFraudTotalValuePerGame();
        // this.setStatisticsFraudMapPerRound();
        // this.setFraudConfigurationPerRoundNumber();
    }


    setFraudConfigurationPerRoundNumber() {
        // this.setFraudRoundNumber();
        // this.initializeFraudTotalValuePerRoundNumber();
    }

    getStatisticFraudMapPerRound() {
        return this.statisticFraudMapPerRound;
    }

    setFraudRoundNumber() {
        this.fraudCounter++;
    }

    initializeFraudTotalValuePerRoundNumber() {
        this.fraudTotalValuePerRoundNumber = 0;
    }
}