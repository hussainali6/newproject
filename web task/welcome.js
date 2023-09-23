  
    $(document).ready(function() {
      // Function to show the HTML Toast element when the 'Like' button is clicked
      $("#likeBtn").click(function() {
        $("#liveToast").toast("show");
      });

      // Function to execute a GET Request to the Bored API when the 'I'm Bored' button is clicked
      $("#boredBtn").click(function() {
        $.get("https://www.boredapi.com/api/activity/", function(data) {
          console.log("Bored API Response:", data);
        });
      });
    });
  