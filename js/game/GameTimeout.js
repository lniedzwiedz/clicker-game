import {
    getRandomNumber
} from "../common/function/commonFunctions.js";


export class GameTimeout {

    constructor() {
        this.setConfigurationTimeout();
    }

    randomTimeoutMaxSecond = 10;
    randomTimeout = 1;
    randomTimeoutStart = 1;

    reactionTime = 0;
    reactionTimeTimeout = 0;
    startTime = 0;
    endTime = 0;
    gameTimeTimeoutStart;

    setRandomTimeout() {
        // let randomSecond = this.getRandomNumber(this.randomTimeoutMaxSecond) + 1;
        let randomSecond = getRandomNumber(this.randomTimeoutMaxSecond);
        this.randomTimeout = randomSecond * 1000;
    }

    // getRandomTimeBeforeChangeColor() {
    getRandomTimeout() {
        return this.randomTimeout;
    }

    setRandomTimeoutStart() {
        this.randomTimeoutStart = performance.now();
    }

    setConfigurationTimeout(){
        this.setRandomTimeout();
        this.setRandomTimeoutStart();
    }

    setReactionTime() {
        this.reactionTime = this.endTime - this.startTime + this.reactionTimeTimeout;
    }

    getReactionTime() {
        return this.reactionTime;
    }

    setStartTime() {
        this.startTime = performance.now();
    }

    getStartTime() {
        return this.startTime;
    }

    setEndTime() {
        this.endTime = performance.now();
    }

    getEndTime() {
        return this.endTime;
    }
}