$(document).ready(function() {
  // Function to update contact information
  function updateContactInfo() {
    const email = prompt("Enter your email address:");
    const telephone_number = prompt("Enter your telephone number:");
    const address = prompt("Enter your address:");

    if (!isValidEmail(email)) {
      alert("Invalid email format. Please enter a valid email address.");
      return;
    }

    $("#contact-info").html(`From: ${email}<br>Contact: ${telephone_number}<br>Address: ${address}`);
    console.log(`From: ${email}\nContact: ${telephone_number}\nAddress: ${address}`);
  }

  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Bind the click event to the button
  $("#update-contact-btn").click(updateContactInfo);
});
