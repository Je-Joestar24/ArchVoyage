/**
 * Login Modal Class
 * Handles displaying login information in a modal dialog.
 * Provides a user-friendly interface for logging into an account.
 * Supports login functionality with authentication checks.
 * @extends AbstractModal
 */
import AbstractModal from "./AbstractModal.js";
import HtmlGenerator from "./loginModal/htmlGenerator.js";

export default class LoginModal extends AbstractModal {
    /**
     * Initialize the login modal with required configuration
     * Sets up modal element, toggle attribute, and active class for the login modal
     */
    constructor() {
        super({ modal: 'login-modal', toggledata: 'data-auths-login', activeclass: 'open' });
        this.htmlGen = new HtmlGenerator();
        this.init();
    }

    /**
     * Initialize modal content and bind event handlers
     * Sets up initial HTML content for the login modal and attaches event listeners for interactive elements
     */
    async init() {
        this.modal.innerHTML = await this.htmlGen.getHtml();
        this.bindButtons();
    }
}
