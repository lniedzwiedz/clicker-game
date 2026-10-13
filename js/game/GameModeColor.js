export class GameModeColor {

    randomColor = "#ac4a71";
    // randomTimeToChangeColor = 1;
    // randomTimeMaxSecond = 10;
    reactionTime = 0;
    reactionTimeTimeout = 0;
    startTime = 0;
    endTime = 0;
    gameTimeTimeoutStart;

    fileWithColors = "#1A1A1D, #3B1C32, #6A1E55, #A64D79, #251B37, #372948, #FFCACA, #FFECEF, " +
        "#F3F2DA, #4E8D7C, #045762, #EA97AD, #FAD9E6, #E4AEC5, #5F7464, #243D25";
    colors = this.fileWithColors.split(", ");

    gameColors = this.colors;


    playClickColorCounterTime() {
        this.setConfigurationGameRound();
    }

    setConfigurationGameRound() {
        this.gameColors = this.colors;
        // this.startTime = 0;
        // this.endTime = 0;
        // this.reactionTimeTimeout = 0;

        this.setRandomColor();
        // this.setRandomTimeBeforeChangeColor();
        // this.setGameTimeTimeoutStart();
    }

    getRandomNumber(maxNumber) {
        return Math.floor((Math.random() * maxNumber));
    }

    setRandomColor() {
        let randomNumber = this.getRandomNumber(this.colors.length);
        let tempColor = this.randomColor;
        this.randomColor = this.colors[randomNumber];
        this.colors[randomNumber] = tempColor;
    }

    // getRandomColor() {
    getGameRoundDataToDisplay() {
        return this.randomColor;
    }

    // setRandomTimeBeforeChangeColor() {
    //     let randomSecond = this.getRandomNumber(this.randomTimeMaxSecond) + 1;
    //     this.randomTimeToChangeColor = randomSecond * 1000;
    // }
    //
    // // getRandomTimeBeforeChangeColor() {
    // getRandomTimeout() {
    //     return this.randomTimeToChangeColor;
    // }
    //
    // setGameTimeTimeoutStart() {
    //     this.gameTimeTimeoutStart = performance.now();
    // }

}