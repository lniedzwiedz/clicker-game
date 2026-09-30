export class ControllerStatisticsTimeSummary {

    constructor(viewStatisticsTimeSummary) {
        this.viewStatisticsTimeSummary = viewStatisticsTimeSummary
    }

    createStatisticsTimeSummary() {
        this.viewStatisticsTimeSummary.createContainerStatisticsTimeSummary();
    }
}