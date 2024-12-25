/**
 * Represents the Home view of the application.
 * This class is responsible for generating the HTML content for the home page.
 * It extends the AView class, inheriting common functionality for setting page title and rendering HTML.
 */
import AView from "./AbstractView.js"

/**
 * Importing the Hero, Feature, and Summary classes to generate their respective HTML content.
 */
import Hero from "./home/hero.js"
import Feature from "./home/feature.js";
import Summary from "./home/summary.js";

/**
 * The Home view class.
 * This class initializes the home page view, setting the title and creating instances of the Hero, Feature, and Summary sections.
 */
export default class extends AView {
    /**
     * Constructor for the Home view class.
     * Initializes the view by setting the title and creating instances of the Hero, Feature, and Summary sections.
     */
    constructor() {
        super();
        /**
         * Setting the title of the page to "ArcVoyage | Home".
         */
        this.setTitle("ArcVoyage | Home");
        /**
         * Creating instances of the Hero, Feature, and Summary sections.
         */
        this.feature = new Feature();
        this.hero = new Hero();
        this.summary = new Summary();
    }

    /**
     * Generates the HTML content for the home page.
     * This method returns a string of HTML code that represents the home page.
     * The home page includes sections for the Hero, Feature, and Summary.
     * 
     * @returns {string} The HTML content for the home page.
     */
    async getHtml() {
        return `
        <div class="home">
            ${await this.hero.getHtml()}
            ${await this.feature.getHtml()}
            ${await this.summary.getHtml()}
        </div>
        `;
    }
}