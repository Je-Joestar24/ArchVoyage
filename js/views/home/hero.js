/**
 * Represents the Hero section of the home page.
 * This class is responsible for generating the HTML content for the hero section.
 */
export default class {
    /**
     * Generates the HTML content for the hero section.
     * This method returns a string of HTML code that represents the hero section.
     * The section includes a main content area with a title, description, and a call-to-action (CTA) button,
     * as well as a decoration section.
     * 
     * @returns {string} The HTML content for the hero section.
     */
    async getHtml() {
        return `
        <section class="home__hero-section">
            <main
                class="home__hero-section--contents"
                role="main"
                aria-label="Hero Section"
            >
                <div class="home__hero-desc">
                <h1 class="home__hero-title" aria-label="Welcome to ArcVoyage">
                    Welcome to <span>ArcVoyage</span>
                </h1>
                <p
                    class="home__hero-description"
                    aria-label="Brief introduction to the website's purpose"
                >
                    Embark on an epic journey through the world of One Piece.
                    Discover every arc, every adventure, and every moment that
                    makes this story legendary.
                </p>
                <a class="home__hero-button" aria-label="Explore the Arcs" data-link href="#/arcs">
                    Explore the Arcs
                </a>
                </div>
                <div class="home__hero-decoration"></div>
            </main>
        </section>
    `}
}