/**
 * Generates the HTML content for the signup modal.
 * This class is responsible for dynamically generating the HTML structure
 * of the signup modal, including its header, form, and footer.
 */
export default class{
    /**
     * Asynchronously generates the HTML content for the signup modal.
     * This method returns a promise that resolves to the HTML string.
     * @returns {Promise<string>} A promise that resolves to the HTML string.
     */
    async getHtml(){
        return `
            <div class="signup-modal__contents">
                <div class="signup-modal__header">
                    <h2 class="signup-modal__title">Create Your Account</h2>
                    <button class="signup-modal__close" aria-label="Close signup modal" data-auths-signup>
                        <span class="signup-modal__close-icon" data-auths-signup></span>
                    </button>
                </div>
                <form class="signup-modal__form">
                    <div class="signup-modal__input-group">
                        <label for="signup-username" class="signup-modal__label">Username</label>
                        <input 
                            type="text" 
                            id="signup-username" 
                            class="signup-modal__input" 
                            required 
                            aria-required="true"
                            placeholder="Choose a username"
                        >
                    </div>
                    <div class="signup-modal__input-group">
                        <label for="signup-email" class="signup-modal__label">Email</label>
                        <input 
                            type="email" 
                            id="signup-email" 
                            class="signup-modal__input" 
                            required 
                            aria-required="true"
                            placeholder="Enter your email"
                        >
                    </div>
                    <div class="signup-modal__input-group">
                        <label for="signup-password" class="signup-modal__label">Password</label>
                        <input 
                            type="password" 
                            id="signup-password" 
                            class="signup-modal__input" 
                            required 
                            aria-required="true"
                            placeholder="Create a password"
                        >
                    </div>
                    <div class="signup-modal__input-group">
                        <label for="signup-confirm" class="signup-modal__label">Confirm Password</label>
                        <input 
                            type="password" 
                            id="signup-confirm" 
                            class="signup-modal__input" 
                            required 
                            aria-required="true"
                            placeholder="Confirm your password"
                        >
                    </div>
                    <button type="submit" class="signup-modal__submit">
                        Create Account
                    </button>
                </form>
                <div class="signup-modal__footer">
                    <p>Already have an account? <a href="#" class="signup-modal__link" data-auths-login data-auths-signup>Login</a></p>
                </div>
            </div>
        `;
    }
}