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
const CarouselContainer = document.querySelector("div.container-carousel");

images.forEach((imageElement) =>{
    const imageCarousel = CreateImageCarousel(imageElement.image);
    CarouselContainer.appendChild(imageCarousel);
});

let activeIndex = 0;

document.querySelectorAll("img.carousel-img")[activeIndex].classList.add("active");

const nextButton = document.getElementById("Next-button");
nextButton.addEventListener("click" , function(){
    if(activeIndex === (images.length -1)){
        activeIndex = 0;
        document.querySelectorAll("img.carousel-img")[images.length -1].classList.remove("active");
        document.querySelectorAll("img.carousel-img")[activeIndex].classList.add("active");
    }else{
        document.querySelectorAll("img.carousel-img")[activeIndex].classList.remove("active");
        activeIndex ++;
        document.querySelectorAll("img.carousel-img")[activeIndex].classList.add("active");
    }
    
});



const preButton = document.getElementById("Pre-button");
preButton.addEventListener("click" , function(){
    if(activeIndex === 0){
        activeIndex = images.length -1;
        document.querySelectorAll("img.carousel-img")[0].classList.remove("active");
        document.querySelectorAll("img.carousel-img")[activeIndex].classList.add("active");
    }else{
        document.querySelectorAll("img.carousel-img")[activeIndex].classList.remove("active");
        activeIndex --;
        document.querySelectorAll("img.carousel-img")[activeIndex].classList.add("active");
    } 
});


function CreateImageCarousel(image){
    const imageCarousel = document.createElement("img");
    imageCarousel.classList.add("carousel-img");
    imageCarousel.setAttribute("src" ,`./${image}` );
    return imageCarousel;
}