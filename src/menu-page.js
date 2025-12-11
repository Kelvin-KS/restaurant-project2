import menuList from "./all-menu-list.js";

export default function loadMenu() {
    // Check if content container already exist to prevent duplicate
    const existingContent = document.getElementById('content');
    if (existingContent) {
        existingContent.remove();
    };

    // Create the main content container
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content'

    // -- Hero section --
    const heroMenu = document.createElement('div');
    heroMenu.id = 'hero-menu';
    
    const heroText = document.createElement('div');
    heroText.id = 'hero-menu-text';

    const h1Hero = document.createElement('h1');
    h1Hero.textContent = 'Our Menu';
    const pDesc = document.createElement('p');
    pDesc.textContent = 'Explore our full range of fresh, delicious offerings';
    const cta = document.createElement('button');
    cta.classList.add('order-btn');
    cta.textContent = 'Order Now';

    heroText.appendChild(h1Hero);
    heroText.appendChild(pDesc);
    heroText.appendChild(cta);

    heroMenu.appendChild(heroText)

    // -- Menu sections --

    const menuItems = menuList;

    const menus = document.createElement('div');
    menus.id = 'menus';

    const menusContainer = document.createElement('div');
    menusContainer.id = 'menus-container';

    menuItems.forEach(section => {
        const menuSection = document.createElement('div');
        menuSection.classList.add('menu-section');

        const h2Section = document.createElement('h2');
        h2Section.textContent = section.category;
        menuSection.appendChild(h2Section);

        const menuGridDiv = document.createElement('div');
        menuGridDiv.classList.add('menu-grid');

        section.items.forEach(item => {
            const cardMenu = document.createElement('div');
            cardMenu.classList.add('menu-card');

            // Using Template Literals to build the card HTML
            cardMenu.innerHTML = `
                <div class="card-image">
                <img src="${item.image}" alt="${item.name}-img">
                </div>
                <div class="card-content">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <h3 class="price">${item.price}</h3>
                </div>
            `;

            menuGridDiv.appendChild(cardMenu);
        })

        menuSection.appendChild(menuGridDiv)
        menusContainer.appendChild(menuSection)
    })

    





    contentDiv.appendChild(heroMenu);
    contentDiv.appendChild(menusContainer)
    document.body.appendChild(contentDiv);
}