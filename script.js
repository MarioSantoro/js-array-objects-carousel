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
    const titleCarousel = CreateTitle(imageElement.title);
    const textCarousel = CreateText(imageElement.text);
    CarouselContainer.appendChild(imageCarousel);
    CarouselContainer.appendChild(titleCarousel);
    CarouselContainer.appendChild(textCarousel);
});

let activeIndex = 0;
const imagesOnCarousel = document.querySelectorAll("img.carousel-img");
const titleOnCarousel = document.querySelectorAll("h2.title");
const textOnCarousel = document.querySelectorAll("p.text");

imagesOnCarousel[activeIndex].classList.add("active");
titleOnCarousel[activeIndex].classList.add("active");
textOnCarousel[activeIndex].classList.add("active");
const nextButton = document.getElementById("Next-button");
nextButton.addEventListener("click" , function(){
    if(activeIndex === (images.length -1)){
        activeIndex = 0;
        RemoveContentOnCarouselFirst();
        AddContenrOnCarouselNext();
    }else{
        RemoveContentOnCarouselNormal();
        activeIndex ++;
        AddContenrOnCarouselNext();
    }
    
});



const preButton = document.getElementById("Pre-button");
preButton.addEventListener("click" , function(){
    if(activeIndex === 0){
        activeIndex = images.length -1;
        RemoveContentOnCarousel0();
        AddContenrOnCarouselNext();
    }else{
        RemoveContentOnCarouselNormal();
        activeIndex --;
        AddContenrOnCarouselNext();
    } 
});


function CreateImageCarousel(image){
    const imageCarousel = document.createElement("img");
    imageCarousel.classList.add("carousel-img");
    imageCarousel.setAttribute("src" ,`./${image}` );
    return imageCarousel;
};

function CreateTitle(Title){
    const  titleImage= document.createElement("h2");
    titleImage.classList.add("title");
    titleImage.append(Title);
    return titleImage;
};

function CreateText(text){
    const  textImage= document.createElement("p");
    textImage.classList.add("text");
    textImage.append(text);
    return textImage;
};

function RemoveContentOnCarouselFirst(){
    imagesOnCarousel[images.length -1].classList.remove("active");
    titleOnCarousel[images.length -1].classList.remove("active");
    textOnCarousel[images.length -1].classList.remove("active");
};

function AddContenrOnCarouselNext(){
    imagesOnCarousel[activeIndex].classList.add("active");
    titleOnCarousel[activeIndex].classList.add("active");
    textOnCarousel[activeIndex].classList.add("active");
};

function RemoveContentOnCarouselNormal(){
    imagesOnCarousel[activeIndex].classList.remove("active");
    titleOnCarousel[activeIndex].classList.remove("active");
    textOnCarousel[activeIndex].classList.remove("active");
};

function RemoveContentOnCarousel0(){
    imagesOnCarousel[0].classList.remove("active");
    titleOnCarousel[0].classList.remove("active");
    textOnCarousel[0].classList.remove("active");
}

