import './style.css';

const footer = () => {
    let footer = document.createElement('footer');
    let content = document.getElementById('content');
    footer.textContent = 'Created By Humzaza';
    content.appendChild(footer);

    return content;
}

export default footer;