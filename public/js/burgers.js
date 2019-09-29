$(function () {


  $.ajax("/api/cats", {
    type: "POST",
    data: newCat
  }).then(
    function () {
      console.log("created new cat");
      // Reload the page to get the updated list
      location.reload();
    }
  );
})