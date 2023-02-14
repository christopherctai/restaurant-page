import { goHome } from './goHome.js';
import { goMenu } from './goMenu.js';
import { goContact } from './goContact.js';

// I want to make it so when a user clicks on a tab, all the content is changed out

let mainContent = document.createElement('div');
mainContent.classList.add('main-content'); 

export function pageLoad() {
    let content = document.getElementById('content'); 
    mainContent = goHome(mainContent);
    content.append(createHeader(), mainContent, createFooter());
    let tab = document.querySelector('.Home');
    tab.classList.add('selected');
    prepareTabs();
    return content;
} 

function prepareTabs() {
    const functions = [goHome, goMenu, goContact];
    let tabs = document.querySelectorAll('.tab'); 
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            mainContent = functions[i](mainContent);
            if (!tabs[i].classList.contains('selected')) {
                for (let j = 0; j < tabs.length; j++) {
                    tabs[j].classList.remove('selected');
                }
                tabs[i].classList.add('selected');
            }
        });
    } 
}


function createHeader() {
    let header = document.createElement('div');
    header.classList.add('header');
    let heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = 'Las Pollas Hermanas';
    header.appendChild(heading); 
    header.appendChild(createNav())
    return header;
}


function createNav() {
    let tabs = document.createElement('div');
    tabs.classList.add('tabs');
    const titles = ['Home', 'Menu', 'Contact'];
    for (let i = 0; i < 3; i++) {
        let tab = document.createElement('div');
        tab.classList.add('tab'); 
        tab.textContent = titles[i];
        tab.classList.add(titles[i]);
        tabs.appendChild(tab);
    }
    return tabs;
}

function createFooter() {
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'Copyright 2023 Chris Tai';
    return footer;
}