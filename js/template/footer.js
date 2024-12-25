/**
 * FooterTemplate class extends AbstractTemplate to generate the HTML structure for the footer section.
 * It includes components for description, navigations, social media links, acknowledgments, and copyright information.
 */
import AbstractTemplate from "./AbstractTemplate.js";
import Description from "./footer/description.js";
import Navigations from "./footer/navigations.js";
import Social from "./footer/social.js";
import Acknowledge from "./footer/acknowledge.js";
import Copyright from "./footer/copyright.js";

export default class FooterTemplate extends AbstractTemplate {
  /**
   * Constructor initializes the footer template by creating instances of its components.
   */
  constructor() {
    super();
    this.desc = new Description(); // Description component for the footer
    this.nav = new Navigations(); // Navigations component for the footer
    this.social = new Social(); // Social component for the footer
    this.acknowledge = new Acknowledge(); // Acknowledgments component for the footer
    this.copy = new Copyright(); // Copyright information component for the footer
  }

  /**
   * Asynchronously generates the HTML structure for the footer section.
   * It combines the HTML content from each component to form the complete footer.
   * @returns {Promise<string>} A promise that resolves to the HTML string of the footer.
   */
  async getHtml() {
    return `
        <div class="footer__contents">
        ${await this.desc.getHtml()} <!-- Description section -->
        ${await this.nav.getHtml()} <!-- Navigations section -->
        ${await this.social.getHtml()} <!-- Social section -->
        ${await this.acknowledge.getHtml()} <!-- Acknowledgments section -->
        ${await this.copy.getHtml()} <!-- Copyright information section -->
        </div>
      `;
  }

}