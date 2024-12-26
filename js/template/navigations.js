
import AbstractTemplate from "./AbstractTemplate.js";

export default class extends AbstractTemplate {
  constructor() {
    super();
  }

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
      `;
  }


}