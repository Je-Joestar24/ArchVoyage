/**
 * The main application state object.
 * This object holds the current state of the application, specifically the display properties.
 * 
 * @property {Object} display - The display properties of the application state.
 * @property {number} display.id - The ID of the currently displayed item.
 * @property {string} display.title - The title of the currently displayed item.
 * @property {string} display.img - The image URL of the currently displayed item.
 */
const state = {
    display: {
        id: -1,
        title: "",
        img: ""
    }
}; // Accessing the main application state

/**
 * Getters: Retrieve state data
 * This object contains functions that allow access to the state data without directly modifying it.
 * 
 * @property {Function} getDisplay - Returns the current display state.
 */
const getters = {
    /**
     * Returns the current display state.
     * 
     * @returns {Object} The current display state.
     */
    getDisplay: () => state.display
}

/**
 * Mutations: Synchronous functions to modify the state
 * This object contains functions that directly modify the state.
 * 
 * @property {Function} setDisplay - Sets the display state to a new configuration.
 */
const mutations = {
    /**
     * Sets the display state to a new configuration.
     * This function updates the state.display object with the provided configuration.
     * 
     * @param {Object} config - The new configuration for the display state.
     */
    setDisplay: (config) => {
        state.display = config;
    }
}
// Actions: Asynchronous or complex operations
const actions = {
    /**
     * Sets the active navigation item in the application.
     * This function removes the active class from all navigation items
     * and adds it to the specified item based on its ID.
     * 
     * @param {string} active_id - The ID of the navigation item to activate.
     * @param {string} active_class - The class name to apply for the active state.
     */
    setActiveNavigation(active_id, active_class) {
        const nav = document.getElementById(`app__nav`);
        nav.querySelectorAll(`.${active_class}`).forEach(e => {
            e.classList.remove(active_class);
        });
        const found = nav.querySelector(`#${active_id}`);
        if (found) found.classList.add(active_class);
    },
    /**
     * Displays a message on the application page.
     * This function updates the message display area with the provided message
     * and fades it out after a specified duration.
     * 
     * @param {string} message - The message to display.
     * @param {number} custom - The duration in milliseconds before the message fades out (default is 10).
     */
    displayMessage(message, custom = 10) {
        const message_display = document.querySelector('#app__message');
        message_display.classList.remove('fade-out');
        message_display.innerHTML = message;
        setTimeout(() => {
            message_display.classList.add('fade-out');
        }, custom);
    },
}; // Corrected the typo from 'funciton' to 'functions'

export { state, getters, mutations, actions }; // Exporting state management functions