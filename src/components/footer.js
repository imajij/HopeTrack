export function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2023 Lost and Found Platform. All rights reserved.</p>
        <nav>
            <a href="index.html">Home</a>
            <a href="lost.html">Lost Items</a>
            <a href="found.html">Found Items</a>
            <a href="submit.html">Submit Item</a>
        </nav>
    `;
    return footer;
}