// Sample data structure for found items
const foundItems = [
    {
        id: 1,
        name: 'Rex',
        type: 'pet',
        species: 'Dog',
        location: 'City Park',
        dateFound: '2024-01-18',
        contact: '555-0125',
        image: 'https://via.placeholder.com/200'
    },
    {
        id: 2,
        name: 'Mittens',
        type: 'pet',
        species: 'Cat',
        location: 'Main Street',
        dateFound: '2024-01-19',
        contact: '555-0126',
        image: 'https://via.placeholder.com/200'
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const typeFilter = document.getElementById('type-filter');
    const dateFilter = document.getElementById('date-filter');
    const locationFilter = document.getElementById('location-filter');
    const foundItemsContainer = document.getElementById('found-items-container');

    // Filter items based on criteria
    function filterItems() {
        let filtered = [...foundItems];

        // Filter by type
        if (typeFilter.value !== 'all') {
            filtered = filtered.filter(item => item.type === typeFilter.value);
        }

        // Filter by date
        if (dateFilter.value) {
            filtered = filtered.filter(item => item.dateFound === dateFilter.value);
        }

        // Filter by location
        if (locationFilter.value) {
            filtered = filtered.filter(item => 
                item.location.toLowerCase().includes(locationFilter.value.toLowerCase())
            );
        }

        displayItems(filtered);
    }

    // Display items in the container
    function displayItems(items) {
        foundItemsContainer.innerHTML = items.map(item => `
            <div class="found-item-card" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Type: ${item.species}</p>
                <p>Location: ${item.location}</p>
                <p>Date Found: ${item.dateFound}</p>
                <p>Contact: ${item.contact}</p>
                <button class="btn primary claim-btn" onclick="claimItem(${item.id})">Claim ${item.type}</button>
            </div>
        `).join('');
    }

    // Claim item functionality
    window.claimItem = function(itemId) {
        const item = foundItems.find(item => item.id === itemId);
        if (item) {
            const confirmClaim = confirm(`Are you sure you want to claim ${item.name}?`);
            if (confirmClaim) {
                alert(`Please contact ${item.contact} to claim ${item.name}.`);
            }
        }
    }

    // Event listeners
    typeFilter.addEventListener('change', filterItems);
    dateFilter.addEventListener('change', filterItems);
    locationFilter.addEventListener('input', filterItems);

    // Initial display
    displayItems(foundItems);
});

// Helper function to format date
function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

// Add new found item
function addFoundItem(item) {
    foundItems.push({
        id: foundItems.length + 1,
        ...item
    });
    filterItems();
}