import './style.css';

const header = () => {
    let content = document.getElementById('content');
    let header = document.createElement('header');
    let h1 = document.createElement('h1');
    h1.textContent = 'The Toaster Express';
    header.appendChild(h1);
    content.appendChild(header);
    return content;
};

export default header;