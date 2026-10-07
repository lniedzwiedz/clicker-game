export class ControllerStatisticsTimePrimary {

    constructor(viewStatisticsTimePrimary, actionStatisticsTime) {
        this.viewStatisticsTimePrimary = viewStatisticsTimePrimary;
        this.actionStatisticsTime = actionStatisticsTime;
    }

    createStatisticsTimePrimary() {
        this.viewStatisticsTimePrimary.createContainerStatisticsTimePrimary();
    }

    removeStatisticsTimePrimary() {
        this.viewStatisticsTimePrimary.removeContainerStatisticsTimePrimary();
    }
}