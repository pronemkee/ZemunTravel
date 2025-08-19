// prvi select

let ddlGc = `<select class="form-select mb-3 p-3" id="ddlCategory">`;
Countries.forEach(category => {
    ddlGc += `<option value="${category.id}">${category.name}</option>`;
});
ddlGc += `</select>`;
document.querySelector("#country").innerHTML = ddlGc;

// drugi select

let ddlDestinations = `<select class="form-select mb-3 p-3" id="ddlDestinations" disabled>
    <option value="0">Choose Destinations</option>
</select>`;
document.querySelector("#destination").innerHTML = ddlDestinations;

document.querySelector("#ddlCategory").addEventListener("change", function () {
    let selectedCategory = parseInt(this.value);
    let destinationsDropdown = document.querySelector("#ddlDestinations");

    if (selectedCategory === 0) {
        destinationsDropdown.setAttribute("disabled", "disabled");
        destinationsDropdown.innerHTML = `<option value="0">Choose Game</option>`;
    } 
    else {
        destinationsDropdown.removeAttribute("disabled");
        destinationsDropdown.innerHTML = `<option value="0">Choose Game</option>`;
        
        let filteredDestinations = selectedCategory === 1 ? Destinations : Destinations.filter(item => item.countryId === selectedCategory);
        
        filteredDestinations.forEach(item => {
            destinationsDropdown.innerHTML += `<option value="${item.id}">${item.destinationName}</option>`;
        });
    }
});

//REGEX

//FIRST NAME

var Fname = document.querySelector("#name");
var FnameRegEx = /^[A-Z][a-z]{1,14}$/;

//LAST NAME

var Lname = document.querySelector("#Lname");
var LnameRegEx = /^[A-Z][a-z]{1,14}$/;

//EMAIL

var email = document.querySelector("#mail");
var emailRegEx = /(@gmail\.com|@yahoo\.com|@ict\.edu\.rs)$/;

var errorFn = document.querySelector("#errorFname");
var errorLn = document.querySelector("#errorLname");
var errorEmail = document.querySelector("#errorEmail");
var errorDdl = document.querySelector("#errorDdl");
var errorRb = document.querySelector("#errorRb");
var errorChb = document.querySelector("#errorChb");

var successMessage = document.querySelector("#successMessage");

var provera = document.querySelector("#sendMessageButton");
provera.addEventListener("click", validateForm)

function validateForm(){
  ErrorNumber = 0;
  setError(errorFn, 'Invalid first name', !FnameRegEx.test(Fname.value));
  setError(errorLn, 'Invalid last name', !LnameRegEx.test(Lname.value));
  setError(errorEmail, 'Invalid email', !emailRegEx.test(email.value));

  var ddl = document.querySelector('#country select');
  setError(errorDdl, 'Not selected', !ddl || ddl.value == '0');
  
  var ddl = document.querySelector('#destination select');
  setError(errorDd2, 'Not selected', !ddl || ddl.value == '0');

  var gender = document.getElementsByName('gender');
  var isGenderSelected = false;
  for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
          isGenderSelected = true;
          break;
      }
  }

  if (!isGenderSelected) {
      setError(errorRb, 'Please select a gender', 1);
  } else {
      setError(errorRb, '', 0);
  }

  var chb = document.querySelector('#chb');
  if (!chb.checked) {
      setError(errorChb, 'You must agree to terms and conditions', 1);
  } else {
      setError(errorChb, '', 0);
  }
  
  if (ErrorNumber === 0) {
      successMessage.innerHTML = `<p class='fs-5'>Form submitted successfully!</p>`;
      successMessage.style.color = '#28a745';
      successMessage.style.display = 'block';
  } else {
      successMessage.innerHTML = '';
      successMessage.style.display = 'none';
  }
}


function setError(element, message, error){
  if(element){
      element.innerHTML = message;
      element.style.color = error ? '#ff0000' : 'transparent';
      element.style.display = error ? 'block' : 'none';
  }
  if (error) {
      ErrorNumber++;
  }
}
