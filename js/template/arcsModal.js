import { mutations } from "../util/state.js";
import HtmlGenerator from "./modal/htmlGenerator.js";
/**
 * Product Modal Class
 * Handles displaying detailed product information in a modal dialog.
 * Provides rich UI for viewing product details, images, specifications and actions.
 * Supports add to cart and buy now functionality with authentication checks.
 * @extends AbstractModal
 */
import AbstractModal from "./AbstractModal.js";

export default class ProductsModal extends AbstractModal {
    /**
     * Initialize the product modal with required configuration
     * Sets up modal element, toggle attribute and active class
     */
    constructor() {
        super({ modal: 'arcs-modal', toggledata: 'data-arcs-toggle', activeclass: 'open' });
        this.hGen = new HtmlGenerator();
        this.init();
    }

    /**
     * Initialize modal content and bind event handlers
     * Sets up initial HTML content and attaches event listeners
     */
    async init() {
        this.modal.innerHTML = await this.hGen.getHtml();
        this.bindButtons();
        this.bindButtons2();
    }


    /**
     * Bind product-specific click handlers
     * Handles modal toggling and product data loading on click
     */
    bindButtons2() {
        document.body.addEventListener('click', (e) => {
            if (e.target.matches(`[${this.toggleAttr}]`)) {
                e.preventDefault();
                const attributeValue = e.target.getAttribute(this.toggleAttr);
                if (attributeValue) {
                    this.setData((String(attributeValue).split(",")));
                }
            }
        });
    }

    /**
     * Update modal data with product details
     * Fetches fresh data and re-renders modal content
     * @param {string} array - Product identifier to fetch details for
     */
    async setData(arr) {
        const config = { id: arr[0], title: arr[2], img: arr[1] };
        mutations.setDisplay(config);
        this.modal.innerHTML = await this.hGen.getHtml();
        //this.modal.innerHTML = await this.HTMLHelper.getContent();
    }

}
