/**
 * Builder class responsible for constructing the main application layout
 * Creates the initial HTML structure including navigation, main content area and footer
 */
export default class {
    constructor() {
        this.build();
    }

    build() {
        document.getElementById("app").innerHTML = this.getHtml();
    }

    getHtml() {
        return `
            ${this.getNav()}
            ${this.getDisplay()}
            ${this.getFooter()}
            ${this.getArcsModal()}
        `;
    }

    getNav(){
        return '<nav id="app__nav" class="nav"></nav>';
    }

    getDisplay(){
        return '<div id="app__display" class="app__display"></div>';
    }

    getFooter(){
        return '<footer id="footer" class="footer"></footer>';
    }

    getArcsModal(){
        return `
            <div id="arcs-modal" class=""></div>
        `;
    }

}