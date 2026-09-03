import {
    createElementDiv,
    createElementDivWithIdAndSetClassName,
    createElementDivWithTheSameIdAndClassName,
    setElementClassNameById,
    setElementClassNames,
    setElementClassNameSameAsIdAndSetText,
    setElementTextById
} from "../common/function/commonFunctions.js";

let newContainerGameFiledStatisticsTimeKindParts;

export class ViewGameStatisticsTimeGeneral {

     createCSSVariableName(baseVariableName, partToSwitch) {
        let timeKind = "Kind";
        return baseVariableName.replace(timeKind, partToSwitch);
    }

     createContainerStatisticsTimeMain(timeKind){

        let newContainerGameFiledStatisticsTimeKind = createCSSVariableName(containerGameFiledStatisticsTimeKind, timeKind);
        createElementDiv(containerGameFiledStatisticsTimeParts, newContainerGameFiledStatisticsTimeKind);

        newContainerGameFiledStatisticsTimeKindParts = createCSSVariableName(containerGameFiledStatisticsTimeKindParts, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKind, newContainerGameFiledStatisticsTimeKindParts, containerGameFiledCommonParts);

        setElementClassNameById(newContainerGameFiledStatisticsTimeKindParts, containerGameFiledCommonParts);
    }

     createContainerStatisticsTimeUpdate(timeKind) {

        let newContainerGameFiledStatisticsTimeKindGamePlay = createCSSVariableName(containerGameFiledStatisticsTimeKindGamePlay, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindGamePlay, containerGameFiledCommonGamePlayUpdate);

        let newGameFiledStatisticsTimeKindGamePlay = createCSSVariableName(gameFiledStatisticsTimeKindGamePlay, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindGamePlay, newGameFiledStatisticsTimeKindGamePlay, commonGameFiledDisplay);

        let newStatisticsTimeKindGamePlay = createCSSVariableName(statisticsTimeKindGamePlay, timeKind);
        createElementDivWithIdAndSetClassName(newGameFiledStatisticsTimeKindGamePlay, newStatisticsTimeKindGamePlay, commonGamePlayTextUpdate);
        setElementClassNames(newStatisticsTimeKindGamePlay, commonGamePlayUpdateTextTime, newStatisticsTimeKindGamePlay);

        let newStatisticsTimeKindGamePlayTextDisplay = createCSSVariableName(statisticsTimeKindGamePlayDisplay, timeKind);
        setElementTextById(createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), newStatisticsTimeKindGamePlayTextDisplay);
    }

     createContainerStatisticsTimeTextStatic(timeKind, newStatisticsTimeKindTextDisplay){

        let newContainerGameFiledStatisticsTimeKindText = createCSSVariableName(containerGameFiledStatisticsTimeKindText, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindText, containerGameFiledCommonStaticText);

        let newGameFiledStatisticsTimeKindText = createCSSVariableName(gameFiledStatisticsTimeKindText, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindText, newGameFiledStatisticsTimeKindText, commonGameFiledDisplay);

        let newStatisticsTimeKindText = createCSSVariableName(statisticsTimeKindText, timeKind);
        createElementDivWithIdAndSetClassName(newGameFiledStatisticsTimeKindText, newStatisticsTimeKindText, commonStaticText);

        setElementClassNameSameAsIdAndSetText(newStatisticsTimeKindText, newStatisticsTimeKindTextDisplay);
    }

     createContainerStatisticsTime(timeKind, newStatisticsTimeKindTextDisplay) {
        this.createContainerStatisticsTimeMain(timeKind);
         this.createContainerStatisticsTimeUpdate(timeKind);
         this.createContainerStatisticsTimeTextStatic(timeKind, newStatisticsTimeKindTextDisplay);
    }

     createContainerStatisticsTimeBest() {
         this.createContainerStatisticsTime(timeKindBest, statisticsTimeBestTextDisplay);
    }

     createContainerStatisticsTimeMin() {
         this.createContainerStatisticsTime(timeKindMin, statisticsTimeMinTextDisplay);
    }

     createContainerStatisticsTimeAvg() {
         this.createContainerStatisticsTime(timeKindAvg, statisticsTimeAvgTextDisplay);
    }

     createContainerStatisticsTimeMax() {
         this.createContainerStatisticsTime(timeKindMax, statisticsTimeMaxTextDisplay);
    }

     createGameFieldStatisticsTime() {
        createElementDivWithTheSameIdAndClassName(containerGameFiledStatisticsTime, containerGameFiledStatisticsTimeParts);
         this.createContainerStatisticsTimeBest();
         this.createContainerStatisticsTimeMin();
         this.createContainerStatisticsTimeAvg();
         this.createContainerStatisticsTimeMax();
    }
}