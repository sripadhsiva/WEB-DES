function validateForm() {
  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^[0-9]{10}$/;

  if (name.length < 3) {
    alert("Full name must be at least 3 characters.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return false;
  }

  if (!phonePattern.test(phone)) {
    alert("Phone number must be 10 digits.");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }

  alert("Registration Successful!");
  return true;
}
