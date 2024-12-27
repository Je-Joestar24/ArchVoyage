/**
 * Copyright class generates the HTML structure for the copyright section in the footer.
 * It includes the copyright symbol, the year, and a statement indicating that all rights are reserved.
 */
export default class Copyright {
    /**
     * Asynchronously generates the HTML structure for the copyright section.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the copyright section.
     */
    async getHtml(){
        return `
            <!-- Copyright -->
          <div class="footer__copyright">
            © 2024 ArcVoyage. All rights reserved.
          </div>
        `;
    }
}