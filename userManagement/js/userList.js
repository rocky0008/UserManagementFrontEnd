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
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $(".collapsed").on("hide.bs.collapsed", function () {
            $(this).prev().find(".glyphicon").eq(1).removeClass(" glyphicon-chevron-right").addClass("glyphicon-chevron-left");
        });
        $('.collapsed').on("show.bs.collapse", function () {
            $(this).prev().find(".glyphicon").eq(1).removeClass("glyphicon-chevron-left").addClass("glyphicon-chevron-right");
        });
    })
});
$('#left').click(function () {
    $(this).toggleClass('fa fa-chevron-left fa fa-chevron-right');
});
$('#profilePage').click(function (e)
{

location.href="file:///home/bridgelabz/userManagement/html/profile.html?id="+localStorage.getItem('token')
})
$('#logout').click(function (e)
{
    localStorage.removeItem('token')
});


function getUserList()
{
    $.ajax({
        type :'get',
        url : 'http://localhost:8080/usermanagement/user',
        dataType : 'json',
        success : function(user)
        {
            console.log( user,user.length);
            
           for (let index = 0; index < user.length; index++) {
            console.log(index);
            
            $("#name").append("<td>" + user[index].userName + "</td>");
            $("#role").append("<td>" + user[index].role + "</td>");
            $("#newRow").append("<tbody><tr><td></td></tr></tbody>");

           }
            // document.getElementById('name').innerHTML=user.firstName ;
            // document.getElementById('email').innerHTML = user.email;
            // document.getElementById('role').innerHTML = user.role;
            // if(user.status==true)
            // document.getElementById('status').innerHTML = 'Active';
            // else
            // document.getElementById('status').innerHTML = 'InActive'
        }

    });
}