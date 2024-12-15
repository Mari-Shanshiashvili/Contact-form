let firstName = document.querySelector('.first-name');
let lastName = document.querySelector('.last-name');
let message = document.querySelector('.message');
let email = document.querySelector('.input-email');
let checkbox = document.querySelector('.checkbox');
let checkbox2 = document.querySelector('.checkbox2');
let unchecked = document.querySelector('.forCheckboxes');
let borderCheckbox = document.querySelector('.checkboxes');
let borderCheckboxes2 = document.querySelector('.checkboxes2');
let lastCheckbox = document.querySelector('.bigger-checkbox');
let lastBoxP = document.querySelector('.lastboxp');

let submitButtons = document.getElementsByClassName('submit');
let pText = document.createElement('p');
let mailError = document.createElement('p');
pText.style.color = ' hsl(0, 66%, 54%)';
pText.style.marginTop = '0';
pText.innerHTML = "This field is required";

function clearErrors() {
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
}

for (let button of submitButtons) {
    button.addEventListener('click', function() {
        
        clearErrors();

        
        firstName.style.border = "1px solid #ccc";  
        lastName.style.border = "1px solid #ccc";   
        message.style.border = "1px solid #ccc";    
        email.style.border = "1px solid #ccc";     

       
        let hasError = false;

        if (firstName.value.trim() === "") {
            firstName.style.border = "2px solid #F08080";  
            let errorText = pText.cloneNode(true);
            errorText.classList.add('error-message');  
            firstName.parentNode.append(errorText);  
            hasError = true;
        } else {
            firstName.style.border = "2px solid hsl(169, 82%, 27%) "; 
        }

        if (lastName.value.trim() === "") {
            lastName.style.border = "2px solid #F08080";  
            let errorText = pText.cloneNode(true);
            errorText.classList.add('error-message');  
            lastName.parentNode.append(errorText); 
            hasError = true;
        } else {
            lastName.style.border = "2px solid  hsl(169, 82%, 27%)"; 
        }

        if (message.value.trim() === "") {
            message.style.border = "2px solid #F08080";  
            let errorText = pText.cloneNode(true);
            errorText.classList.add('error-message'); 
            message.parentNode.append(errorText);  
            hasError = true;
        } else {
            message.style.border = "2px solid  hsl(169, 82%, 27%)"; 
        }

        
        if (!(email.value.includes('@') && email.value.includes('.com'))) {
            mailError.innerHTML = 'Please enter a valid email address';
            mailError.style.color = ' hsl(0, 66%, 54%)';
            email.style.border = "2px solid #F08080";  
            mailError.classList.add('error-message'); 
            email.parentNode.appendChild(mailError);
            hasError = true;
        } else {
            email.style.border = "2px solid  hsl(169, 82%, 27%)"; 
        }


        if (!lastCheckbox.checked) {
            lastBoxP.innerHTML = 'To submit this form, please consent to being contacted';
            lastBoxP.style.color = ' hsl(0, 66%, 54%)';
            lastBoxP.style.marginTop = '-10px';
          } else {
            lastBoxP.innerHTML = "";
          }




        if (checkbox.checked) {
            checkbox2.disabled = true;
            unchecked.innerHTML = "";
            borderCheckbox.style.border = '2px solid  hsl(169, 82%, 27%)'
          } else {
            checkbox2.disabled = false;
          }
        
          if (checkbox2.checked) {
            checkbox.disabled = true;
            unchecked.innerHTML = "";
            borderCheckboxes2.style.border = '2px solid  hsl(169, 82%, 27%)'
          } else {
            checkbox.disabled = false;
          }

       
      if (!checkbox.checked && !checkbox2.checked )   {
        unchecked.innerHTML = "Please select a query style";
        unchecked.style.color = ' hsl(0, 66%, 54%)';
        queryStyle.appendChild(unchecked);
      } else {
        unchecked.innerHTML = "";
      }

        if (!hasError) {
           alert('Message sent. We will contact you soon');
        }
    });
}
