function createHeader() {
    const header = document.createElement('header');
    header.classList.add('site-header');

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const links = [
        { href: 'index.html', text: 'Home' },
        { href: 'lost.html', text: 'Lost' },
        { href: 'found.html', text: 'Found' },
        { href: 'submit.html', text: 'Submit' }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);

    return header;
}

export default createHeader;