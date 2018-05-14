class Contact {
  constructor(firstName, lastName, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}
$ (document).ready(function()
  var allContacts = [];
  $('form#new-contact').submit(function(event)){
    event.preventDefault()
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val ();
    var phoneNumber = $("#phone-number").val ();
    var newContact = new Contact (firstName, lastName, phoneNumber)
    allContacts.push(newContact);
    console.log(allContacts);
  });

)};
