export class ControllerStatisticsTimeCoordinator {

    constructor(controllerStatisticsTimePrimary, controllerStatisticsTimeSummary, controllerStatisticsTimeHistory) {
        this.controllerStatisticsTimePrimary = controllerStatisticsTimePrimary;
        this.controllerStatisticsTimeSummary = controllerStatisticsTimeSummary;
        this.controllerStatisticsTimeHistory = controllerStatisticsTimeHistory
    }

    configureStatisticsTime() {
        this.createStatisticsTime();
    }

    removeStatisticsTime() {
        this.controllerStatisticsTimePrimary.removeStatisticsTimePrimary();
    }

    createStatisticsTime() {
        this.createStatisticsTimePrimary();
        this.createStatisticsTimeSummary();
        this.createStatisticsTimeHistory();
    }

    createStatisticsTimePrimary() {
        this.controllerStatisticsTimePrimary.createStatisticsTimePrimary()
    }

    createStatisticsTimeSummary() {
        this.controllerStatisticsTimeSummary.createStatisticsTimeSummary();
    }

    createStatisticsTimeHistory() {
        this.controllerStatisticsTimeHistory.createStatisticsTimeHistory();
    }
}