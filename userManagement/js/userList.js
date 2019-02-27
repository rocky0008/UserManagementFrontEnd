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

$('#userPage').click(function(e)
{
    location.href='file:///home/bridgelabz/userManagement/html/user.html'
})


function getUserList()
{
    $(document).ready( function () {
        var table = $('#table').DataTable({
               "sAjaxSource": "http://localhost:8080/usermanagement/userList",
               "sAjaxDataProp": "",
               "order": [[ 0, "asc" ]],
               "aoColumns": [
                     { "mData": "id"},
                     { "mData": "userName" },
                     { "mData": "email" },
                     { "mData": "dateOfBirth" },
                     
                     { "mData": "status" },
                     { "mData": "role" },
                     {render : editIcon}
               ]
        })
   });


   var editIcon = function ( data, type, row ) {
    if ( type === 'display' ) {
       // console.log(data , mData);
        
        return ' <a href="./editprofile.html" class="fa fa-pencil"/>';
    }

  
    
};
}