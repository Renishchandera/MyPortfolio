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