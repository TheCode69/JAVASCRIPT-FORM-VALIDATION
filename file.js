<script>
        // Get the form element
        var form = document.getElementById("myForm");

        // Add a submit event listener to the form
        form.addEventListener("submit", function(event) {
            // Get the name and email input values
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;

            // Basic validation: Check if name and email are empty
            if (name === "" || email === "") {
                // Prevent the form from being submitted
                event.preventDefault();

                // Display an error message
                alert("Name and email are required!");
            }
        });
    </script>