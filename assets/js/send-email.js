console.log("Hello");

function sendMail(contactForm) {
    emailjs.send("gmail", "project-request", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        });
}