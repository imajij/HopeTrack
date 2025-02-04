// Utility functions for the lost and found website

/**
 * Validates if the input is not empty.
 * @param {string} input - The input string to validate.
 * @returns {boolean} - Returns true if the input is valid, false otherwise.
 */
function validateInput(input) {
    return input.trim() !== '';
}

/**
 * Formats a date to a readable string.
 * @param {Date} date - The date to format.
 * @returns {string} - Returns the formatted date string.
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

/**
 * Generates a unique ID for items.
 * @returns {string} - Returns a unique identifier.
 */
function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

// Exporting utility functions
export { validateInput, formatDate, generateUniqueId };