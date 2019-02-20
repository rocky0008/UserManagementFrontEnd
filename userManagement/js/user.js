
$(document).ready(function () {
    $("#addUser").submit(function (event) {
        event.preventDefault();
        ajaxPost();

    });

    function ajaxPost() {

        // PREPARE FORM DATA
        var userData = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            middleName: $("#middleName").val(),
            dateOfBirth: $("#datepicker").val(),
            gender: $("#gender").val(),
            country: $("#country").val(),
            phoneNumber: $("#phoneNumber").val(),
            phoneExt: $("#phoneExt").val(),
            firstName: $("#firstName").val(),
            email: $("#email").val(),
            address: $("#address").val(),
            userName: $("#userName").val(),
            password: $("#password").val(),
            confirmPassword: $("#confirmPassword").val(),
            role : $("#role").val()

        }
        console.log(userData);

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/usermanagement/user",

            data: JSON.stringify(userData),
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");

            },
            success: function (result)
             {
                console.log(result)
                if (result.status == "done") 
                {
                  console.log(result.status)
                  location.href = "file:///home/bridgelabz/userManagement/user.html"

                }
            },
            error: function (e) {
                $("#getResultDiv").html("<strong>Error</strong>");
                console.log("ERROR: ", e);
            }

        });
    }
})



$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $(".side-nav .collapse").on("hide.bs.collapse", function () {
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
    });
    $('.side-nav .collapse').on("show.bs.collapse", function () {
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");
    });
})

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});


// $(".toggle-password").click(function() {

//     $(this).toggleClass("fa-eye fa-eye-slash");
//     var input = $($(this).attr("toggle"));
//     console.log(input);
    
//     if (input.attr("type") == "password") 
//     {
//       input.attr("type", "text");
    
//     }
//     else
//     {
//       input.attr("type", "password");
//     }
//   });


    $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input=document.getElementById("password");
    console.log(input);
    
    if(input.type==="password")
         input.type="text"
    else
          input.type="password"
    });

    $(".toggle-confirmPassword").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input=document.getElementById("confirmPassword");
        console.log(input);
        
        if(input.type==="password")
             input.type="text"
        else
              input.type="password"
        });


