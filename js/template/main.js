import Builder from "./builder.js"; // Import Builder class for building the application structure
import AbstractTemplate from "./AbstractTemplate.js"; // Import AbstractTemplate class for template inheritance

// Importing components for the application
import Footer from "./footer.js"; // Footer component for the application footer
import Navigations from "./navigations.js"; // Navigations component for the application navigation
import ArcsModal from "./arcsModal.js"; // ArcsModal component for modal functionality
import LoginModal from "./loginModal.js";
import SignupModal from "./signupModal.js";

/**
 * MainTemplate class extends AbstractTemplate to define the main structure and functionality of the application.
 * It initializes the application components and sets up the UI.
 */
export default class extends AbstractTemplate {
    /**
     * Constructor for MainTemplate.
     * Calls the superclass constructor to initialize the template and sets up the application components.
     */
    constructor() {
        super(); // Call the superclass constructor
        new Builder(); // Initialize the Builder to set up the application structure
        this.footer = new Footer(); // Initialize the Footer component
        this.nav = new Navigations(); // Initialize the Navigations component
        this.init(); // Call the init method to set up the UI
    }

    /**
     * Initializes the application UI by setting up the navigation and footer.
     * This method is called after the components are initialized in the constructor.
     */
    async init() {
        // Set the HTML content for the navigation section
        document.getElementById('app__nav').innerHTML = await this.nav.getHtml();
        // Set the HTML content for the footer section
        document.getElementById('footer').innerHTML = await this.footer.getHtml();
        // Initialize the ArcsModal component
        const am = new ArcsModal();
        const login = new LoginModal();
        const signup = new SignupModal();
    }
}