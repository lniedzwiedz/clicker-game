export class ControllerFooterMain {

    constructor(viewFooterMain, controllerAuthor) {
        this.viewFooterMain = viewFooterMain;
        this.controllerAuthor = controllerAuthor
    }

    createFooter(){
        this.createFooterMain();
        this.createAuthor();
    }

    createFooterMain(){
        this.viewFooterMain.createFooterMain();
    }

    createAuthor(){
        this.controllerAuthor.createAuthor();
    }
}