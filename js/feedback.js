(function() {
    emailjs.init("2CKA4I2jR7lutzZSJ");
 })();


 //Send Email 

document.getElementById('form').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the default form submission

const serviceID = 'service_x3r85sb';
const templateID = 'template_twp24z7';

emailjs.send(serviceID, templateID, this)
   .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Thank you for your feedback!');
   }, function(error) {
       console.log('FAILED...', error);
       alert('Oops! Something went wrong.');
   });
});
