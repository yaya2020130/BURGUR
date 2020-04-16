// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-hunger").on("click", function(event) {
    var id = $(this).data("id");
    var newHunger = $(this).data("newhunger");

    var newHungerState = {
     hungry: newHungry
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

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
   hungry: $("[name=hungry]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newCat
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
