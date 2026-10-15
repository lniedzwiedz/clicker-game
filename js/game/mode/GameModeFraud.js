import * as variablesGameModeFraud from "../common/variablesGameModeFraud.js";


export class GameModeFraud {

    constructor() {
        this.initializeStatisticsFraudMapPerRound();
    }

    statisticFraudMapPerRound;

    fraudTotalValuePerGame = 0;
    fraudRoundNumber = 0;
    fraudTotalValuePerRoundNumber = 0;

    initializeStatisticsFraudMapPerRound() {
        this.createStatisticsFraudMapPerRound();
        this.setStatisticsFraudMapPerRound();
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
            this.fraudRoundNumber);

        this.statisticFraudMapPerRound.set(
            variablesGameModeFraud.mapKeyStatisticsFraudTotalValuePerRoundNumber,
            this.fraudTotalValuePerRoundNumber);
    }

    setFraudCountedClicks() {
        this.fraudTotalValuePerRoundNumber++;
    }

    getStatisticsFraudData() {
        this.setStatisticsFraudData();
        return this.getStatisticFraudMapPerRound();
    }

    setStatisticsFraudData() {
        this.setFraudTotalValuePerGame();
        this.setStatisticsFraudMapPerRound();
        this.setFraudConfigurationPerRoundNumber();
    }

    setFraudTotalValuePerGame() {
        this.fraudTotalValuePerGame = this.fraudTotalValuePerGame + this.fraudTotalValuePerRoundNumber;
    }

    setFraudConfigurationPerRoundNumber(){
        this.setFraudRoundNumber();
        this.initializeFraudTotalValuePerRoundNumber();
    }

    getStatisticFraudMapPerRound() {
        return this.statisticFraudMapPerRound;
    }

    setFraudRoundNumber() {
        this.fraudRoundNumber++;
    }

    initializeFraudTotalValuePerRoundNumber(){
        this.fraudTotalValuePerRoundNumber = 0;
    }
}