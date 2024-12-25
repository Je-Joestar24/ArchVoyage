import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("ArcVoyage | Arcs");
    }

    async getHtml() {
        return `
        <div class="arcs">
            <div class="arcs__contents">
                <header class="arcs__header">
                    <h1 class="arcs__title">Arcs Guide</h1>
                    <p class="arcs__subtitle">Explore the epic journey through One Piece's most memorable arcs</p>
                </header>

                <div class="arcs__grid">
                    <!-- Sample Arc Card -->
                    <article class="arc-card" aria-label="Marineford War Arc">
                        <div class="arc-card__content">
                            <div class="arc-card__text">
                                <h2 class="arc-card__title">Marineford War</h2>
                                <p class="arc-card__description">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa doloremque magnam adipisci inventore alias velit quis, et doloribus nostrum quas quod accusamus ad nisi id maxime totam repellendus necessitatibus sit! 
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa doloremque magnam adipisci inventore alias velit quis, et doloribus nostrum quas quod accusamus ad nisi id maxime totam repellendus necessitatibus sit!
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa doloremque magnam adipisci 
                                </p>
                                <button class="arc-card__button" aria-label="Learn more about Marineford War Arc">
                                    Learn More
                                </button>
                            </div>
                            <img class="arc-card__image" role="img" src="" alt="Marineford War Arc Image"/>
                        </div>
                    </article>
                </div>
            </div>
        </div>    
        `;
    }
}