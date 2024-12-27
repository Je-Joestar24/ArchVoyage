import { getters } from "../../../util/state.js";

/**
 * HtmlGenerator class is responsible for generating the HTML content for the modal.
 * It fetches the display data from the state getters and constructs the modal's HTML structure.
 */
export default class HtmlGenerator {

    /**
     * Asynchronously generates the HTML structure for the modal content.
     * It fetches the display data, constructs the HTML content, and returns it as a string.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the modal content.
     */
    async getHtml() {
        // Fetch the display data from the state getters
        this.data = getters.getDisplay();
        // Construct the HTML content for the modal
        return `
            <div class="arcs-modal__content">
                <header class="arcs-modal__header">
                    <h2 class="arcs-modal__title">${this.data.title}</h2>
                    <button class="arcs-modal__close" aria-label="Close modal" data-arcs-toggle>
                        <svg data-arcs-toggle xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>
                <div class="arcs-modal__body">
                    <div class="arcs-modal__layout">
                        <div class="arcs-modal__sidebar">
                            <div class="arcs-modal__image">
                                <img src="${this.data.img}" alt="${this.data.title} Arc Image" />
                            </div>
                            ${await this.getInfo()}
                        </div>
                        <div class="arcs-modal__main">
                            ${await this.getOverview()}
                            ${await this.getKeyEvents()}
                            ${await this.getCharacters()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Asynchronously generates the HTML content for the modal's information section.
     * It constructs the HTML for displaying arc number, episodes, and chapters.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the information section.
     */
    async getInfo() {
        return `
        <div class="arcs-modal__info">
            <div class="info-item">
                <h4>Arc Number</h4>
                <p>Arc #${this.data.id}</p>
            </div>
            <div class="info-item">
                <h4>Episodes</h4>
                <p>Episodes ???-???</p>
            </div>
            <div class="info-item">
                <h4>Chapters</h4>
                <p>Chapters ???-???</p>
            </div>
        </div>
        `;
    }

    /**
     * Asynchronously generates the HTML content for the modal's overview section.
     * It constructs the HTML for displaying a brief overview of the arc.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the overview section.
     */
    async getOverview() {
        return `
        <section class="arcs-modal__section">
            <h3>Overview</h3>
            <p class="arcs-modal__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et iusto nesciunt deserunt architecto quibusdam molestias ipsa molestiae magni provident.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et iusto nesciunt deserunt architecto quibusdam molestias ipsa molestiae magni provident.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et iusto nesciunt deserunt architecto quibusdam molestias ipsa molestiae magni provident.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et iusto nesciunt deserunt architecto quibusdam molestias ipsa molestiae magni provident.
            </p>
        </section>`
    }

    /**
     * Asynchronously generates the HTML content for the modal's key events section.
     * It constructs the HTML for displaying key events related to the arc.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the key events section.
     */
    async getKeyEvents() {
        let sample = "";
        for (let _ = 0; _ < 5; _++) sample += "<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>";
        return `
        <section class="arcs-modal__section">
            <h3>Key Events</h3>
            <ul class="arcs-modal__events">
             ${sample}
            </ul>
        </section>
        `;
    }

    /**
     * Asynchronously generates the HTML content for the modal's characters section.
     * It constructs the HTML for displaying major characters related to the arc.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the characters section.
     */
    async getCharacters() {
        let sample = "";
        for (let _ = 0; _ < 5; _++) sample += '<span class="character-tag">Lorem ipsum</span>';
        return `
        <section class="arcs-modal__section">
            <h3>Major Characters</h3>
            <div class="arcs-modal__characters">
                ${sample}
            </div>
        </section>
        `;
    }
}