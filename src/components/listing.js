// src/components/listing.js

export function createListing(item) {
    const listingElement = document.createElement('div');
    listingElement.classList.add('listing');

    const titleElement = document.createElement('h2');
    titleElement.textContent = item.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = item.description;

    const contactElement = document.createElement('p');
    contactElement.textContent = `Contact: ${item.contact}`;

    listingElement.appendChild(titleElement);
    listingElement.appendChild(descriptionElement);
    listingElement.appendChild(contactElement);

    return listingElement;
}