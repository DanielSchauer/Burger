$(document).ready(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      console.log('work')

      var newBurger = {
        toppings: $("#burger").val().trim(),
        devoured: false
      };
  
  
  
      // Send the PUT request.
      $.ajax("/api/burgers/", {
        type: "PUT",
        data: newBurger
      }).then(
        function() {
          console.log("changed sleep to", data);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});