/**
 * This class is responsible for fetching the arcs data from the server.
 * It uses the Fetch API to make a GET request to the 'json/arcs.json' endpoint.
 * If the response is not ok, it throws an error.
 * If there is an error during the fetch operation, it logs the error and returns an empty array.
 */
export default class {

    /**
     * Asynchronously fetches the arcs data from the server.
     * @returns {Promise} A promise that resolves to the arcs data or an empty array if there was an error.
     */
    async fetchArcsData() {
        try {
            const response = await fetch('json/arcs.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return [];
        }
    }
}