document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Validate Name
        const name = document.getElementById("name").value.trim();
        if (name === "") {
            alert("Name is required!");
            valid = false;
        }

        // Validate Email
        const email = document.getElementById("email").value.trim();
        if (email === "") {
            alert("Email is required!");
            valid = false;
        }

        // Validate Phone
        const phone = document.getElementById("phone").value.trim();
        if (phone === "") {
            alert("Phone number is required!");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
