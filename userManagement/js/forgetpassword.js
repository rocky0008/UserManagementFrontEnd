$(document).ready(function () {
    $("#recoverPassword").submit(function (event) {
        event.preventDefault();
        ajaxPost();

    });

    function ajaxPost() {

        // PREPARE FORM DATA
        var recoverPassword = {
            email: $("#inputEmail").val(),
           

        }

        console.log(recoverPassword.email);
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/usermanagement/forgotPassword?email="+recoverPassword.email,

            data: JSON.stringify(recoverPassword),
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
                
            },
            success: function (result) {
                console.log(result)
                if (result.status == "Your password has been send again to your Registered Email") {
                    console.log(result.status)
                    location.href = "file:///home/bridgelabz/userManagement/html/login.html"

                }
                else if (result.status == "You have to create Accountnot valid") {
                    console.log("error")
                    $('#error').html(

                       "<div class=container><h2>Alerts</h2><div class=alert alert-danger><strong>Info!</strong> Oops,You dont have an Account!! </div></div>");

                }
            },
            error: function (e) {
                $("#getResultDiv").html("<strong>Error</strong>");
                console.log("ERROR: ", e);
            }
        });
    }
})

