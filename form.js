    var attempt = 3; // Variable to count number of attempts.
    // Below function Executes on click of login button.
    function validate() {
        var password = document.getElementById("password").value;
        if (password == "sandro") {
            window.location = "sucess.html"; // Redirecting to other page.
            return false;
        } else {
            attempt--; // Decrementing by one.
            alert("Il ne te reste plus que " + attempt + " essaie");
            // Disabling fields after 3 attempts.
            if (attempt == 0) {
                window.location.replace("sucess.html");
                return false;

            }
        }
    }
