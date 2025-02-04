export function createSearchComponent() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search for lost or found items...';
    searchContainer.appendChild(searchInput);

    const searchButton = document.createElement('button');
    searchButton.innerText = 'Search';
    searchButton.onclick = () => {
        const query = searchInput.value;
        // Implement search functionality here
        console.log(`Searching for: ${query}`);
    };
    searchContainer.appendChild(searchButton);

    return searchContainer;
}