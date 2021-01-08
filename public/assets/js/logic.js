// When user clicks add-btn
$("#chirp-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newPost object
    var newPost = {
      title: $("#author").val().trim(),
      body: $("#comment-box").val().trim(),
      created_at: new Date()
    };
  
    console.log(newPost);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/posts/new", newPost)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("chirp");
  
        row.append("<p>" + newPost.title + " says, </p>");
        row.append("<p>" + newPost.body + "</p>");
        row.append("<p>On " + new Date(newPost.created_at).toLocaleDateString() + "</p>");
  
        $("#chirp-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#comment-box").val("");
  });
  
  // When the page loads, grab all of our chirps
  $.get("/api/posts", function(data) {
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("chirp");
  
        row.append("<p>" + data[i].title + " chirped.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>On " + new Date(data[i].created_at).toLocaleDateString() + "</p>");
  
        $("#chirp-area").prepend(row);
  
      }
  
    }
  
  });
  