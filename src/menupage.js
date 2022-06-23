import './style.css';

const menuPage = () => {
    let Content = document.getElementById('content');
    let mainContent = document.querySelector('.mainContent');
    mainContent.style.display = 'grid';
    mainContent.style.gridTemplateRows = 'repeat(3, 1fr)';
    mainContent.style.gridTemplateColumns = 'repeat(3, 1fr)';
    mainContent.style.gap = '20px';
    mainContent.style.padding = '10px';

    let itemNames = ['Grill Cheese', 'Double Wopper', 'Beef Rangler', 'Chicken Sucker', 'Beef Knuckle', 'Grill Cheese', 'Grill Cheese', 'Grill Cheese', 'Grill Cheese'];
    let itemImg = ['https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80', 'https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80', 'https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'https://images.unsplash.com/photo-1626078299034-89c04b7fe4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80', 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80', 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80', 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'];


    for (let i = 0; i < 9; i++) {
        let menuItem = document.createElement('div');
        menuItem.className = 'menuItems';

        let h3 = document.createElement('h3');
        h3.textContent = itemNames[i];
        menuItem.appendChild(h3);

        let menuPicInfo = document.createElement('div');
        menuPicInfo.className = 'menuPicInfo';
        
        let imgTag = document.createElement('img');
        imgTag.className = 'imgSand';
        imgTag.src = itemImg[i]; 
        
        menuPicInfo.appendChild(imgTag);

        let pTag = document.createElement('p');
        pTag.className = 'menuInfo';
        pTag.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, facilis possimus. Aliquid nesciunt odit doloremque fugit iste alias impedit, facere similique qui ipsam aut, porro recusandae ut fugiat quasi tempora!';

        menuPicInfo.appendChild(pTag);
        menuItem.appendChild(menuPicInfo);
        mainContent.appendChild(menuItem);
    }

};

export default menuPage;