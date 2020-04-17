// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-hunger").on("click", function(event) {
    var id = $(this).data("id");
    var newHunger = $(this).data("newhunger");

    var newHungerState = {
     devour: newHunger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newHungerState 
    }).then(
      function() {
        console.log("changed hunger to", newHunger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#submit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#newburger").val().trim(),
      devour: 0
  // devour: $("[name=devour]:checked").val().trim()
    };
console.log(newBurger)
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-bur").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
