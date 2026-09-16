export  class ControllerTitle{

    constructor(viewTitle) {
        this.viewTitle = viewTitle;
    }

    createTitle(){
        this.viewTitle.createContainerTitle();
    }
}