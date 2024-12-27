import { mutations } from "../../util/state.js";
import HtmlGenerator from "./arcsModal/htmlGenerator.js";
/**
 * Arc Modal Class
 * Handles displaying detailed arc information in a modal dialog.
 * Provides a user-friendly interface for viewing arc details, images, and actions.
 * Supports arc-specific functionality with authentication checks.
 * @extends AbstractModal
 */
import AbstractModal from "./AbstractModal.js";

export default class ArcsModal extends AbstractModal {
    /**
     * Initialize the arc modal with required configuration
     * Sets up modal element, toggle attribute, and active class for the arc modal
     */
    constructor() {
        super({ modal: 'arcs-modal', toggledata: 'data-arcs-toggle', activeclass: 'open' });
        this.hGen = new HtmlGenerator();
        this.init();
    }

    /**
     * Initialize modal content and bind event handlers
     * Sets up initial HTML content for the arc modal and attaches event listeners for interactive elements
     */
    async init() {
        this.modal.innerHTML = await this.hGen.getHtml();
        this.bindButtons();
        this.bindButtons2();
    }


    /**
     * Bind arc-specific click handlers
     * Handles modal toggling and arc data loading on click
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
     * Update modal data with arc details
     * Fetches fresh data and re-renders modal content
     * @param {string} array - Arc identifier to fetch details for
     */
    async setData(arr) {
        const config = { id: arr[0], title: arr[2], img: arr[1] };
        mutations.setDisplay(config);
        this.modal.innerHTML = await this.hGen.getHtml();
        //this.modal.innerHTML = await this.HTMLHelper.getContent();
    }

}
