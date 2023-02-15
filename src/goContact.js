import gusFringImage from './images/gus-fring.jpg';

export function goContact(mainContent) {
    mainContent.textContent = "";

    let heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = "Gas Frang";
    mainContent.append(heading);
    
    let gusFring = document.createElement('img');
    gusFring.src = gusFringImage; 
    gusFring.classList.add('los-pollos-image');
    gusFring.alt = 'Gus Fring';
    gusFring.title = 'Copyright Wikimedia Commons';

    let descriptionOne = document.createElement('p');
    descriptionOne.textContent = "Contact Us Here"
    descriptionOne.classList.add('description');
    let descriptionTwo = document.createElement('p'); 
    descriptionTwo.textContent = "123-456-7890";
    descriptionTwo.classList.add('description');

    mainContent.append(gusFring, descriptionOne, descriptionTwo); 

    return mainContent;
}