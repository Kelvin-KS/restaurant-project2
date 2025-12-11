export default function loadAbout() {
    // Check if content container already exist to prevent duplicate
    const existingContent = document.getElementById('content');
    if (existingContent) {
        existingContent.remove();
    };

    // Create the main content container
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content'

    // -- Hero section --
    const heroDiv = document.createElement('div');
    heroDiv.id = 'hero';

    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.classList.add('about-hero-text');

    const h1Headline = document.createElement('h1');
    h1Headline.textContent = 'About Our Restaurant';

    const pHeadline = document.createElement('p');
    pHeadline.textContent = 'Founded in 2023, our restaurant began withSince opening our doors in 2025, we have been devoted to sharing the authentic essence of our culinary heritage. We select only the finest, locally sourced ingredients to create dishes that leave a lasting impression. By blending time-honored techniques with contemporary flair, our chefs transform every meal into an extraordinary dining experience. a simple vision: to share to authentic flavors of our heritage with the community. We believe in using only the freshest, locally sourced to create dishes that are both comforting and memorable. Our chefs are dedicated to preserving traditional techniques while adding a modern twist, ensuring every meal is an experience.';

    headlineDiv.appendChild(h1Headline);
    headlineDiv.appendChild(pHeadline);

    const heroImgDiv = document.createElement('div');
    heroImgDiv.id = 'hero-img';
    const heroImg = document.createElement('img');
    heroImg.src = 'https://i.ibb.co.com/MjnTj0z/medium-shot-professional-chef-posing-23-2151232159.jpg';
    heroImg.alt = 'hero-image';

    heroImgDiv.appendChild(heroImg)

    heroDiv.appendChild(headlineDiv);
    heroDiv.appendChild(heroImgDiv);

    contentDiv.appendChild(heroDiv);

    // -- Location & Contact Info --
    const myLocAndContact = [
        { name: 'Address', desc: '123 Maplewood Avenue, Brookside, Springfield, IL 62704, USA' },
        { name: 'Opening Hours', desc: 'Mon-Sat - 9AM to 11PM' },
        { name: 'Contact Number', desc: '+233 534596619' },
    ];

    const locAndContactDiv = document.createElement('div');
    locAndContactDiv.id = 'loc-and-contact';

    const h2LocTitle = document.createElement('h2');
    h2LocTitle.textContent = 'Location and Contact Info';
    locAndContactDiv.appendChild(h2LocTitle);

    const sections = document.createElement('div');
    sections.id = 'sections';

    myLocAndContact.forEach(info => {
        const sectionLC = document.createElement('div');
        sectionLC.classList.add('section');

        const h3Name = document.createElement('h3');
        h3Name.textContent = info.name;

        const pDesc = document.createElement('p');
        pDesc.textContent = info.desc;

        sectionLC.appendChild(h3Name);
        sectionLC.appendChild(pDesc);
        sections.appendChild(sectionLC);
    });

    locAndContactDiv.appendChild(sections);

    contentDiv.appendChild(locAndContactDiv);

    document.body.appendChild(contentDiv);
}