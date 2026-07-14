/* ==========================================================
   CONTACT FORM - EMAILJS
========================================================== */

// ----------------------------------------------------------
// EMAILJS INITIALIZATION
// ----------------------------------------------------------

emailjs.init({
    publicKey: "55Av0xHq6_W_tfl2O",
});

// ----------------------------------------------------------
// DOM ELEMENTS
// ----------------------------------------------------------

const contactForm = document.getElementById("contactForm");

const submitBtn = document.getElementById("submitBtn");

// ----------------------------------------------------------
// EMAILJS CONFIG
// ----------------------------------------------------------

const SERVICE_ID = "service_ky2q2q5";

const TEMPLATE_ID = "template_gb0yezu";

// ----------------------------------------------------------
// FORM SUBMIT
// ----------------------------------------------------------

contactForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    // Browser validation

    if (!contactForm.checkValidity()) {

        contactForm.reportValidity();

        return;

    }

    // Disable button

    submitBtn.disabled = true;

    submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2"></span>
        Sending...
    `;

    // Form Data

    const templateParams = {

        name: document.getElementById("name").value.trim(),

        email: document.getElementById("email").value.trim(),

        subject: document.getElementById("subject").value.trim(),

        message: document.getElementById("message").value.trim(),

    };

    try {

        await emailjs.send(

            SERVICE_ID,

            TEMPLATE_ID,

            templateParams

        );

        alert("✅ Message sent successfully!");

        contactForm.reset();

    }

    catch (error) {

    console.error("EmailJS Error:", error);

    alert("❌ Failed to send message.");

}

    finally {

        submitBtn.disabled = false;

        submitBtn.innerHTML = `
            <i class="bi bi-send-fill"></i>
            Send Message
        `;

    }

});