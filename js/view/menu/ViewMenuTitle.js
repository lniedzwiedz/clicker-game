import {
    createElementDiv,
    createElementP,
    addElementClassNamedAndText,
    addElementClassNameById
} from "../../common/function/commonFunctions.js";

import * as variablesMenuTitle from "../../common/variable/menu/variablesMenuTitle.js";


export class ViewMenuTitle {

    createContainerMenuTitle() {
        this.createContainerMenuTitlePrimary();
        this.createMenuTitle();
    }

    createContainerMenuTitlePrimary() {
        this.createContainerMenuTitleMain();
    }

    createContainerMenuTitleMain() {
        createElementDiv(
            variablesMenuTitle.containerMenuMainPartsId,
            variablesMenuTitle.containerTitleMainId
        );
    }

    createMenuTitle() {
        this.createMenuTitleMain();
        this.createMenuTitleText();
    }

    createMenuTitleMain() {
        createElementDiv(
            variablesMenuTitle.containerTitleMainId,
            variablesMenuTitle.menuTitleId
        );

        addElementClassNameById(
            variablesMenuTitle.menuTitleId,
            variablesMenuTitle.menuTitleStyleDisplayFlex
        );
    }

    createMenuTitleText() {
        createElementP(
            variablesMenuTitle.menuTitleId,
            variablesMenuTitle.menuTitleTextId
        );

        addElementClassNamedAndText(
            variablesMenuTitle.menuTitleTextId,
            variablesMenuTitle.menuTitleStyleText,
            variablesMenuTitle.menuTitleText
        );
    }
}