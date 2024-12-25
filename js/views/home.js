import AView from "./AbstractView.js"

export default class extends AView {
    constructor() {
        super();
        this.setTitle("ArcVoyage | Home");
    }

    async getHtml() {
        return `
        
        `;
    }
}