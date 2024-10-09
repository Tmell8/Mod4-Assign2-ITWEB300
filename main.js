
$(document).ready(function() {
  
  $("#btnSubmit").hover(
      function() { 
          $(this).css({"color": "red", "font-weight": "bold"});
      },
      function() { 
          $(this).css({"color": "", "font-weight": ""}); 
      }
  );

  
  $("#supportForm").submit(function(event) {
      event.preventDefault(); 
      
      
      let isValid = formValidate();
      
      if (isValid) {
          
          let formData = {
              reqDate: $("#reqDate").val(),
              empID: $("#empID").val(),
              fName: $("#fName").val(),
              lName: $("#lName").val(),
              probDesc: $("#probDesc").val()
          
          };
          console.log("Form submitted with data: ", formData); // Replace with actual AJAX request

          // Create timestamp
          let timestamp = new Date().toLocaleString();
          $("#timestamp").text("Form submitted on: " + timestamp);
          
          // Detect which element triggered the event and dim it
          $(event.target).css("opacity", "0.5"); // Dim the submit button
      } else {
          // Display error message and clear form fields
          $("#errorMessage").text("Form validation failed. Please try again.").show();
          $("#reqDate, #empID, #fName, #lName, #probDesc").val(''); 
      }
  });
});
