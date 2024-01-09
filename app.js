let contactMeBtn = document.getElementById('contact-btn');
let contactMeSection = document.getElementById('contact-section');
contactMeBtn.addEventListener('click', ()=>{
    contactMeSection.scrollIntoView({behavior: 'smooth'});
});

let myProjectsBtn = document.getElementsByClassName('projects-btn');
myProjectsBtn.addEventListener('click', ()=>{
    window.location.href = "https://renishchandera.github.io/MyPortfolio/projects-work.html";
});

let myEducationBtn = document.getElementsByClassName('education-btn');
myEducationBtn.addEventListener('click', ()=>{
    window.location.href = "https://renishchandera.github.io/MyPortfolio/education-certificates.html";
});

let homeBtn = document.getElementsByClassName('home-btn');
homeBtn.addEventListener('click', ()=>{
    window.location.href = "https://renishchandera.github.io/MyPortfolio/";
});