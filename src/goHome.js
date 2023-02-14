
export function goHome(mainContent) {
    mainContent.textContent = "";
    
    let losPollosHermanosImage = document.createElement('img');
    losPollosHermanosImage.src = '/src/images/los-pollos-hermanos.jpg';
    losPollosHermanosImage.classList.add('los-pollos-image');
    losPollosHermanosImage.alt = 'Las Pollas Hermanas';
    losPollosHermanosImage.title = 'Copyright Wikimedia Commons';

    let descriptionOne = document.createElement('p');
    descriptionOne.textContent = "The World's Finest Fried Chicken"
    descriptionOne.classList.add('description');
    let descriptionTwo = document.createElement('p');
    descriptionTwo.textContent = "Try Some and You'll Never Go Back!";
    descriptionTwo.classList.add('description');

    mainContent.append(losPollosHermanosImage, descriptionOne, descriptionTwo);

    return mainContent;
} 