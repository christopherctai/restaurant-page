import losPollosHermanosImage from "./images/los-pollos-hermanos.jpg"; 

export function goHome(mainContent) {
    mainContent.textContent = "";
    
    let losPollosHermanos = document.createElement('img');
    losPollosHermanos.src = losPollosHermanosImage;
    losPollosHermanos.classList.add('los-pollos-image');
    losPollosHermanos.alt = 'Las Pollas Hermanas';
    losPollosHermanos.title = 'Copyright Wikimedia Commons';

    let descriptionOne = document.createElement('p');
    descriptionOne.textContent = "The World's Finest Fried Chicken"
    descriptionOne.classList.add('description');
    let descriptionTwo = document.createElement('p');
    descriptionTwo.textContent = "Try Some and You'll Never Go Back!";
    descriptionTwo.classList.add('description');

    mainContent.append(losPollosHermanos, descriptionOne, descriptionTwo);

    return mainContent; 
} 