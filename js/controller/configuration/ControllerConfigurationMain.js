export class ControllerConfigurationMain {

    constructor(controllerConfiguration, controllerConfigurationDecorationIcon, controllerConfigurationRound, controllerButtonsRound) {
        this.controllerConfiguration = controllerConfiguration;
        this.controllerConfigurationDecorationIcon = controllerConfigurationDecorationIcon;
        this.controllerConfigurationRound = controllerConfigurationRound;
        this.controllerButtonsRound = controllerButtonsRound;
    }

    createConfiguration() {
        this.createConfigurationMain();
        this.createConfigurationDecorationIcon();
        this.createContainerConfigurationRound();
        this.createConfigurationRound();
    }

    createConfigurationMain() {
        this.controllerConfiguration.createConfigurationMain();
    }

    createConfigurationDecorationIcon() {
        this.controllerConfigurationDecorationIcon.createConfigurationDecorationIcon();
    }

    createContainerConfigurationRound() {
        this.controllerConfigurationRound.createContainerConfigurationRound();
    }

    createConfigurationRound() {
        this.controllerButtonsRound.createConfigurationRound()
    }

    getRoundNumber() {
        return this.controllerButtonsRound.getRoundNumber();
    }

    setConfigurationForRoundNumber() {
        this.controllerButtonsRound.setConfigurationButtonsFinalNumberForPlay();
    }

    setConfigurationRoundNumberWhenGameStop() {
        this.controllerButtonsRound.setConfigurationRoundNumberWhenGameStop();
    }

    setConfigurationGameOver() {
        this.setConfigurationRoundNumberWhenGameStop();

        // this.removeEventListenerOnClickButtonClickColor();
        // this.configureClickColorGameOver();
        // this.setIconsColorAfterGameOver();

        // this.setConfigurationButtonStopGameOver();
    }
}