$(function () {

  $("#submit_burger").on("click", function (event) {
    event.preventDefault();
    let newBurger = {
      name: $("#textarea_burger").val().trim(),
      devoured: 0
    }
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );

  })

  $(".devour-button").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");


    var newDevourState = {
      devoured: 1

    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devour to", newDevourState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });



})