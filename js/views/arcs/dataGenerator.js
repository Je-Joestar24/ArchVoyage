/**
 * This class is responsible for managing arcs data, including fetching, storing, and filtering.
 */
export default class {
    constructor() {
        this.STORAGE_KEY = 'arcvoyage_arcs_data';
    }

    /**
     * Asynchronously gets the arcs data, either from localStorage or by fetching.
     * @returns {Promise} A promise that resolves to the arcs data.
     */
    async fetchArcsData() {
        try {
            // Check localStorage first
            const cachedData = localStorage.getItem(this.STORAGE_KEY);
            if (cachedData) {
                return JSON.parse(cachedData);
            }

            // If no cached data, fetch from server
            const response = await fetch('json/arcs.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            
            // Store in localStorage for future use
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return [];
        }
    }
    /**
     * Filter and sort arcs based on search term and sort order
     * @param {Array} arcs - The array of arcs to filter and sort
     * @param {string} searchTerm - The search term to filter by
     * @param {string} sortOrder - The sort order ('asc' or 'desc')
     * @returns {Array} Filtered and sorted arcs
     */
    filterAndSortArcs(arcs, searchTerm, sortOrder) {
        // Filter by search term
        let filteredArcs = arcs.filter(arc => 
            arc.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Sort by id
        filteredArcs.sort((a, b) => {
            // Directly compare integer ids
            return sortOrder === 'desc' ? b.id - a.id : a.id - b.id;
        });

        // Return filtered and sorted arcs, or null if no results
        return filteredArcs.length > 0 ? filteredArcs : null;
    }
}