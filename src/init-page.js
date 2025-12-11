export default function loadHome() {
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

    const h1Headline = document.createElement('h1');
    h1Headline.textContent = 'Delicious Food, Served Fresh Everyday';

    const pHeadline = document.createElement('p');
    pHeadline.textContent = 'We offer a variety of freshly cooked meals made with the best ingredients';

    const cta = document.createElement('div');
    const btnOrder = document.createElement('button');
    btnOrder.classList.add('order-btn');
    btnOrder.textContent = 'Order Now';
    const btnView = document.createElement('button');
    btnView.textContent = 'View Menu';

    cta.appendChild(btnOrder);
    cta.appendChild(btnView);

    headlineDiv.appendChild(h1Headline);
    headlineDiv.appendChild(pHeadline);
    headlineDiv.appendChild(cta)

    const heroImgDiv = document.createElement('div');
    heroImgDiv.id = 'hero-img';
    const heroImg = document.createElement('img');
    heroImg.src = 'https://i.ibb.co.com/hF1vNp7c/ilya-mashkov-mk-Va2h-LJgn-I-unsplash-1.jpg';
    heroImg.alt = 'hero-image';

    heroImgDiv.appendChild(heroImg)

    heroDiv.appendChild(headlineDiv);
    heroDiv.appendChild(heroImgDiv);

    // --Menu Preview--
    const myMenu = [
        {name: 'Classic cheeseburger', desc: 'Juicy beef patty, melted cheddar, fresh lettuce, tomato, and house sauce', price: '$6.25', img: 'https://i.ibb.co.com/B2krwPNR/2148374828.jpg'},
        {name: 'Creamy alfredo pasta', desc: 'Fettuccine tossed in a creamy parmesan sauce with garlic and herbs', price: '$9.75', img: 'https://i.ibb.co.com/XxmBT2Yx/2482.jpg'},
        {name: 'Grilled Chicken Salad', desc: 'Tender grilled chicken over fresh greens, cherry tomatoes, and vinaigrette', price: '$13.06', img: 'https://i.ibb.co.com/qLMf3fbm/14105.jpg'},
        {name: 'Double Beef Burger', desc: 'Two patties with melted cheese and smoky sauce', price: '$6.55', img: 'https://i.ibb.co.com/84fPbmFr/42261.jpg'},
        {name: 'Spaghetti Bolognese', desc: 'Slow-cooked tomato & beef sauce with herbs', price: '$11.99', img: 'https://i.ibb.co.com/S4mTw5Dr/50.jpg'},
        {name: 'Caesar Salad', desc: 'Romaine, parmesan, croutons, Caesar dressing', price: '$5.90', img: 'https://i.ibb.co.com/bjQv1dWG/932.jpg'},
    ];

    const menuPreviewDiv = document.createElement('div');
    menuPreviewDiv.id = 'menu-preview';
    const h2MenuTitle = document.createElement('h2');
    h2MenuTitle.textContent = 'Check Our Menu';

    const menuCards = document.createElement('div');
    menuCards.id = 'cards';

    myMenu.forEach(dish => {
        const card = document.createElement('div')
        card.classList.add('card');

        const dishImg = document.createElement('img');
        dishImg.src = dish.img;
        dishImg.alt = 'dish-picture';

        const dishName = document.createElement('h2');
        dishName.textContent = dish.name;
        const dishDesc = document.createElement('p');
        dishDesc.textContent = dish.desc;
        const dishPrice = document.createElement('h2');
        dishPrice.textContent = dish.price;

        card.appendChild(dishImg);
        card.appendChild(dishName);
        card.appendChild(dishDesc);
        card.appendChild(dishPrice);
        
        menuCards.appendChild(card)
    });

    menuPreviewDiv.appendChild(h2MenuTitle);
    menuPreviewDiv.appendChild(menuCards);

    // --Our Story--
    const ourStoryDiv = document.createElement('div');
    ourStoryDiv.id = 'our-story';

    const h2StoryTitle = document.createElement('h2');
    h2StoryTitle.textContent = 'Our Story';

    const storyContent = document.createElement('div')
    storyContent.id = 'story-container'

    const storyImg = document.createElement('img');
    storyImg.src = 'https://i.ibb.co.com/zhhtw1Cn/3394.jpg';
    storyImg.alt = 'restaurant interior'

    const paragraphDiv = document.createElement('div');
    paragraphDiv.classList.add('paragraph');

    const pStory = document.createElement('p');
    pStory.textContent = "From the first spark of our idea, we dreamed of a place where every meal feels like a hug on a plate. We carefully select each ingredient, infusing it with care and attention, so that every dish brings people closer together. Here, food isn’t just nourishment—it’s laughter shared, memories made, and the comforting feeling of being home.";

    paragraphDiv.appendChild(pStory);

    storyContent.appendChild(paragraphDiv);
    storyContent.appendChild(storyImg)

    ourStoryDiv.appendChild(h2StoryTitle);
    ourStoryDiv.appendChild(storyContent)

    // --Testimonials--
    const testimonialDiv = document.createElement('div');
    testimonialDiv.id = 'testimonial';

    const h2Testimonial = document.createElement('h2');
    h2Testimonial.textContent = 'Hear from the people who’ve shared meals, laughter, and memories with us. Our guests tell the stories of their favorite dishes, special moments, and why they keep coming back.';

    const boxQuote = document.createElement('div');
    boxQuote.classList.add('box-quote');

    const quoteText = document.createElement('div');
    quoteText.classList.add('quote-text');
    const quotePara = document.createElement('p');
    quotePara.textContent = '"Thought I’d just grab a quick bite, but the flavors pulled me in for the full experience. Absolutely delicious—can’t get enough!';
    const quotePersonLink = document.createElement('a');
    quotePersonLink.href = 'https://github.com/Kelvin-KS/';
    const quotePerson = document.createElement('p');
    quotePerson.textContent = 'Iqbal - CEO of myBrand';
    quotePerson.style.fontStyle = 'italic'

    quotePersonLink.appendChild(quotePerson);

    quoteText.appendChild(quotePara);
    quoteText.appendChild(quotePersonLink)

    const personImgDiv = document.createElement('div');
    personImgDiv.classList.add('quote-person');
    const personImg = document.createElement('img');
    personImg.src = 'https://i.ibb.co.com/1GML5g6Z/20040.jpg';
    personImg.alt = quotePerson.textContent;

    personImgDiv.appendChild(personImg);

    boxQuote.appendChild(quoteText)
    boxQuote.appendChild(personImgDiv)

    testimonialDiv.appendChild(h2Testimonial);
    testimonialDiv.appendChild(boxQuote);

    

    contentDiv.appendChild(heroDiv);
    contentDiv.appendChild(menuPreviewDiv);
    contentDiv.appendChild(ourStoryDiv);
    contentDiv.appendChild(testimonialDiv);

    document.body.appendChild(contentDiv);

};