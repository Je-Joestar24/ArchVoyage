import HtmlGenerator from "./signupModal/htmlGenerator.js";
/**
 * Signup Modal Class
 * Handles displaying the signup form in a modal dialog.
 * Provides a user-friendly interface for signing up, including form validation and submission.
 * Supports user registration with authentication checks.
 * @extends AbstractModal
 */
import AbstractModal from "./AbstractModal.js";

export default class SignupModal extends AbstractModal {
    /**
     * Initialize the signup modal with required configuration
     * Sets up modal element, toggle attribute, and active class for the signup modal
     */
    constructor() {
        super({ modal: 'signup-modal', toggledata: 'data-auths-signup', activeclass: 'open' });
        this.hGen = new HtmlGenerator();
        this.init();
    }

    /**
     * Initialize modal content and bind event handlers
     * Sets up initial HTML content for the signup form and attaches event listeners for form submission and validation
     */
    async init() {
        this.modal.innerHTML = await this.hGen.getHtml();
        this.bindButtons();
    }


}
