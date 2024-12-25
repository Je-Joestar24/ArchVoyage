/**
 * FooterNavigations class generates the HTML structure for the navigation links in the footer.
 * It includes a title and links to key sections of the website.
 */
export default class FooterNavigations {
    /**
     * Asynchronously generates the HTML structure for the navigation links in the footer.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the navigation links.
     */
    async getHtml(){
        return `
            <!-- Navigation Links -->
          <nav class="footer__nav" role="navigation" aria-label="Footer Navigation">
            <h3 class="footer__nav-title">Quick Links</h3>
            <a href="#/" class="footer__nav-link" data-link aria-label="Home">Home</a>
            <a href="#/arcs" class="footer__nav-link" data-link aria-label="Arcs">Arcs</a>
            <a href="#/about" class="footer__nav-link" data-link aria-label="About">About</a>
          </nav>
        `;
    }
}