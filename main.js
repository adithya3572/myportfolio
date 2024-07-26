var typed = new Typed(".text", {
    strings: ["Web Developer.","Student."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
} );

const form= document.querySelector('form');
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const mess=document.getElementById("message");


function sendEmail(){
    const bodyMessage=`Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "adithya3572@gmail.com",
        Password : "B9F10CBE0A9D19F83B012A98A9F05377157B",
        To : 'adithya3572@gmail.com',
        From : "adithya3572@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    sendEmail();
});