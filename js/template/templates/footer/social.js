/**
 * SocialMediaSection class generates the HTML structure for the social section in the footer.
 * It includes a title and a message encouraging users to follow for more content and updates.
 */
export default class SocialMediaSection {
    /**
     * Asynchronously generates the HTML structure for the social section.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the social section.
     */
    async getHtml(){
        return `
            <!-- Social Media Section -->
          <div class="footer__nav">
            <h3 class="footer__nav-title">Follow Us</h3>
            <p class="footer__text">
              Follow us for more One Piece content and updates!
            </p>
          </div>
        `;
    }
}