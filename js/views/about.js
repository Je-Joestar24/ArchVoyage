import AbstractView from "./AbstractView.js";

/**
 * AboutView class extends AbstractView to render the About page content.
 * It sets the page title and generates the HTML content for the About page.
 */
export default class extends AbstractView{
    /**
     * Constructor for AboutView.
     * Calls the superclass constructor and sets the page title.
     */
    constructor(){
        super();
        this.setTitle("ArcVoyage | About");
    }

    /**
     * Asynchronously generates the HTML content for the About page.
     * @returns {Promise<string>} A promise that resolves to the HTML content as a string.
     */
    async getHtml(){
        return `
        <div class="about">
            <div class="about__contents">
                <header class="about__header">
                    <h1 class="about__title">About ArcVoyage</h1>
                </header>
                
                <div class="about__description">
                    <p class="about__paragraph">
                        ArcVoyage is a fan-made, interactive guide for the 
                        <span class="about__highlight">One Piece</span> anime series. 
                        The goal of this project is to provide fans with a comprehensive 
                        overview of the major arcs in the One Piece universe, from the 
                        start of the series to the pivotal Marineford War.
                    </p>
                    
                    <p class="about__paragraph">
                        Whether you're a long-time fan or new to the world of 
                        <span class="about__highlight">One Piece</span>, ArcVoyage 
                        serves as a quick and easy reference to explore the storyline 
                        of each arc, characters involved, and major events.
                    </p>
                    
                    <p class="about__paragraph">
                        Join <span class="about__highlight">Luffy</span> and his crew 
                        on their epic adventures across the seas as you navigate through 
                        the significant arcs in their quest to become the 
                        <span class="about__highlight">Pirate King</span>!
                    </p>
                </div>
            </div>
        </div>
        `;
    }
}