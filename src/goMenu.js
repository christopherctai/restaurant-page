export function goMenu(mainContent) {
    mainContent.textContent = "";
    
    const menuItemPictures = [
        {imagePath: '/src/images/fried-chicken.jpg', description: "FRIED CHICKEN: What other kind of meal would satisfy your cravings besides our world famous fried chicken? Taste the delicious crunch and you'll never go back to normal food again"},
        {imagePath: '/src/images/coleslaw.jpeg', description: "COLESLAW: Enjoy the delicious crunch of slimy coleslaw, the only 'healthy' item on the menu! It'll make you feel better about the terrible food you're eating!"},
        {imagePath: '/src/images/toast.jpg', description: "TOAST: You've never had toast like this before. So good, it tastes like crack"}
    ]

    console.log(menuItemPictures[0])

    for (let i = 0; i < menuItemPictures.length; i++) {
        mainContent.append(createMenuItem(menuItemPictures[i].imagePath, menuItemPictures[i].description));
    }
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