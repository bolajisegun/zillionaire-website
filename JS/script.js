
// preloader
let loader = document.getElementById('preloader');

window.addEventListener('load', function(){
        loader.style.display = 'none';
<<<<<<< HEAD
=======
    }, 0);
    
>>>>>>> dcb34c6c05e75c9fff64caf397bff3e78c7db6eb
});
// typing effect for hero section 
var typingText = document.getElementById('typing-text')
var typingText2 = document.getElementById('text2')
var index = 0;
var indexs = 0;
var texts = "ZILLIONAIRE ";
var text2 = "Never spend your weekends catching up on laundry again. We come get your laundry on demand, giving you 3+ extra hours to spend however you want."

function typeText(){
    
    if (index < texts.length) {
        typingText.textContent += texts.charAt(index);
        index++;
        setTimeout(typeText, 100)
       }       
    
}
typeText()
// second text
function typeText2(){
    
    if (indexs < text2.length) {
        typingText2.textContent += text2.charAt(indexs);
        indexs++;
        setTimeout(typeText2, 20)
       }    
} 
typeText2()


let ourStory = document.querySelector('.our-story');
let aboutUs = document.querySelectorAll('.about-us');

ourStory.addEventListener('click', function(){
    aboutUs.style.display = 'initial';
})

let navBtn = document.querySelector('.nav-btn');
let closeBtn = document.querySelector('.close-nav-btn');
let mobileLinks = document.querySelector('.mobile-navLinks');

navBtn.addEventListener('click', function(){
    mobileLinks.classList.add('show-links');
    navBtn.style.display = 'none';
    closeBtn.style.display = 'initial';
});
closeBtn.addEventListener('click', function(){
    mobileLinks.classList.remove('show-links')
    navBtn.style.display = 'initial';
    closeBtn.style.display = 'none';
});

// animate on scroll using gsap 
let animation = gsap.to('animatedScroll', {
    x:200,
    duration:1,
})

let animatedScroll = document.querySelector('.sec-one');
let scrollAni = gsap.timeline({
    scrollTrigger: {
        trigger: 'animatedScroll',
        start: 'top center',
        end: 'bottom center',
        scrub: 'true',
        marker: 'false'
    }
});

gsap.registerPlugin(scrollAni);

