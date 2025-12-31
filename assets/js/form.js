// form submittion
document.getElementById('submitBtn').addEventListener('click', async () => {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const message = document.getElementById('message').value;
  
    // Basic validation: Check if any field is empty
    if (!fullName || !email || !contactNumber || !message) {
      alert("Please fill in all fields before submitting.");
      return; // Stop the function from proceeding if fields are empty
    }
  
    const data = {
        full_name: fullName,
        email: email,
        contact_number: contactNumber,
        message: message,
    };
  
   
  
    try {
        const response = await fetch('https://aavishkar.pythonanywhere.com/contactus/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
  
        if (response.ok) {
            const result = await response.json();
            alert('Message sent successfully!');
            
            // Clear the form fields after successful submission
            document.getElementById('contactForm').reset(); 
        } else {
            alert('Failed to send the message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
  });