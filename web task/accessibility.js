$(document).ready(function() {
  // Function to toggle text size
  function toggleTextSize() {
    const $paragraphs = $("p");

    if ($("#text-size-toggle").prop("checked")) {
      // Increase text size by 20%
      $paragraphs.css("font-size", "120%");
    } else {
      // Reset text size to the default
      $paragraphs.css("font-size", "");
    }
  }

  // Attach a change event listener to the toggle switch
  $("#text-size-toggle").change(toggleTextSize);
});
