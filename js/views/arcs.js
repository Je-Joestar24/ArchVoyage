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
        this.searchTerm = '';
        this.sortOrder = 'asc';
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
                    ${await this.getFilters()}
                </header>

                <div class="arcs__grid">
                    ${await this.getArcs()}
                </div>
            </div>
        </div>    
        `;
    }
    /**
     * Generates the HTML content for the filters section of the arcs page.
     * This method returns a string of HTML code that represents the filters section.
     * The filters section includes a search box and a sort toggle button.
     * 
     * @returns {string} The HTML content for the filters section.
     */
    async getFilters(){
        return `
            <div class="arcs__filters">
                <div class="search-box">
                    <input 
                        type="text" 
                        id="arcSearch" 
                        placeholder="Search arcs..." 
                        class="search-input"
                        aria-label="Search arcs"
                    >
                    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                
                <div class="sort-box">
                    <button id="sortToggle" class="sort-button" aria-label="Toggle sort order">
                        <span>Sort</span>
                        <svg class="sort-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                        </svg>
                    </button>
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
        const filteredArcs = this.dataG.filterAndSortArcs(
            this.data,
            this.searchTerm,
            this.sortOrder
        );

        if (!filteredArcs) {
            return `
                <div class="no-results">
                    No arcs found matching "${this.searchTerm}"
                </div>
            `;
        }

        return filteredArcs.map(elem => `
            <article class="arc-card" aria-label="${elem.title} Arc">
                <div class="arc-card__content">
                    <div class="arc-card__text">
                        <h2 class="arc-card__title">${elem.title}</h2>
                        <p class="arc-card__description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa doloremque magnam adipisci inventore alias velit quis, et doloribus nostrum quas quod accusamus ad nisi id maxime totam repellendus necessitatibus sit! 
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa doloremque magnam adipisci inventore alias velit quis, et doloribus nostrum quas quod accusamus ad nisi id maxime totam repellendus necessitatibus sit!
                        </p>
                        <button class="arc-card__button" aria-label="Learn more about ${elem.title} Arc" data-arcs-toggle="${elem.id},${elem.img},${elem.title}">
                            Learn More
                        </button>
                    </div>
                    <img class="arc-card__image" role="img" src="${elem.img}" alt="${elem.title} Arc Image" loading="lazy"/>
                </div>
            </article>
        `).join("");
    }

    /**
     * Binds event listeners to the search input and sort toggle button.
     * This method is responsible for dynamically updating the arc cards based on user input.
     */
    async bindAll() {
        // Add event listeners after the content is rendered
        const searchInput = document.getElementById('arcSearch');
        const sortButton = document.getElementById('sortToggle');

        searchInput?.addEventListener('input', async (e) => {
            this.searchTerm = e.target.value;
            const arcsGrid = document.querySelector('.arcs__grid');
            arcsGrid.innerHTML = await this.getArcs();
        });

        sortButton?.addEventListener('click', async () => {
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
            sortButton.innerHTML = `Sort ${this.sortOrder === 'asc' ? '↑' : '↓'}`;
            const arcsGrid = document.querySelector('.arcs__grid');
            arcsGrid.innerHTML = await this.getArcs();
        });
    }
}