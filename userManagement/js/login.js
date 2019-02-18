$(document).ready(function () {
    $("#userLogin").submit(function (event) {
        event.preventDefault();
        ajaxPost();

    });

    function ajaxPost() {

        // PREPARE FORM DATA
        var formData = {
            email: $("#inputEmail").val(),
            password: $("#inputPassword").val()

        }

        console.log(formData.email, formData.password);
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/usermanagement/login",

            data: JSON.stringify(formData),
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
                
            },
            success: function (result) {
                console.log(result)
                if (result.status == "done") {
                    console.log(result.status)
                    location.href = "file:///home/bridgelabz/userManagement/homepage.html"

                }
                else if (result.status == "not valid") {
                    console.log("error")
                    $('#error').html(

                       "<div class=container><h2>Alerts</h2><div class=alert alert-danger><strong>Info!</strong> This alert box could indicate a neutral informative change or action.</div></div>");

                }
            },
            error: function (e) {
                $("#getResultDiv").html("<strong>Error</strong>");
                console.log("ERROR: ", e);
            }
        });
    }
})

