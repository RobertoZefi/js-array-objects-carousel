const images = [
    {
        image: './img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

const carosello = document.querySelector('.carosello')

let slideCounter = 0


for(let i = 0; i < images.length; i++){
    let slideCorrente = images[i]
    console.log(slideCorrente)
    
    let {image, title, text} = slideCorrente
    console.log (image, title, text)
        
    let className = 'slide'
    if (slideCounter === i){
        className += ' active'
    }
    const slide = `
        <div class="${className}">
            <img src="${image}" alt="">
            <div class="slide-text">
                <h3 class="slide__title">${title}</h3>
                <p class="slide__description">${text}</p> 
            </div>
        </div>
    `
    carosello.innerHTML += slide
    
}



console.log('daje')

const slideElement = document.getElementsByClassName('slide')
console.log(slideElement)

const arrowLeft = document.querySelector('.arrow__left')
console.log(arrowLeft)
const arrowRight = document.querySelector('.arrow__right')
console.log(arrowRight)



arrowRight.addEventListener('click', function() {
    console.log('Hai schiacciato', arrowRight, slideElement.length)

    let slideCorrente = slideElement[slideCounter]
    slideCorrente.classList.remove('active')

    if (slideCounter === slideElement.length - 1){
        slideCounter = 0
    } else {
        slideCounter++
    }
    
    //slideCounter += 1

    let slideSuccessiva = slideElement[slideCounter]
    slideSuccessiva.classList.add('active')
    
    console.log(slideCounter)
})


arrowLeft.addEventListener('click', function() {
    console.log(arrowLeft)

    let slideCorrente = slideElement[slideCounter]
    slideCorrente.classList.remove('active')

    if (slideCounter === 0){
        slideCounter = slideElement.length - 1
    } else {
        slideCounter--
    }

    // slideCounter -= 1

    let slideSuccessiva = slideElement[slideCounter]
    slideSuccessiva.classList.add('active')
    
    console.log(slideCounter)
})


