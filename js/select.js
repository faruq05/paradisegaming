// div selector
$(document).ready(function() {
  $('.selectable').click(function() {
    $('.selectable').not(this).removeClass('selected'); // Remove 'selected' class from other divs
    $(this).toggleClass('selected'); // Toggle 'selected' class on the clicked div
  });
});



//text_copy
$(document).ready(function() {
  $('.copy-link').click(function(e) {
    e.preventDefault(); // Prevent default hyperlink behavior
    var textToCopy = $('#text-to-copy').text(); // Get the text to copy
    var tempTextArea = $('<textarea>'); // Create a temporary textarea element
    $('body').append(tempTextArea); // Append it to the DOM
    tempTextArea.val(textToCopy).select(); // Set the value and select the text
    document.execCommand('copy'); // Copy the selected text
    tempTextArea.remove(); // Remove the temporary textarea
    alert('Text copied: ' + textToCopy);
  });
});