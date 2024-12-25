/**
 * Acknowledge class generates the HTML structure for the acknowledgments section in the footer.
 * It includes a message indicating that ArcVoyage is a fan-made project and is not affiliated with or
 * endorsed by Eiichiro Oda or Toei Animation. One Piece and its
 * characters are the property of their respective owners.
 */
export default class Acknowledge {
    /**
     * Asynchronously generates the HTML structure for the acknowledgments section in the footer.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the acknowledgments section.
     */
    async getHtml(){
        return `
          <!-- Acknowledgments -->
          <div class="footer__acknowledgments">
            ArcVoyage is a fan-made project and is not affiliated with or
            endorsed by Eiichiro Oda or Toei Animation. One Piece and its
            characters are the property of their respective owners.
          </div>
        `;
    }
}