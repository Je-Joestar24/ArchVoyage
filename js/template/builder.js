/**
 * The Builder class is responsible for constructing the main application layout.
 * It creates the initial HTML structure, including the navigation, main content area, and footer.
 */
export default class {
    /**
     * Constructor for the Builder class.
     * Calls the build method to construct the application layout.
     */
    constructor() {
        this.build();
    }

    /**
     * Builds the application layout by setting the HTML content of the app element.
     */
    build() {
        document.getElementById("app").innerHTML = this.getHtml();
    }

    /**
     * Generates the HTML content for the application layout.
     * @returns {string} The HTML content for the application layout.
     */
    getHtml() {
        return `
            ${this.getNav()}
            ${this.getDisplay()}
            ${this.getFooter()}
            ${this.getMessage()}
            ${this.getArcsModal()}
            ${this.getLoginModal()}
            ${this.getSignupModal()}
        `;
    }

    /**
     * Generates the HTML content for the navigation section.
     * @returns {string} The HTML content for the navigation section.
     */
    getNav() {
        return '<nav id="app__nav" class="nav"></nav>';
    }

    /**
     * Generates the HTML content for the main content area.
     * @returns {string} The HTML content for the main content area.
     */
    getDisplay() {
        return '<div id="app__display" class="app__display"></div>';
    }

    /**
     * Generates the HTML content for the footer section.
     * @returns {string} The HTML content for the footer section.
     */
    getFooter() {
        return '<footer id="footer" class="footer"></footer>';
    }

    /**
     * Generates the HTML content for the message section.
     * @returns {string} The HTML content for the message section.
     */
    getMessage() {
        return '<div id="app__message"></div>';
    }

    /**
     * Generates the HTML content for the Arcs modal.
     * @returns {string} The HTML content for the Arcs modal.
     */
    getArcsModal() {
        return `
            <div id="arcs-modal" class=""></div>
        `;
    }

    /**
     * Generates the HTML content for the Login modal.
     * @returns {string} The HTML content for the Login modal.
     */
    getLoginModal() {
        return `
            <div id="login-modal" class="login-modal" data-auths-login></div>`;
    }

    /**
     * Generates the HTML content for the Arcs modal.
     * @returns {string} The HTML content for the Arcs modal.
     */
    getSignupModal() {
        return `
            <div id="signup-modal" class="signup-modal"></div>
        `;
    }
}