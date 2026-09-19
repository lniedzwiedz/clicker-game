export class ControllerHomeMain {

    constructor(viewHome) {
        this.viewHome = viewHome;
    }

    createHome(){
        this.viewHome.createHome();
    }
}