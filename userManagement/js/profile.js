
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

// function myFunction() {
//     console.log(localStorage.getItem('token'));
//     $.ajax({
//         type: 'get',
//         url: "http://localhost:8080/usermanagement/user/" + localStorage.getItem('token'),
//         dataType: 'json',
//         success: function (user) {
//             console.log(user);
//             document.getElementById('firstName').innerHTML = user.firstName;
//             document.getElementById('middleName').innerHTML = user.middleName;
//             document.getElementById('lasrName').innerHTML = user.lastName;
//             document.getElementById('dob').innerHTML = user.dtaeOfBirth;
//             document.getElementById('gender').innerHTML = user.gender;
//             document.getElementById('country').innerHTML = user.country;
//             document.getElementById('phone').innerHTML = user.phoneNumber;
//             document.getElementById('phoneExt').innerHTML = user.phoneExt;
//             document.getElementById('address').innerHTML = user.address;


//         }
//     })
// }