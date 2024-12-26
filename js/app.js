/**
 * ArcVoyage - One Piece Story Arc Guide
 * A Single Page Application (SPA) Project
 * ----------------------------------------
 * 
 * Project Overview:
 * ArcVoyage is a comprehensive guide to the One Piece anime/manga series story arcs.
 * Built as a Single Page Application, it provides an interactive and seamless user
 * experience for exploring the various story arcs of One Piece.
 * 
 * SPA Architecture:
 * - Single Page Application (SPA): The application loads once and dynamically
 *   updates content without full page reloads, providing a smoother user experience.
 * - Client-side Routing: Handles navigation without server requests, updating the
 *   URL and content dynamically.
 * - State Management: Maintains application state for consistent data across components.
 * 
 * Key Features:
 * 1. Arc Exploration: Browse and search through One Piece story arcs
 * 2. Detailed Arc Information: View comprehensive details about each arc
 * 3. Interactive UI: Smooth transitions and responsive design
 * 4. Data Persistence: Local storage for improved performance
 * 
 * Technical Implementation:
 * - Vanilla JavaScript: Pure JS implementation without frameworks
 * - CSS3: Modern styling with animations and responsive design
 * - HTML5: Semantic markup with accessibility features
 * - Local Storage: Client-side data persistence
 * 
 * Project Structure:
 * /js
 *   /views - Individual page views
 *   /template - Reusable UI components
 *   /util - Utility functions and state management
 * 
 * Accessibility:
 * - ARIA labels and roles for screen readers
 * - Semantic HTML structure
 * - Focus management
 * 
 * Performance Optimization:
 * - Lazy loading of content
 * - Local storage caching
 * - Modular CSS and JS
 * - Optimized assets
 * 
 * @author Jejomar Parrilla
 * @version 1.0.0
 */

import { Router } from './util/router.js';
import Main from './template/main.js';

// Add event listener for data-link clicks
document.addEventListener('DOMContentLoaded', async () => {
    new Main();
    const router = new Router('#app__display');

    // Add event listeners for navigation and page reload
    window.addEventListener('popstate', () => router.route());
    window.addEventListener('load', () => router.route());

    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            router.navigateTo(e.target.href);
        }
    });
    // Initial route
    router.route();
});
