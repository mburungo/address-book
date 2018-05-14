class Contact {
  constructor(firstName, lastName, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}
$ (document).ready(function()
//define empty array to hold contact objects
  var allContacts = [];
  $('form#new-contact').submit(function(event)){
    event.preventDefault()
    //gets values from input fields
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val ();
    var phoneNumber = $("#phone-number").val ();
    //create new contact
    var newContact = new Contact (firstName, lastName, phoneNumber)
    allContacts.push(newContact);
    //clear values from form input fields
    document.getElementById("new-contact").reset();
    console.log(allContacts);
    $("ul#contacts").apppend("<li>" "+newContact.lastName+ ", "+newContact.firstName+"</li>)
  });
)};
