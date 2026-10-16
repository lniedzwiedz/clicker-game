export class GameModeReactionTime {

    constructor() {
        // this.setReactionTimeStart();
    }

    reactionTime = 0;
    reactionTimeTimeout = 0;
    startTime = 0;
    endTime = 0;
    gameTimeTimeoutStart;

    setGameRoundModeCounterKind() {
        this.setReactionTimeStart();
    }

    configureReactionTime() {
        this.setEndTime();
        this.setReactionTime();
    }

    setReactionTime() {
        this.reactionTime = this.endTime - this.startTime + this.reactionTimeTimeout;
    }

    getReactionTime() {
        return this.reactionTime;
    }

    setReactionTimeStart() {
        console.log("2 start reaction time  ");
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