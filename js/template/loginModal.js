/**
 * Product Modal Class
 * Handles displaying detailed product information in a modal dialog.
 * Provides rich UI for viewing product details, images, specifications and actions.
 * Supports add to cart and buy now functionality with authentication checks.
 * @extends AbstractModal
 */
import AbstractModal from "./AbstractModal.js";
import HtmlGenerator from "./loginModal/htmlGenerator.js";

export default class ProductsModal extends AbstractModal {
    /**
     * Initialize the product modal with required configuration
     * Sets up modal element, toggle attribute and active class
     */
    constructor() {
        super({ modal: 'login-modal', toggledata: 'data-auths-login', activeclass: 'open' });
        this.htmlGen = new HtmlGenerator();
        this.init();
    }

    /**
     * Initialize modal content and bind event handlers
     * Sets up initial HTML content and attaches event listeners
     */
    async init() {
        this.modal.innerHTML = await this.htmlGen.getHtml();
        this.bindButtons();
    }
}
