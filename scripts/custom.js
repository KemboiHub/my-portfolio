function sendMail(event) {
    event.preventDefault();

    var form = document.getElementById("contact-form");
    var formData = new FormData(form);

    // Prepare the template parameters
    var templateParams = {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message:
            "Name: " +
            formData.get("name") +
            "\n" +
            "Phone: " +
            formData.get("phone") +
            "\n" +
            "Email: " +
            formData.get("email") +
            "\n" +
            "Message: " +
            formData.get("message"),
    };

    // Show the loader
    var loader = document.getElementById("loader");
    loader.style.display = "block";

    // Send the email
    emailjs
        .send(
            "service_y6m65c5",
            "template_92zxoj4",
            templateParams,
            "6wgvRuDlIHaQ13KZA"
        )
        .then(
            function (response) {
                // Hide the loader
                loader.style.display = "none";

                console.log("Email sent successfully!", response);

                Toastify({
                    text: "Thank you for contacting Felix, will get back to you soon",
                    duration: 4000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    backgroundColor: "green",
                }).showToast();
                form.reset();
            },
            function (error) {
                // Hide the loader
                loader.style.display = "none";

                console.error("Email failed to send!", error);

                Toastify({
                    text: "Error sending message",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    backgroundColor: "red",
                }).showToast();
            }
        );
}




