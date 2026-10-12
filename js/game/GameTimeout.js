import {
    getRandomNumber
} from "../common/function/commonFunctions.js";


export class GameTimeout {

    randomTimeoutMaxSecond = 10;
    randomTimeout = 1;
    randomTimeoutStart = 1;

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
}