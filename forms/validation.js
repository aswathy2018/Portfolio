
    $("#submit-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwTHm5VJYZQ7VVUnmwJt9GQpJw7XD2M7rgMvMPwODW-bf-F0IPjxX0Y5gEjT9UgtmvSRg/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })

  document.getElementById('contactForm').addEventListener('submit', function(event) {
     // Prevent form submission
     event.preventDefault();
 
     // Clear previous errors
     document.getElementById('nameError').textContent = '';
     document.getElementById('mailError').textContent = '';
     document.getElementById('subjectError').textContent = '';
     document.getElementById('messageError').textContent = '';
 
     // Get form values
     const name = document.getElementById('name').value.trim();
     const email = document.getElementById('mail').value.trim();
     const subject = document.getElementById('subject').value.trim();
     const message = document.getElementById('message').value.trim();
 
     // Initialize a flag to track if the form is valid
     let isValid = true;
 
     // Validate Name (Only alphabets, min length 3)
     const namePattern = /^[A-Za-z\s]+$/;
     if (name === '') {
         document.getElementById('nameError').textContent = '* Name is required';
         isValid = false;
     } else if (!namePattern.test(name)) {
         document.getElementById('nameError').textContent = '* Name must contain only alphabets';
         isValid = false;
     } else if (name.length < 3) {
         document.getElementById('nameError').textContent = '* Name must be at least 3 characters long';
         isValid = false;
     }
 
     // Validate Email (must contain @ and .)
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (email === '') {
         document.getElementById('mailError').textContent = '* Email is required';
         isValid = false;
     } else if (!emailPattern.test(email)) {
         document.getElementById('mailError').textContent = '* Please enter a valid email address';
         isValid = false;
     }
 
     // Validate Subject (at least 3 characters)
     if (subject === '') {
         document.getElementById('subjectError').textContent = '* Subject is required';
         isValid = false;
     } else if (subject.length < 3) {
         document.getElementById('subjectError').textContent = '* Subject must be at least 3 characters long';
         isValid = false;
     }
 
     // Validate Message (at least 10 characters)
     if (message === '') {
         document.getElementById('messageError').textContent = '* Message is required';
         isValid = false;
     } else if (message.length < 10) {
         document.getElementById('messageError').textContent = '* Message must be at least 10 characters long';
         isValid = false;
     }
 
     // If the form is valid, submit it
     if (isValid) {
         document.getElementById('contactForm').submit(); // Submit the form to Formspree
     }
 });
 