import AbstractView from "./AbstractView.js";
import DataGenerator from "./arcs/dataGenerator.js";

/**
 * Represents the Arcs view of the application.
 * This class is responsible for generating the HTML content for the arcs page.
 * It extends the AbstractView class, inheriting common functionality for setting page title and rendering HTML.
 */
export default class extends AbstractView {
    /**
     * Constructor for the Arcs view class.
     * Initializes the view by setting the title and creating an instance of the DataGenerator.
     */
    constructor() {
        super();
        /**
         * Creating an instance of the DataGenerator.
         */
        this.dataG = new DataGenerator();
        /**
         * Setting the title of the page to "ArcVoyage | Arcs".
         */
        this.setTitle("ArcVoyage | Arcs");
    }

    /**
     * Generates the HTML content for the arcs page.
     * This method returns a string of HTML code that represents the arcs page.
     * The arcs page includes a header and a grid of arc cards.
     * 
     * @returns {string} The HTML content for the arcs page.
     */
    async getHtml() {
        this.data = await this.dataG.fetchArcsData();
        return `
        <div class="arcs">
            <div class="arcs__contents">
                <header class="arcs__header">
                    <h1 class="arcs__title">Arcs Guide</h1>
                    <p class="arcs__subtitle">Explore the epic journey through One Piece's most memorable arcs</p>
                </header>

                <div class="arcs__grid">
                    <!-- Sample Arc Card -->
                    ${await this.getArcs()}
                </div>
            </div>
        </div>    
        `;
    }

    /**
     * Generates the HTML content for the arc cards.
     * This method returns a string of HTML code that represents the arc cards.
     * Each arc card includes the title, description, and a button to learn more.
     * 
     * @returns {string} The HTML content for the arc cards.
     */
    async getArcs() {
        return (this.data.map(elem => `
            <article class="arc-card" aria-label="${elem.title} Arc">
                <div class="arc-card__content">
                    <div class="arc-card__text">
                        <h2 class="arc-card__title">${elem.title}</h2>
                        <p class="arc-card__description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa doloremque magnam adipisci inventore alias velit quis, et doloribus nostrum quas quod accusamus ad nisi id maxime totam repellendus necessitatibus sit! 
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa doloremque magnam adipisci inventore alias velit quis, et doloribus nostrum quas quod accusamus ad nisi id maxime totam repellendus necessitatibus sit!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa doloremque magnam adipisci 
                        </p>
                        <button class="arc-card__button" aria-label="Learn more about ${elem.title} Arc" data-arcs-toggle="${elem.id},${elem.img},${elem.title}">
                            Learn More
                        </button>
                    </div>
                    <img class="arc-card__image" role="img" src="${elem.img}" alt="${elem.title} Arc Image"/>
                </div>
            </article>
        `).join(""));
    }
}