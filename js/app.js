document.addEventListener('DOMContentLoaded', ()=>{


let contactMeBtn = document.getElementById('contact-btn');
let contactMeSection = document.getElementById('contact-section');
let homeBtn = document.getElementsByClassName('home-btn');
let myEducationBtn = document.getElementsByClassName('education-btn');
let myProjectsBtn = document.getElementsByClassName('projects-btn');
let sloganBtn = document.getElementById('slogan-btn');
let hobbiesBtn = document.getElementById('hobbies-btn');
let startupBtn = document.getElementById('startup-btn');
let feedbackBtn = document.getElementById('feedback-btn');

contactMeBtn.addEventListener('click', ()=>{
    contactMeSection.scrollIntoView({behavior: 'smooth'});
});


if(myProjectsBtn.length > 0){
    myProjectsBtn[0].addEventListener('click', ()=>{
        window.location.href = "projects-work.html";
    });
    if(myProjectsBtn[1])
    {
        myProjectsBtn[1].addEventListener('click', ()=>{
            window.location.href = "projects-work.html";
        });
    }
}

if(myEducationBtn.length > 0){
    myEducationBtn[0].addEventListener('click', ()=>{
        window.location.href = "education-certificates.html";
    });
   if(myEducationBtn[1])
   {
     myEducationBtn[1].addEventListener('click', ()=>{
        window.location.href = "education-certificates.html";
        });
   }
}
if(homeBtn.length > 0){
    homeBtn[0].addEventListener('click', ()=>{
        window.location.href = "index.html";
    });
    if(homeBtn[1])
    {
        homeBtn[1].addEventListener('click', ()=>{
            window.location.href = "index.html";
        });
    }
}
if(hobbiesBtn){
    hobbiesBtn.addEventListener('click', ()=>{
        window.location.href = "hobbies.html";
    });
}

if(sloganBtn)
{
    sloganBtn.addEventListener('click', ()=>{
        window.location.href = 'slogan.html';
    });
}

if(startupBtn)
{
    startupBtn.addEventListener('click', ()=>{
        window.location.href = 'startup.html';
    });
}

if(feedbackBtn)
{
    feedbackBtn.addEventListener('click', ()=>{
        window.location.href = 'feedback.html';
    });
}

// more nav button showing logic


let moreMenu = document.querySelector('.hidden-nav-menu');
let moreButton = document.getElementById('more-btn');
let body = document.querySelector('body');

    moreButton.addEventListener('click', ()=>{
            moreMenu.classList.add('show-hidden-nav-menu');
            body.classList.add('blur');
    });
    
    body.addEventListener('click', (event)=> {
        const isClickedOutside = moreMenu.contains(event.target);
        const isClickedOnButton = moreButton.contains(event.target);
          if(!isClickedOutside && !isClickedOnButton)
          {
            moreMenu.classList.remove('show-hidden-nav-menu');
            body.classList.remove('blur');
          }
    });

});




