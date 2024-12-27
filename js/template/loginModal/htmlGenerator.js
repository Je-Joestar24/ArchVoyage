/**
 * HtmlGenerator class is responsible for generating the HTML content for the login modal.
 * It constructs the HTML structure for the login modal.
 */
export default class {
    /**
     * Asynchronously generates the HTML structure for the login modal content.
     * It constructs the HTML content for the login modal and returns it as a string.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the login modal content.
     */
    async getHtml() {
        return `
            <div class="login-modal__contents">
                <div class="login-modal__header">
                    <h2 class="login-modal__title">Login to Your Account</h2>
                    <button class="login-modal__close" aria-label="Close login modal" data-auths-login>
                        <span class="login-modal__close-icon" data-auths-login></span>
                    </button>
                </div>
                <form class="login-modal__form">
                    <div class="login-modal__input-group">
                        <label for="email" class="login-modal__label">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            class="login-modal__input" 
                            required 
                            aria-required="true"
                            placeholder="Enter your email"
                        >
                    </div>
                    <div class="login-modal__input-group">
                        <label for="password" class="login-modal__label">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            class="login-modal__input" 
                            required 
                            aria-required="true"
                            placeholder="Enter your password"
                        >
                    </div>
                    <button type="submit" class="login-modal__submit">
                        Login
                    </button>
                </form>
                <div class="login-modal__footer">
                    <p>Don't have an account? <a href="#" class="login-modal__link" data-auths-login data-auths-signup>Sign up</a></p>
                </div>
            </div>
        `;
    }
}