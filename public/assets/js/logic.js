// When user clicks add-btn
$("#comment-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newPost object
    var newPost = {
      title: $("#title").val().trim(),
      body: $("#comment-box").val().trim(),
      created_at: new Date()
    };
  
    console.log(newPost);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/posts/new", newPost)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("reply");
  
        row.append("<p>" + newPost.title + " says, </p>");
        row.append("<p>" + newPost.body + "</p>");
        row.append("<p>On " + new Date(newPost.created_at).toLocaleDateString() + "</p>");
  
        $("#comment-area").prepend(row);
  
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
        row.addClass("reply");
  
        row.append("<p>" + data[i].title + " said </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>On " + new Date(data[i].created_at).toLocaleDateString() + "</p>");
  
        $("#comment-area").prepend(row);
  
      }
  
    }
  
  });
  
  $.get("/api/nasa", function(data) {
    console.log(data)
    console.log(data.url)
    console.log(data.title)

    $("#apod-image").attr("src", data.url);
    $("#apod-title").text(data.title)

    let row = $("<div>");
    row.addClass("apod");

    row.append("<p> Date: " + data.date + "</p>");
    row.append("<p> copyright: " + data.copyright + "</p>");
    row.append("<p> detail: " + data.explanation + "</p>");

    $("#apod-detail").append(row);
  })