import * as variablesGameModeFraud from "./common/variablesGameModeFraud.js";


export class GameModeFraud {

    // constructor(currentRoundNumber) {
    //     this.configureFraudDataBase(currentRoundNumber);
    // }

    constructor() {
        this.initializeFraudStatisticsMapPerRound();
    }

    fraudStatisticMapPerRound;

    // fraudTotal = "fraudTotal";
    // fraudSummaryTotalKey = "fraudSummaryTotalKey";
    // fraudSummaryCurrentRoundNumberKey = "fraudSummaryCurrentRoundNumberKey";
    // fraudSummarySumPerCurrentRoundKey = "fraudSummarySumPerCurrentRoundKey";

    // fraudElementIndexPerRound;

    // fraudCountedSumNumber = 0;
    // fraudRoundCountedClicks = 0;
    // fraudRoundElementIndexToUpdate = 0;

    fraudTotalValuePerGame = 0;
    fraudRoundNumber = 0;
    fraudTotalValuePerRoundNumber = 0;


    initializeFraudStatisticsMapPerRound() {
        this.createFraudStatisticsMapPerRound();
        this.setFraudStatisticsMapPerRound();
    }

    createFraudStatisticsMapPerRound() {
        this.fraudStatisticMapPerRound = new Map();
    }

    // setFroundCounterMapDataBase(currentRoundNumber) {
    setFraudStatisticsMapPerRound() {
        this.fraudStatisticMapPerRound.set(
            variablesGameModeFraud.mapKeyStatisticsFraudTotalValuePerGame,
            this.fraudTotalValuePerGame);

        this.fraudStatisticMapPerRound.set(
            variablesGameModeFraud.mapKeyStatisticsFraudRoundNumber,
            this.fraudRoundNumber);

        this.fraudStatisticMapPerRound.set(
            variablesGameModeFraud.mapKeyStatisticsFraudTotalValuePerRoundNumber,
            this.fraudTotalValuePerRoundNumber);

        // this.fraudStatisticMap.set(
        //     this.fraudRoundNumber,
        //     this.fraudTotalValuePerRoundNumber
        // );

        // this.fraudStatisticMap.set(
        //     variablesGameModeFraud.mapKeyStatisticsFraudTotalValuePerRoundNumber,
        //     this.fraudTotalValuePerRoundNumber);
    }

    getFraudStatisticMap() {
        return this.fraudStatisticMapPerRound;
    }

    setFraudCountedClicks() {
        this.fraudTotalValuePerRoundNumber++;
    }

    setFraudStatisticData() {
        this.setFraudTotalValuePerGame();
        this.setFraudStatisticsMapPerRound();
        this.setFraudConfigurationPerRoundNumber();
    }

    getStatisticsFraudData() {
        this.setFraudStatisticData();
        return this.fraudStatisticMapPerRound;
    }

    setFraudTotalValuePerGame() {
        this.fraudTotalValuePerGame = this.fraudTotalValuePerGame + this.fraudTotalValuePerRoundNumber;
    }

    setFraudConfigurationPerRoundNumber(){
        this.setFraudRoundNumber();
        this.initializeFraudTotalValuePerRoundNumber();
    }

    setFraudRoundNumber() {
        this.fraudRoundNumber++;
    }

    initializeFraudTotalValuePerRoundNumber(){
        this.fraudTotalValuePerRoundNumber = 0;
    }



    // getFraudCountedSum() {
    //     return this.fraudTotalValuePerGame;
    // }
    //
    // resetFraudCountedClicks() {
    //     this.fraudTotalValuePerRoundNumber = 0;
    // }
    //
    // getFraudCountedClicks() {
    //     return this.fraudTotalValuePerRoundNumber;
    // }

    // setFraudRoundElementIndexToUpdate() {
    //     this.fraudRoundElementIndexToUpdate++;
    // }
    //
    // getFraudRoundElementIndexToUpdate() {
    //     return this.fraudRoundElementIndexToUpdate;
    // }
}