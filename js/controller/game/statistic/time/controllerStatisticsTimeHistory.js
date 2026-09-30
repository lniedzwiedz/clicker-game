export class ControllerStatisticsTimeHistory {

    constructor(viewStatisticsTimeHistory) {
        this.viewStatisticsTimeHistory = viewStatisticsTimeHistory;
    }

    createStatisticsTimeHistory(){
        this.viewStatisticsTimeHistory.createContainerStatisticsTimedHistory();
    }

}