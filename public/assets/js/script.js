// $(document).ready(function() {
//     $(".create-form").on("submit", function(event) {
//       event.preventDefault();
//       console.log('work')

//       var newBurger = {
//         toppings: $(this).children("#burger").val().trim(),
//         devoured: false
//       };
//       console.log(newBurger.toppings);
  
  
//       // Send the PUT request.
//       $.ajax("/api/burgers/", {
//         type: "PUT",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("changed sleep to", data);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
});