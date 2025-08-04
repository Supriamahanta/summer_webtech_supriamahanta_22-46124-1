document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const course = document.getElementById("course").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  if (name.length < 4) {
    alert("Full Name must be at least 3 characters long.");
    return;
  }

  
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

 
  if (isNaN(age) || age < 10 || age > 100) {
    alert("Age must be between 10 and 100.");
    return;
  }

 
  if (course === "") {
    alert("Please select a course.");
    return;
  }

  
  alert("Form submitted successfully!");
});


function showImage() {
  document.getElementById("myImage").style.display = "block";
}

function hideImage() {
  document.getElementById("myImage").style.display = "none";
}
