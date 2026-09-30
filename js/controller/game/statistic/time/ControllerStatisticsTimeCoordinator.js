export class ControllerStatisticsTimeCoordinator {

    constructor(controllerStatisticsTimePrimary, controllerStatisticsTimeBest, controllerStatisticsTimeHistory) {
        this.controllerStatisticsTimePrimary = controllerStatisticsTimePrimary;
        this.controllerStatisticsTimeBest = controllerStatisticsTimeBest;
        this.controllerStatisticsTimeHistory = controllerStatisticsTimeHistory
    }

    configureStatisticsTime() {
        // this.removeStatisticsTime();
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

    }

    createStatisticsTimeHistory() {

    }
}