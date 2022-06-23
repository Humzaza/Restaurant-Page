import './style.css';

const contactPage = () => {
    let contact = document.createElement('div');
    contact.className = 'contact';

    let h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    contact.appendChild(h1);
    
    let content = document.querySelector('.mainContent');

    let imgSrc = ['https://images.unsplash.com/photo-1538514860079-8443cff3cb21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'];
    let headerTag = ['Location', 'Online'];
    
    for (let i = 0; i < 2; i++) {
        let contactInfo = document.createElement('div');
        contactInfo.className = 'contactInfo';
    
        let h3 = document.createElement('h3');
        h3.textContent = headerTag[i];
        contactInfo.appendChild(h3);
    
        let locationInfo = document.createElement('data');
        locationInfo.className = 'locationInfo';
    
        let locationImg = document.createElement('img');
        locationImg.className = 'locationImg';
        locationImg.src = imgSrc[i];
        locationInfo.appendChild(locationImg);
    
        let locationP = document.createElement('p');
        locationP.className = 'locationP';
        locationP.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore enim similique, qui non possimus placeat animi voluptate, id facere velit ad corporis illo dolorem nobis fugiat voluptatem facilis optio minus.';
    
        locationInfo.appendChild(locationP);
        
        contactInfo.appendChild(locationInfo);
    
        contact.appendChild(contactInfo);
    
        content.appendChild(contact);

    }
};

export default contactPage;