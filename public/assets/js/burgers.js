$(function () {

  $("#submit_burger").on("click", function (event) {
    event.preventDefault();
    let newBurger = {
      name: $("#textarea_burger").val().trim(),
      devoured: 0
    }
    if (newBurger.name) {
      //ajax post
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
    } else {
      $("#error-message").html('Please add the name of the burger you want to eat');
      $("#textarea_burger").keypress(function () {
        $("#error-message").empty()
      });
    }

  })

  $(".devour-button").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");



    var newDevourState = {
      devoured: 1

    };
    //ajax update
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

  $('.delete-button').on('click', function (event) {
    event.preventDefault()
    var id = $(this).data("id");
    console.log('id to delete' + id)

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function () {
      console.log('deleted burger', id)
      location.reload();
    })

  })



})