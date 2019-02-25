$(document).ready(function () {
    $("#userLogin").submit(function (event) {
        event.preventDefault();
        ajaxPost();
        //  showMessage(data);
    });

    function ajaxPost() {

        // PREPARE FORM DATA
        var formData = {
            email: $("#inputEmail").val(),
            password: $("#inputPassword").val()

        }
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var Ddate = days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ampm;
        console.log(Ddate);




        console.log(formData.email, formData.password);
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/usermanagement/login",

            data: JSON.stringify(formData),
            dataType: 'json',
            // onsuccess : "showMessage",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
                // HttpServletRequest.setRequestHeader ;
            
            },
            
            //     Headers
            //     {
            //         "token" = "";
            //     }
            // },
          
            success: function (result) {
                console.log(result.token);
                
                if (result.status == "done" ) {
                    console.log(result.status)

                    console.log(Ddate);

                    // document.getElementById('date').innerHTML = formatAMPM();

                    // function formatAMPM() {
                    //     var d = new Date(),
                    //         minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
                    //         hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
                    //         ampm = d.getHours() >= 12 ? 'pm' : 'am',
                    //         months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    //         days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    //     return days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ampm;
                    // }


                    // jQuery.load("file:///home/bridgelabz/userManagement/html/homepage.html",function(){
                    // jQuery("#date").html(date);
                    // });
                    //document.getElementById('date').innerHTML = date;
                    localStorage.setItem('token',result.token);
                    location.href = "file:///home/bridgelabz/userManagement/html/homepage.html";


                }
                else if (result.status == "not valid") {
                    console.log("error")
                    $('#error').html(

                        "<div class=container><h2>Alerts</h2><div class=alert alert-danger><strong>Info!</strong> Invalid UserName And Password.</div></div>");

                }
            },
            

            error: function (e) {
                $('#error').html(

                    "<div class=container><h2>Alerts</h2><div class=alert alert-danger><strong>Info!</strong> Invalid UserName And Password.</div></div>");
            }
        });
    }
    // function showMessage(data)
    // {
    //     $('#userLogin').html('Successfully Submitted');

    // }
})
 


