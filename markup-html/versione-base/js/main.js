'use strict';
//ARRAY DI OGGETTI 
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// ELEMENTI DALL HTML

const divItems = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


let i = 0;

images.forEach((element) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    //TESTO
    h1.append(element.title);
    p.append(element.text);
    //IMMAGINI
    img.src = element.image;
    img.append(element.image);

    div.classList.add('item');

    if (i == 0) {
        div.classList.add('active')
    }

    div.append(img, h1, p);
    divItems.append(div);

    i++
});

let switchImg = 0;

prev.addEventListener('click', () => {
    if (switchImg > 0 -1) {
        divItems.classList.remove('active')
    }
})


