const burger = document.getElementById('burgerBtn');
const burgerImg = document.getElementById('burgerImg')
const mobileMenu = document.getElementById('mobileMenu');

const worksButtonDesc = document.getElementById('worksDesc');
const worksButtonMob = document.getElementById('worksMob');
const aboutUsDesc = document.getElementById('aboutDesc')
const aboutUsMob = document.getElementById('aboutMob')
const reviewDesc = document.getElementById('reviewsDesc')
const reviewMob = document.getElementById('reviewsMob')
const infoDesc = document.getElementById('infoDesc')
const infoMob = document.getElementById('infoMob')
const contactsDesc = document.getElementById('contactsDesc')
const contactsMob = document.getElementById('contactsMob')

const worksSection = document.getElementById('worksSection');
const aboutUsSection = document.getElementById('aboutUs')
const reviewsSection = document.getElementById('reviewPage')
const informationPage = document.getElementById('infoPage')
const contactSection = document.getElementById('contactsPage')


burger.addEventListener("click", (e)=>{
    e.stopPropagation();
    const hidden = mobileMenu.classList.toggle("hiddenMenu")
    const mobile = mobileMenu.classList.toggle("mobile-menu")
    mobileMenu.classList.add("appear")

    mobile? burgerImg.style.transform = "rotate(90deg)": burgerImg.style.transform = "rotate(0deg)"

})

document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
        mobileMenu.classList.add('hiddenMenu');
        mobileMenu.classList.remove('mobile-menu', 'appear');
        burgerImg.style.transform = 'rotate(0deg)';
    }
});


function scrollToWorksSection() {
    worksSection.scrollIntoView({
        behavior: 'smooth'
    });
    // printText()
}

function scrollToAboutUsSection () {
    aboutUsSection.scrollIntoView({
        behavior:'smooth'
    })
}

function scrollToReviewPage () {
    reviewsSection.scrollIntoView({
        behavior:'smooth'
    })
}

function scrollToInfoPage () {
    informationPage.scrollIntoView({
        behavior:'smooth'
    })
}

function scrollToContactsPage () {
    contactSection.scrollIntoView({
        behavior:'smooth'
    })
}
// document.addEventListener('DOMContentLoaded', function() {
//     let hasPrinted = false;

// window.addEventListener('scroll', function() {
//     let worksSection = document.getElementById('worksSection');
//     let worksSectionRect = worksSection.getBoundingClientRect();
//     let windowHeight = window.innerHeight;


//     if (worksSectionRect.top < windowHeight && !hasPrinted) {
     
//         printText();
        
        
//         hasPrinted = true;
//     }
// });

// });


worksButtonDesc.addEventListener('click', scrollToWorksSection);
worksButtonMob.addEventListener('click', scrollToWorksSection);

aboutUsDesc.addEventListener('click', scrollToAboutUsSection)
aboutUsMob.addEventListener('click', scrollToAboutUsSection)

reviewDesc.addEventListener('click', scrollToReviewPage)
reviewMob.addEventListener('click', scrollToReviewPage)

infoDesc.addEventListener('click', scrollToInfoPage)
infoMob.addEventListener('click', scrollToInfoPage) 

contactsDesc.addEventListener('click', scrollToContactsPage) 
contactsMob.addEventListener('click', scrollToContactsPage) 



document.addEventListener("DOMContentLoaded", function() {
    const spans = document.querySelectorAll(".leftPart span");
    
    spans.forEach(span => {
        span.classList.add("show");
    });
    
});

document.addEventListener("DOMContentLoaded", function() {
    const span = document.querySelector(".rightPart");

    span.classList.add("show");
    
});

document.addEventListener('DOMContentLoaded', function() {
    let hasPrinted = false;

window.addEventListener('scroll', function() {
    let worksSection = document.getElementById('worksSection');
    const short = document.getElementById("descr")
    let worksSectionRect = worksSection.getBoundingClientRect();
    let windowHeight = window.innerHeight;


    if (worksSectionRect.top < windowHeight && !hasPrinted) {
     
     
        short.classList.add("active")
        
        hasPrinted = true;
    }
});

});

// const printText = () =>{
// let text = ` Приклади робіт, що дарують людям радість: `;
// let place = document.getElementById('worksPageTitle');
// place.classList.add('shordDecription')

// let cursor = document.createElement('span');
// cursor.classList.add('blink')
// cursor.textContent='|';

// let text1 = ''

// let input = (i) => {
//     setTimeout(()=>{
//         text1+=text[i]
//         place.textContent=text1
//         place.append(cursor)
//     },50*i)
// }


// for (let i = 0; i < text.length-1; i++) {
//     input(i)
    
// }
// }


// const worksPage = document.getElementById('worksSection')

// const workExamples = document.querySelectorAll('.workExample');

// for (let i = 0; i < workExamples.length; i++) {
   

//     if(i % 2 === 1&& window.innerWidth > 767){
//         workExamples[i].style.flexDirection = "row-reverse";
//     }
       
    
    
// }


document.addEventListener("DOMContentLoaded", function () {
    let facts = document.querySelectorAll('.fact');
    let delay = 250; // Задержка в миллисекундах между появлением элементов

    function playAnimation() {
        facts.forEach(function (fact, index) {
            setTimeout(function () {
                fact.classList.add('animate');
            }, index * delay);
        });

        // Удаление обработчика события после выполнения анимации
        window.removeEventListener("scroll", playAnimation);
    }

    // Добавление обработчика события для запуска анимации при прокрутке
    window.addEventListener("scroll", playAnimation);

    // Дополнительная проверка, чтобы запустить анимацию, если элементы находятся в видимой области при загрузке страницы
    let isInViewport = function (elem) {
        let bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    if (isInViewport(facts[0])) {
        playAnimation();
    }
});

