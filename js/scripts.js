function Contact (first, last, address, city, state, pN, how){
    this.firstName=first;
    this.lastName=last;
    this.address=address;
    this.city=city;
    this.state=state;
    this.pn=pN;
    this.how=how;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.fullAddress = function() {
  return this.address+ " " + this.city + " " +this.state;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputAddress = $("#address").val();
    var inputCity = $("#city").val();
    var inputState = $("#state").val();
    var inputphoneNumber = $("#phoneNumber").val();
    var inputHow = $("#how").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputAddress, inputCity, inputState, inputphoneNumber, inputHow);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>"+"<li>" + newContact.fullAddress() + "</li>" +"<li>" + newContact.pn + "</li>" + "<li>" + newContact.how + "</li>");
    // + "<li><span class='contact'>" + newContact.pn() + "</span></li>"
    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

  });
});
