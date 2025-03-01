

(function () {
    emailjs.init("iWGLpZZsAj-s6VMuc"); // Replace with your EmailJS Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
    let selectedServices = []; // Store selected services

    // Handle multiple service selection
    document.querySelectorAll(".service-option").forEach(option => {
        option.addEventListener("click", function () {
            const service = this.getAttribute("data-service");

            // Toggle selection
            if (selectedServices.includes(service)) {
                selectedServices = selectedServices.filter(s => s !== service);
                this.classList.remove("selected");
            } else {
                selectedServices.push(service);
                this.classList.add("selected");
            }
        });
    });

    // Handle form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form refresh

        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;

        if (selectedServices.length === 0) {
            alert("Please select at least one service before submitting.");
            return;
        }

        var templateParams = {
            subject: "New Service Inquiry",
            name: name,
            phone: phone,
            service: selectedServices.join(", "), // Convert array to a string
            message: message
        };

        emailjs.send("service_3fl3pzq", "template_uzq8iyp", templateParams) // Replace template_xxxxxxx
            .then(function (response) {
                alert("Message Sent Successfully ✅");
                document.getElementById("contact-form").reset();
                selectedServices = [];
                document.querySelectorAll(".service-option").forEach(opt => opt.classList.remove("selected"));
            }, function (error) {
                alert("Error Sending Message ❌: " + error.text);
            });
    });
});
