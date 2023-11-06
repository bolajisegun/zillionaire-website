// schedule pickup page start here
let pickupPlan = document.querySelector('.One-Time-Pickup ');
let login = document.querySelector('.login');
let loginForm = document.querySelector('.login-form');
let regularPickup = document.querySelector('.Regular-Pickup');
let longTermPickup = document.querySelector('.Long-Term-Pickup');

pickupPlan.addEventListener('click', function(){
    login.style.display='none';
    loginForm.style.display='block';
});
regularPickup.addEventListener('click', function(){
    login.style.display='none';
    loginForm.style.display='block';
});
longTermPickup.addEventListener('click', function(){
    login.style.display='none';
    loginForm.style.display='block';
});
// show previous page
let prevPage = document.querySelector('.prevPage')

prevPage.addEventListener('click', function(){
    login.style.display='block';
    loginForm.style.display='none';
})
// zillionairelaundry@gmail.com
// Email message by users 
function sendToEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "getgetget@gmail.com",
        Password : "62F8AEBA21A98F0BC5A900207154B4FE6E3E",
        To : 'zillionairelaundry@gmail.com',
        From : "getgetget@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

// function sendToMail(){
//     let sendMail ={
//         name: document.getElementById('name').value,
//         phoneNo: document.getElementById('phoneNo').value,
//         address: document.getElementById('pickupAddress').value,
//         plan: document.getElementById('plans').value
//     }
//     const serviceId = "service_v0fi7us";
//     const templateId = "template_q9xfdsk";

//     emailjs.send(serviceId,templateId,sendMail).then( res =>{
//             document.getElementById('name').value = "";
//             document.getElementById('phoneNo').value= "";
//             document.getElementById('pickupAddress').value= "";
//             document.getElementById('plans').value= "";
//             console.log(res)
//             alert("message send");
//         })
//         .catch((err) => console.log(err))
// }

// function sendToEmail(){
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phoneNo = document.getElementById('phoneNo').value;
//     var pickupAddress = document.getElementById('pickupAddress').value;
//     var plans = document.getElementById('plans').value;

//     windows.location.href = "mailto:bolajisegun2015@gmail.com?name="+name+"&email="+email+"&phoneNo="+phoneNo+"&pickupAddress="+pickupAddress+"&plans="+plans;
// }
// schedule pickup page ends here

// preloader
let loader = document.getElementById('preloader');

window.addEventListener('load', function(){
        loader.style.display = 'none';
});