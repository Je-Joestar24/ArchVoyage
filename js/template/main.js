
export default class extends AbstractTemplate {
    constructor() {
        super();
    }

    async init() {
        document.getElementById('app__nav').innerHTML = await this.nav.getHtml();
        document.getElementById('footer').innerHTML = await this.footer.getHtml();
    }
}