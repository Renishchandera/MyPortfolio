(function() {
    emailjs.init("2CKA4I2jR7lutzZSJ");
 })();


 //Send Email 

document.getElementById('form').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the default form submission

const serviceID = 'service_x3r85sb';
const templateID = 'template_7gz0p67';


//Send data Another Way
// emailjs.send(serviceID, templateID, {
//     to_name: "Renish",
//     from_name: document.getElementById("name").value,
//     message: document.getElementById("feedback").value,
//     reply_to: document.getElementById("email").value
// })

//Send Form directly
emailjs.sendForm(serviceID, templateID, this)
   .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Thank you for your feedback!');
       this.reset();
   }, function(error) {
       console.log('FAILED...', error);
       alert('Oops! Something went wrong.');
   });
});
