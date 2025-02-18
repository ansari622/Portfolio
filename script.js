let words = document.querySelectorAll(".word");

// Splitting words into letters wrapped in spans
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = ""; // Clear original text
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

// Initialize indexes
let currentWordIndex = 0;
const maxWordIndex = words.length - 1;

function changeText() {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Animate out current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    // Prepare next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind"; // Fix: use 'letter' instead of 'latter'
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    // Update index
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

// Run function initially and repeat
changeText();
setInterval(changeText, 3000); // Adjust timing to avoid flickering

// circle skill ================
const circle = document.querySelectorAll('.circle');
circle.forEach(elem => {
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor(dots * marked / 100);
    let point = "";
    let rotate = 360/dots;

    // Create dots in the circle
    for (let i = 0; i < dots; i++) {
        point += `<div class="point" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = point;

    // Mark the points based on the percentage
    const pointMarked = elem.querySelectorAll('.point');
    for (let i = 0; i < percent; i++) {
        pointMarked[i].classList.add('marked');
    }
});


//===============active menu section===============
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(secLink => {
        secLink.classList.remove('active');
    });
    menuLi[len].classList.add('active');    
}
activeMenu();
window.addEventListener('scroll', activeMenu);


//===============sticky navbar===============
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 50);
});


//===============scroll reveal===============

// let sr = ScrollReveal({
//     distance: '65px',
//     duration: 2600,
//     delay: 450,
// }); 

// sr.reveal('.home-content h1');
// sr.reveal('.home-image');
// sr.reveal('.home-content p');
// sr.reveal('.home-content .btn');        

//========toggle icon=========
let menuIcon = document.querySelector('#menu-icon');
let navList = document.querySelector('.navlist');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navList.classList.remove('open');
}

//parallax===========
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-items');
        }else{
            entry.target.classList.remove('show-items');
        }
    })
})
const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el) => observer.observe(el));


const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach((el) => observer.observe(el));


const scrollTop = document.querySelectorAll('.scroll-top');
scrollTop.forEach((el) => observer.observe(el));





