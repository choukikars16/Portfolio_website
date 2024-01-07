var typed = new Typed("#text",{
    strings:["A Web Developer","A Progammer"," A Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

//changing navbar color when scrolled
document.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    if(window.scrollY>0){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
})


// revealing elemnet on scroll
window.addEventListener('scroll',reveal);
 function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint= 50;
        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
 }
//getting year for foooter

const d = new Date();
let year = d.getFullYear();
document.getElementById('time').innerHTML = year;

//
var form = document.getElementById('form');
var confirmationMsg = document.getElementById('confirmation-msg');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from automatically submitting

    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var msg = document.getElementById('msg').value;

    // Do something with the form data (e.g., send it to a backend using AJAX)

    // Display confirmation message
    confirmationMsg.style.display = 'block';
    form.reset(); // Reset the form
    setTimeout(function() {
        confirmationMsg.style.display = 'none';
    }, 3000); // Hide confirmation message after 3 seconds
});

  