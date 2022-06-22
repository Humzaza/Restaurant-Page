import './style.css';

const nav = () => {
    let navDiv = document.createElement('div');
    let content = document.getElementById('content');
    navDiv.className = 'nav';
    let b1 = document.createElement('button');
    let b2 = document.createElement('button');
    let b3 = document.createElement('button');
    b1.textContent = 'Home';
    b1.className = 'home';
    b2.textContent = 'Menu';
    b2.className = 'menu';
    b3.textContent = 'Contact';
    b3.className = 'contact';

    navDiv.appendChild(b1);
    navDiv.appendChild(b2);
    navDiv.appendChild(b3);
    content.appendChild(navDiv);

    return content;
};

export default nav;

