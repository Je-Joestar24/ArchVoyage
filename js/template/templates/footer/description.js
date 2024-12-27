/**
 * FooterDescription class generates the HTML structure for the description section in the footer.
 * It includes a logo link to the home page and a brief description of the website's purpose.
 */
export default class FooterDescription {
    /**
     * Asynchronously generates the HTML structure for the description section in the footer.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the description section.
     */
    async getHtml(){
        return `
            <!-- Description Section -->
          <div class="footer__description">
            <a href="/" class="footer__logo" aria-label="ArcVoyage Home">
              Arc<span>Voyage</span>
            </a>
            <p class="footer__text">
              ArcVoyage is your ultimate guide to the incredible arcs of One
              Piece, from East Blue to the New World. Dive into the epic journey
              of the Straw Hat Pirates!
            </p>
          </div>
        `;
    }
}