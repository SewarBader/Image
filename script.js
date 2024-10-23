const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
document.body.style.zoom = "100%";

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
function nextStep(event) {
    event.preventDefault(); 
    const currentStep = document.querySelector('div[id^="step"]:not([style*="display: none"])');
    if (currentStep) {
        currentStep.style.display = "none"; 
        const nextStep = currentStep.nextElementSibling; 
        if (nextStep) {
            nextStep.style.display = "block"; 
        }
    }
}

function previousStep(event) {
    event.preventDefault(); 
    const currentStep = document.querySelector('div[id^="step"]:not([style*="display: none"])');
    if (currentStep) {
        currentStep.style.display = "none"; 
        const previousStep = currentStep.previousElementSibling;
        if (previousStep) {
            previousStep.style.display = "block"; 
        }
    }
}
function send(event) {
 
}

// function openloginCompanyPage() {
//     window.location.href = "SignCompany.html";
// }

// function openloginUserPage() {
//     console.log("Navigating to UserPage.html");
//     window.location.href = "SignUser.html"; 
   


// function openUserPage() {
//     window.location.href = "UserPage.html";
//     document.body.style.zoom = "100%";
// }

// function openPostjob() {
//     window.location.href = "PostJobs.html";
//     document.body.style.zoom = "80%";
// }
