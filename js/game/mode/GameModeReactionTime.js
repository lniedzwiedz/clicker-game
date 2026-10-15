export class GameModeReactionTime {

    constructor() {
        this.seReactionTimeStart();
    }

    reactionTime = 0;
    reactionTimeTimeout = 0;
    startTime = 0;
    endTime = 0;
    gameTimeTimeoutStart;

    configureReactionTime(){
        this.setEndTime();
        this.setReactionTime();
    }

    setReactionTime() {
        this.reactionTime = this.endTime - this.startTime + this.reactionTimeTimeout;
    }

    getReactionTime() {
        return this.reactionTime;
    }

    seReactionTimeStart() {
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