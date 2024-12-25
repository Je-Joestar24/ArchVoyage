/**
 * Represents the Summary section of the home page.
 * This class is responsible for generating the HTML content for the summary section.
 */
export default class {
    /**
     * Generates the HTML content for the summary section.
     * This method returns a string of HTML code that represents the summary section.
     * The section includes a header with a title and description, a decoration section with points,
     * and a call-to-action (CTA) section with a button.
     * 
     * @returns {string} The HTML content for the summary section.
     */
    async getHtml() {
        return `
    <section class="home__summary-section">
        <main
            class="home__summary-section--contents"
            role="main"
            aria-label="Summary Section"
        >
            <div class="summary__header">
            <h2 class="summary__title">The Adventure So Far</h2>
            <p class="summary__description">
                From his humble beginnings in the East Blue to the thrilling
                battles of Marineford, Monkey D. Luffy has faced countless
                adventures, allies, and enemies. Join us as we retrace the
                steps of the future Pirate King!
            </p>
            </div>
            <div class="summary__decoration">
            <ul class="summary__decoration-points"> ${ await this.getDecor() } </ul>
            </div>
            <div class="summary__cta">
            <a
                class="summary__cta-button"
                aria-label="Start Your Voyage"
                href="#/arcs"
                data-link
            >
                Start Your Voyage
            </a>
            </div>
        </main>
    </section>
        `
    }

    /**
     * Generates the decoration points for the summary section.
     * This method returns a string of HTML code that represents the decoration points.
     * The decoration points are represented by list items (<li>) with a specific class.
     * 
     * @returns {string} The HTML content for the decoration points.
     */
    async getDecor(){
        let decor = "";
        for(let i = 0; i < 10; i ++) decor += '<li class="summary__decoration-point"></li>';
        return decor;
    }
}