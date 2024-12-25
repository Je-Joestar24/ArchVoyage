
import AbstractTemplate from "./AbstractTemplate.js";

export default class extends AbstractTemplate {
  constructor() {
    super();
  }

  active = "Home"

  navlinks = [
    {
      href: "#/",
      textContent: "Home",
    },
    {
      href: "#/arcs",
      textContent: "Arcs",
    },
    {
      href: "#/about",
      textContent: "About",
    },
  ];

  async getHtml() {
    return `
        <ul class="nav__contents">
          <li class="nav__logo">
            <a href="#/" aria-label="ArcVoyage Home"> Arc<span>Voyage</span> </a>
          </li>
          <div class="nav__links">
            ${ this.navlinks.map(lnk => `<li>
              <a href="${lnk.href}" class="nav__link ${lnk.textContent == this.active ? "active" : ""}" aria-label="${lnk.textContent}" data-link
                >${lnk.textContent}</a>
            </li>`).join("")}
          </div>
      `;
  }


}