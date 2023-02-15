export function goContact(mainContent) {
    mainContent.textContent = "";

    let heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = "Gas Frang";
    mainContent.append(heading);
    
    let gusFringImage = document.createElement('img');
    gusFringImage.src = '/src/images/gus-fring.jpg'; 
    gusFringImage.classList.add('los-pollos-image');
    gusFringImage.alt = 'Gus Fring';
    gusFringImage.title = 'Copyright Wikimedia Commons';

    let descriptionOne = document.createElement('p');
    descriptionOne.textContent = "Contact Us Here"
    descriptionOne.classList.add('description');
    let descriptionTwo = document.createElement('p'); 
    descriptionTwo.textContent = "123-456-7890";
    descriptionTwo.classList.add('description');

    mainContent.append(gusFringImage, descriptionOne, descriptionTwo); 

    return mainContent;
}