import friedChickenImage from "./images/fried-chicken.jpg";
import coleslawImage from './images/coleslaw.jpeg';
import toastImage from './images/toast.jpg';

export function goMenu(mainContent) {
    mainContent.textContent = "";
    let heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = "Menu"
    let menuItems = document.createElement('div');
    menuItems.classList.add('menu'); 
    const menuItemPictures = [
        {imagePath: friedChickenImage, description: "FRIED CHICKEN: What other kind of meal would satisfy your cravings besides our world famous fried chicken? Taste the delicious crunch and you'll never go back to normal food again"},
        {imagePath: coleslawImage, description: "COLESLAW: Enjoy the delicious crunch of slimy coleslaw, the only 'healthy' item on the menu! It'll make you feel better about the terrible food you're eating!"},
        {imagePath: toastImage, description: "TOAST: You've never had toast like this before. So good, it tastes like crack"}
    ] 
    for (let i = 0; i < menuItemPictures.length; i++) {
        menuItems.append(createMenuItem(menuItemPictures[i].imagePath, menuItemPictures[i].description));
    }
    mainContent.append(heading, menuItems)
    return mainContent;
}

function createMenuItem(imagePath, description) {
    let menuItem = document.createElement('div');
    let menuItemImage = document.createElement('img');
    menuItemImage.src = imagePath;
    menuItemImage.classList.add('menu-item-image');
    let menuItemDescription = document.createElement('p');
    menuItemDescription.textContent = description;
    menuItemDescription.classList.add('description');
    menuItem.append(menuItemImage, menuItemDescription);
    menuItem.classList.add('menu-item');
    return menuItem;
}