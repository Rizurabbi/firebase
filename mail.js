const firebaseConfig = {
    apiKey: "AIzaSyBVqa3uQVU2qKYF_cXv2j6jckROkt-8jvc",
    authDomain: "firstone-afb98.firebaseapp.com",
    databaseURL: "https://firstone-afb98-default-rtdb.firebaseio.com",
    projectId: "firstone-afb98",
    storageBucket: "firstone-afb98.appspot.com",
    messagingSenderId: "904147941468",
    appId: "1:904147941468:web:ed7d52d9882ea85438ce99"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("admin-form");




  function showModal(message) {
    var modal = document.getElementById("myModal");
    document.getElementById("modal-message").textContent = message;
    modal.style.display = "block";
}

// Function to hide modal
function hideModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
/*
// Function to clear form inputs
function clearFormInputs() {
    document.getElementById("admin-form").reset();
}
*/
// Function to validate form inputs
function validateFormInputs() {
    var batch = document.getElementById('batch').value;
    var startingDate = document.getElementById('starting-date').value;
    //var routineFile = document.getElementById('routine-file').value;

    if (!batch || !startingDate ) {
        showModal("Please input all fields");
        return false;
    }

    return true;
}

// Event listener for form submission
document.getElementById('admin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate form inputs
    if (!validateFormInputs()) {
        return;
    }

    // Your form submission logic here
    
    // Display modal
    showModal("Form submitted successfully!");

    // Clear form inputs
    //clearFormInputs();
});

// Event listener for OK button in modal
document.getElementById('okButton').addEventListener('click', function() {
    // Hide modal
    hideModal();
});

// Function to go back
function goBack() {
    window.history.back();
}




  
  document.getElementById("admin-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var batch = getElementVal("batch");
    var starting= getElementVal("starting-date");
    //var msgContent = getElementVal("msgContent");
  
    saveMessages(batch, starting);
  
    //   enable alert
    /*document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("admin-form").reset();*/
  }
  
  const saveMessages = (batch, starting ) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      batch: batch,
      Date: starting,
      //msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };