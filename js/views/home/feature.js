/**
 * Represents the Feature section of the home page.
 * This class is responsible for generating the HTML content for the feature section.
 * The feature section showcases a selection of notable arcs from the One Piece series.
 */
export default class {
    /**
     * The feature arcs data.
     * This property holds an array of objects, each representing a feature arc.
     * Each arc object contains properties for the arc's title, image, and description.
     */
    feature = [
        {
            "title": "Marineford",
            "image": "./image/marineford.jpg",
            "description": "The ultimate war between the Marines and the pirates, featuring the most powerful characters in the series."
        },
        {
            "title": "Enies Lobby",
            "image": "./image/enies_lobby.jpg",
            "description": "A rescue mission turns into an all-out war against the World Government to save a crew member."
        },
        {
            "title": "Skypiea",
            "image": "./image/skypiea.jpg",
            "description": "An adventure in the sky island where the crew discovers ancient history and faces a self-proclaimed god."
        }
    ];


    /**
     * Generates the HTML content for the feature section.
     * This method returns a string of HTML code that represents the feature section.
     * The section includes a main content area with a header, feature cards, and a call-to-action (CTA) button.
     * 
     * @returns {string} The HTML content for the feature section.
     */
    async getHtml() {
        return `
        <section class="home__feature-section">
            <main
              class="home__feature-section--contents"
              role="main"
              aria-label="Featured Arcs Section"
            >
              <div class="feature__header">
                <h2 class="feature__title">Featured Arcs</h2>
                <p class="feature__description">
                  Get a glimpse of the most thrilling arcs that define One
                  Piece.
                </p>
              </div>
              ${await this.getFeature()}
              <div class="feature__cta">
                <a class="feature__cta-button" aria-label="View All Arcs" data-link href="#/arcs">
                  View All Arcs
                </a>
              </div>
            </main>
          </section>
        `;
    }

    /**
     * Generates the HTML content for the feature cards.
     * This method returns a string of HTML code that represents the feature cards.
     * The feature cards are represented by article elements with images, titles, and descriptions.
     * 
     * @returns {string} The HTML content for the feature cards.
     */
    async getFeature() {
        return `
        <div class="feature__grid">
            ${this.feature.map( info => `
            <article class="feature__card">
                <img
                    class="feature__card-image"
                    role="img"
                    src="${info.image}"
                    alt="${info.title} Arc Image"
                    loading="lazy"
                />
                <h3 class="feature__card-title">${info.title}</h3>
                <p class="feature__card-description">${info.description}</p>
            </article>`).join("")}
        </div>
        `;
    }
}