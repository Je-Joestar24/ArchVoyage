import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("ArcVoyage | About");
    }

    async getHtml(){
        return ``;
    }
}