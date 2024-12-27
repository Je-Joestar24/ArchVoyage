import AbstractTemplate from "./AbstractTemplate.js";

/**
 * NavigationTemplate class extends AbstractTemplate to render the navigation bar content.
 * It defines the navigation links and generates the HTML content for the navigation bar.
 */
export default class extends AbstractTemplate {
  /**
   * Constructor for NavigationTemplate.
   * Calls the superclass constructor to initialize the template.
   */
  constructor() {
    super();
  }

  /**
   * Array of navigation links.
   * Each link object contains the href, id, and textContent for the navigation item.
   */
  navlinks = [
    {
      href: "#/",
      id: "home-nav",
      textContent: "Home",
    },
    {
      href: "#/arcs",
      id: "arcs-nav",
      textContent: "Arcs",
    },
    {
      href: "#/about",
      id: "about-nav",
      textContent: "About",
    },
  ];

  /**
   * Asynchronously generates the HTML content for the navigation bar.
   * @returns {Promise<string>} A promise that resolves to the HTML content as a string.
   */
  async getHtml() {
    return `
        <ul class="nav__contents">
          <li class="nav__logo">
            <a href="#/" aria-label="ArcVoyage Home"> Arc<span>Voyage</span> </a>
          </li>
          <div class="nav__links">
            ${this.navlinks.map(lnk => `<li>
              <a id="${lnk.id}" href="${lnk.href}" class="nav__link" aria-label="${lnk.textContent}" data-link
                >${lnk.textContent}</a>
            </li>`).join("")}
          </div>
          <div class="nav__auth">
            <button class="btn btn--login" aria-label="Login to your account" data-auths-login>
              Login
            </button>
            <button class="btn btn--signup" aria-label="Create new account" data-auths-signup>
              Sign Up
            </button>
          </div>
        </ul>
      `;
  }
}