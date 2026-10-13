export class GameModeFraud {

    // constructor(currentRoundNumber) {
    //     this.configureFraudDataBase(currentRoundNumber);
    // }

    constructor() {
        this.configureFraudDataBase();
    }

    fraudStatisticMap;

    // fraudTotal = "fraudTotal";
    fraudSummaryTotalKey = "fraudSummaryTotalKey";
    fraudSummaryCurrentRoundNumberKey = "fraudSummaryCurrentRoundNumberKey";
    fraudSummarySumPerCurrentRoundKey = "fraudSummarySumPerCurrentRoundKey";

    // fraudElementIndexPerRound;

    // fraudCountedSumNumber = 0;
    // fraudRoundCountedClicks = 0;
    // fraudRoundElementIndexToUpdate = 0;

    fraudSummaryTotalValue = 0;
    fraudSummaryCurrentRoundNumberValue = 0;
    fraudSummarySumPerCurrentRoundValue = 0;

    configureFraudDataBase() {
        this.createFroundCounterMap();
        this.setFroundCounterMapDataBase();
    }

    createFroundCounterMap() {
        this.fraudStatisticMap = new Map();
    }

    // setFroundCounterMapDataBase(currentRoundNumber) {
    setFroundCounterMapDataBase() {
        this.fraudStatisticMap.set(
            this.fraudSummaryTotalKey, this.fraudSummaryTotalValue);

        this.fraudStatisticMap.set(
            this.fraudSummaryCurrentRoundNumberKey, this.fraudSummaryCurrentRoundNumberValue);


        this.fraudStatisticMap.set(
            this.fraudSummarySumPerCurrentRoundKey, this.fraudSummarySumPerCurrentRoundValue);


    }

    getFraudStatisticMap() {
        return this.fraudStatisticMap;
    }

    setFraudCountedClicks() {
        this.fraudSummarySumPerCurrentRoundValue++;
    }

    setFraudCountedData() {
        this.setFraudCountedSum();
        this.setFroundCounterMapData();
        this.setFraudCurrentRoundNumber();
    }

    getStatisticsFraudData() {
        this.setFraudCountedData();
        return this.fraudStatisticMap
    }

    setFraudCountedSum() {
        this.fraudSummaryTotalValue = this.fraudSummaryTotalValue + this.fraudSummarySumPerCurrentRoundValue;
    }

    setFroundCounterMapData() {
        this.fraudStatisticMap.set(
            this.fraudSummaryTotalKey, this.fraudSummaryTotalValue);

        this.fraudStatisticMap.set(
            this.fraudSummaryCurrentRoundNumberKey, this.fraudSummaryCurrentRoundNumberValue);


        this.fraudStatisticMap.set(
            this.fraudSummarySumPerCurrentRoundKey, this.fraudSummarySumPerCurrentRoundValue);
    }

    setFraudCurrentRoundNumber(){
        this.fraudSummaryCurrentRoundNumberValue++;
    }
    getFraudCountedSum() {
        return this.fraudSummaryTotalValue;
    }

    resetFraudCountedClicks() {
        this.fraudSummarySumPerCurrentRoundValue = 0;
    }

    getFraudCountedClicks() {
        return this.fraudSummarySumPerCurrentRoundValue;
    }

    // setFraudRoundElementIndexToUpdate() {
    //     this.fraudRoundElementIndexToUpdate++;
    // }
    //
    // getFraudRoundElementIndexToUpdate() {
    //     return this.fraudRoundElementIndexToUpdate;
    // }
}