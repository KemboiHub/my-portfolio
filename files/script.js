
var typed = new Typed(".text", {
    strings: ["Full-stack web development", "Artificial Intelligence", "Cloud computing", "Network engineering"],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const status = document.getElementById("form-status");
  status.textContent = "Sending...";

  emailjs.sendForm("service_w43r2zf", "template_h65k9k6", this)
    .then(() => {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      this.reset();
    }, (error) => {
      console.error("EmailJS error:", error);
      status.textContent = "❌ Failed to send message. Please try again.";
      status.style.color = "red";
    });
});
