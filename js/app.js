document.addEventListener('DOMContentLoaded', ()=>{


    let contactMeBtn = document.getElementById('contact-btn');
let contactMeSection = document.getElementById('contact-section');
contactMeBtn.addEventListener('click', ()=>{
    contactMeSection.scrollIntoView({behavior: 'smooth'});
});

let myProjectsBtn = document.getElementsByClassName('projects-btn');
if(myProjectsBtn.length > 0){
    myProjectsBtn[0].addEventListener('click', ()=>{
        window.location.href = "https://renishchandera.github.io/MyPortfolio/projects-work.html";
    });
    myProjectsBtn[1].addEventListener('click', ()=>{
        window.location.href = "https://renishchandera.github.io/MyPortfolio/projects-work.html";
    });
}

let myEducationBtn = document.getElementsByClassName('education-btn');
if(myEducationBtn.length > 0){
    myEducationBtn[0].addEventListener('click', ()=>{
        window.location.href = "https://renishchandera.github.io/MyPortfolio/education-certificates.html";
    });
    myEducationBtn[1].addEventListener('click', ()=>{
        window.location.href = "https://renishchandera.github.io/MyPortfolio/education-certificates.html";
    });
}

let homeBtn = document.getElementsByClassName('home-btn');
if(homeBtn.length > 0){
    homeBtn[0].addEventListener('click', ()=>{
        window.location.href = "https://renishchandera.github.io/MyPortfolio/index.html";
    });
    homeBtn[1].addEventListener('click', ()=>{
        window.location.href = "https://renishchandera.github.io/MyPortfolio/index.html";
    });
}

// more nav button showing logic


let moreMenu = document.querySelector('.hidden-nav-menu');
let moreButton = document.getElementById('more-btn');
let body = document.querySelector('body');

    moreButton.addEventListener('click', ()=>{
            moreMenu.classList.add('show-hidden-nav-menu');
    });
    
    body.addEventListener('click', (event)=> {
        const isClickedOutside = moreMenu.contains(event.target);
        const isClickedOnButton = moreButton.contains(event.target);
          if(!isClickedOutside && !isClickedOnButton)
          {
            moreMenu.classList.remove('show-hidden-nav-menu');
          }
    });


});

// Logic for active nav button



