import * as variablesGameStatisticsTime from "./common/variablesGameStatisticsTime.js";


export class GameStatisticsTime {

    constructor() {
        this.initializeStatisticsTimeMapPerRound();
    }

    statisticsTimedMapPerRound;

    reactionTime = 0;
    currentRoundNumber = 1;

    statisticTimeInMillisecondsMin = 1300000;
    statisticTimeInMillisecondsAvg = 0;
    statisticTimeInMillisecondsSum = 0;
    statisticTimeInMillisecondsMax = 0;
    statisticTimeInMillisecondsBest = this.statisticTimeInMillisecondsMin;

    statisticsTimeInSecondsMin = 0;
    statisticsTimeInSecondsAvg = 0;
    statisticsTimeInSecondsMax = 0;
    statisticsTimeInSecondsBest = 0;


    initializeStatisticsTimeMapPerRound() {
        this.createStatisticsTimeMapPerRound();
        this.setStatisticsTimeMapPerRound();
    }

    createStatisticsTimeMapPerRound() {
        this.statisticsTimedMapPerRound = new Map();
    }

    setStatisticsTimeMapPerRound() {
        this.statisticsTimedMapPerRound.set(
            variablesGameStatisticsTime.mapKeyStatisticTimeMin,
            this.statisticsTimeInSecondsMin);

        this.statisticsTimedMapPerRound.set(
            variablesGameStatisticsTime.mapKeyStatisticTimeAvg,
            this.statisticsTimeInSecondsAvg);

        this.statisticsTimedMapPerRound.set(
            variablesGameStatisticsTime.mapKeyStatisticTimeMax,
            this.statisticsTimeInSecondsMax);

        this.statisticsTimedMapPerRound.set(
            variablesGameStatisticsTime.mapKeyStatisticTimeBest,
            this.statisticsTimeInSecondsBest);
    }

    getStatisticsTimeMapPerRound() {
        return this.statisticsTimedMapPerRound;
    }

    setReactionTime(reactionTime) {
        this.reactionTime = reactionTime;
    }

    setCurrentRoundNumber(currentRoundNumber) {
        this.currentRoundNumber = currentRoundNumber;
    }

    setConfigurationTime() {
        this.setStatisticTimeInMillisecondsSum();
        this.setStatisticTimeInMilliseconds();
        this.setStatisticTimeInSeconds();
    }

    getStatisticTimeInSeconds(timeInMilliseconds) {
        return (timeInMilliseconds / 1000).toFixed(4);
    }

    setStatisticTimeInSecondsMin() {
        this.statisticsTimeInSecondsMin = this.getStatisticTimeInSeconds(this.statisticTimeInMillisecondsMin);
    }

    getStatisticTimeInSecondsMin() {
        return this.statisticsTimeInSecondsMin;
    }

    setStatisticTimeInSecondsAvg() {
        this.statisticsTimeInSecondsAvg = this.getStatisticTimeInSeconds(this.statisticTimeInMillisecondsAvg);
    }

    getStatisticTimeInSecondsAvg() {
        return this.statisticsTimeInSecondsAvg;
    }

    setStatisticTimeInSecondsMax() {
        this.statisticsTimeInSecondsMax = this.getStatisticTimeInSeconds(this.statisticTimeInMillisecondsMax);
    }

    getStatisticTimeInSecondsMax() {
        return this.statisticsTimeInSecondsMax;
    }

    setStatisticTimeInSecondsBest() {
        this.statisticsTimeInSecondsBest = this.getStatisticTimeInSeconds(this.statisticTimeInMillisecondsBest);
    }

    getStatisticTimeInSecondsBest() {
        return this.statisticsTimeInSecondsBest;
    }

    setStatisticTimeInSeconds() {
        this.setStatisticTimeInSecondsMin();
        this.setStatisticTimeInSecondsAvg();
        this.setStatisticTimeInSecondsMax();
        this.setStatisticTimeInSecondsBest();
    }

    setStatisticTimeInMillisecondsMin() {
        if (this.statisticTimeInMillisecondsMin > this.reactionTime)
            this.statisticTimeInMillisecondsMin = this.reactionTime;
    }

    getStatisticTimeInMillisecondsMin() {
        return this.statisticTimeInMillisecondsMin;
    }

    setStatisticTimeInMillisecondsSum() {
        this.statisticTimeInMillisecondsSum += this.reactionTime;
    }

    setStatisticTimeInMillisecondsAvg() {
        this.statisticTimeInMillisecondsAvg = this.statisticTimeInMillisecondsSum / this.currentRoundNumber;
    }

    setStatisticTimeInMillisecondsMax() {
        if (this.statisticTimeInMillisecondsMax < this.reactionTime)
            this.statisticTimeInMillisecondsMax = this.reactionTime;
    }

    setStatisticTimeInMillisecondsBest() {
        if (this.statisticTimeInMillisecondsBest > this.statisticTimeInMillisecondsMin)
            this.statisticTimeInMillisecondsBest = this.statisticTimeInMillisecondsMin;
    }

    getStatisticTimeInMillisecondsBest() {
        return this.statisticTimeInMillisecondsBest;
    }

    setStatisticTimeInMilliseconds() {
        this.setStatisticTimeInMillisecondsMin();
        this.setStatisticTimeInMillisecondsAvg();
        this.setStatisticTimeInMillisecondsMax();
        this.setStatisticTimeInMillisecondsBest();
    }

    getStatisticsTimeData(currentRoundNumber, reactionTime) {
        this.setReactionTime(reactionTime);
        this.setCurrentRoundNumber(currentRoundNumber);
        this.setConfigurationTime();
        this.setStatisticsTimeMapPerRound();
        return this.getStatisticsTimeMapPerRound();
    }
}