import './style.css';
import menuPage from './menupage';

const mainContent = () => {
    let b1 = document.querySelector('.home');
    let b2 = document.querySelector('.menu');
    let b3 = document.querySelector('.contact');
    let mainContent = document.createElement('div');
    mainContent.className = 'mainContent';
    homePage(mainContent, false);
    b1.addEventListener('click', (e) => {
        clearContent();
        b1.style.backgroundColor = 'rgb(108, 57, 57)';
        b2.style.backgroundColor = 'rgb(76, 39, 39)';
        b3.style.backgroundColor = 'rgb(76, 39, 39)';
        homePage(mainContent, true);
    });
    b2.addEventListener('click', () => {
        clearContent();
        b1.style.backgroundColor = 'rgb(76, 39, 39)';
        b2.style.backgroundColor = 'rgb(108, 57, 57)';
        b3.style.backgroundColor = 'rgb(76, 39, 39)';
        menuPage();
    });
};




const homePage = (mainContent, input) => {
    let Content = document.getElementById('content');
    let intro = document.createElement('div');
    intro.className = 'intro';
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Welcome <br> The Toaster Express';
    intro.appendChild(h1);
    mainContent.appendChild(intro);
    
    let reviews = document.createElement('div');
    reviews.className = 'reviews';
    let h3 = document.createElement('h3');
    h3.textContent = 'Reviews';
    reviews.appendChild(h3);

    let revDivs = document.createElement('div');
    revDivs.className = 'revDivs';
    let reviewOne = document.createElement('div');
    reviewOne.className = 'reviewOne';
    let reviewTwo = document.createElement('div');
    reviewTwo.className = 'reviewOne';
    let reviewThree = document.createElement('div');
    reviewThree.className = 'reviewOne';

    let h4D1 = document.createElement('h4');
    h4D1.textContent = 'Jake Paul'; 
    h4D1.className = 'nameR';
    reviewOne.appendChild(h4D1);

    let info = document.createElement('div');
    info.className = 'reviewOne';
    info.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolorum excepturi sed aut autem labore neque illum, sunt id ipsam quod nobis quae animi, placeat officia? Distinctio aliquid sapiente nemo!';
    reviewOne.appendChild(info);
    revDivs.appendChild(reviewOne);

    let h4D2 = document.createElement('h4');
    h4D2.textContent = 'Jake Paul'; 
    h4D2.className = 'nameR';
    reviewTwo.appendChild(h4D2);

    let info2 = document.createElement('div');
    info2.className = 'reviewOne';
    info2.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolorum excepturi sed aut autem labore neque illum, sunt id ipsam quod nobis quae animi, placeat officia? Distinctio aliquid sapiente nemo!';
    reviewTwo.appendChild(info2);
    revDivs.appendChild(reviewTwo)

    let h4D3 = document.createElement('h4');
    h4D3.textContent = 'Jake Paul'; 
    h4D3.className = 'nameR';
    reviewThree.appendChild(h4D3);

    let info3 = document.createElement('div');
    info3.className = 'reviewOne';
    info3.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolorum excepturi sed aut autem labore neque illum, sunt id ipsam quod nobis quae animi, placeat officia? Distinctio aliquid sapiente nemo!';
    reviewThree.appendChild(info3);
    revDivs.appendChild(reviewThree)

    reviews.appendChild(revDivs)
    
    mainContent.appendChild(reviews)
    if (input == false) {
        Content.appendChild(mainContent);
    }

};

const clearContent = () => {
    let Content = document.querySelector('.mainContent');
    console.log(Content);
    Content.removeAttribute('style');
    Content.innerHTML = '';
};

export default mainContent;