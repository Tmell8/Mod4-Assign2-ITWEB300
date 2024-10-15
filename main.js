
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
$(document).ready(function() {
  // Hover effect for Submit button
  $('#btnSubmit').hover(
    function() {
      $(this).css({
        'color': 'red',
        'font-weight': 'bold'
      });
    }, 
    function() {
      $(this).css({
        'color': '',
        'font-weight': ''
      });
    }
  );

  // Submit button click event handler
  $('#btnSubmit').on('click', function(event) {
    // Call form validation function (assumed to be defined elsewhere)
    if (formValidate()) {
      // Add timestamp
      let timestamp = new Date().toLocaleString();
      $('#message').text('Form submitted at: ' + timestamp);

      // Send form data to server (replace URL with actual server endpoint)
      // Example using jQuery AJAX
      let formData = {
        ReqDate: $('#reqDate').val(),
        EmpID: $('#empID').val(),
        FName: $('#fName').val(),
        LName: $('#lName').val(),
        ProbDesc: $('#probDesc').val()
      };

      $.ajax({
        url: 'https://your-server-endpoint.com/submit',
        type: 'POST',
        data: formData,
        success: function(response) {
          alert('Form submitted successfully!');
        },
        error: function() {
          alert('Error submitting the form.');
        }
      });
    } else {
      // Issue an error message and clear form fields
      $('#message').text('Form validation failed. Please check your inputs.');
      $('#supportTicketForm').trigger('reset');
    }

    // Determine which DOM element triggered the event and dim it
    $(event.target).css('opacity', '0.5');
  });
});

// Placeholder for the formValidate function
function formValidate() {
  // Placeholder logic, replace with actual validation
  // Return true if the form is valid, false otherwise
  let isValid = true;  // Assume validation passes for now
  // Add your validation logic here...
  
  return isValid;
}
