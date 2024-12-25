import Builder from "./builder.js";
import AbstractTemplate from "./AbstractTemplate.js";
import Footer from "./footer.js";

export default class extends AbstractTemplate {
    constructor() {
        super();
        new Builder();
        this.footer = new Footer();
        this.init();
    }

    async init() {
        //document.getElementById('app__nav').innerHTML = await this.nav.getHtml();
        document.getElementById('footer').innerHTML = await this.footer.getHtml();
    }
}