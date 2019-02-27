
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


$('#left').click(function () {
    $(this).toggleClass('fa fa-chevron-left fa fa-chevron-right');
});



$('#editPage').click(function (e)
{
console.log('hihihihi');

location.href="file:///home/bridgelabz/userManagement/html/editprofile.html?id="+localStorage.getItem('token')
})
$('#logout').click(function (e)
{
    localStorage.removeItem('token')
});


$('#profilePage').click(function (e)
{

location.href="file:///home/bridgelabz/userManagement/html/profile.html?id="+localStorage.getItem('token')
})


function myFunction() {
    console.log(localStorage.getItem('token'));
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/usermanagement/user/" + localStorage.getItem('token'),
        dataType: 'json',
        success: function (user) {

            console.log(user);
            document.getElementById('date').innerHTML=user.lastLoginStamp;
            if (user.firstName == null) {
                document.getElementById('firstName').innerHTML = '-';
            }
            else {
                document.getElementById('firstName').innerHTML = user.firstName;
            }
            if (user.middleName == null) {
                document.getElementById('middleName').innerHTML = '-';
            }
            else {
                document.getElementById('middleName').innerHTML = user.middleName;

            }
            if(user.lastName==null){
                document.getElementById('lastName').innerHTML = '-';

            }
    else {
        document.getElementById('lastName').innerHTML = user.lastName;

            }
            if(user.gender==null){
                document.getElementById('gender').innerHTML = '-';

            }
else {
                  document.getElementById('gender').innerHTML = user.gender;

            }
            if(user.dateOfBirth==null){
                document.getElementById('dob').innerHTML = '-';

            }
else {
    var datearray = user.dateOfBirth.split("-");

    var newdate = datearray[2] + '-' + datearray[1] + '-' + datearray[0];
    console.log('date ',newdate);
    
    document.getElementById('dob').innerHTML =newdate ;
            }
            if(user.country==null){
                document.getElementById('country').innerHTML = '-';

            }
else {
document.getElementById('country').innerHTML = user.country;

            }
            if(user.phoneNumber==null){
                document.getElementById('phone').innerHTML = '-';

            }
else {
document.getElementById('phone').innerHTML = user.phoneNumber;

            }
            if(user.phoneExt==null){
                document.getElementById('phoneExt').innerHTML = '-';

            }
else {
document.getElementById('phoneExt').innerHTML = user.phoneExt;

            }
            if(user.address==null){
                document.getElementById('address').innerHTML = '-';

            }
else {
document.getElementById('address').innerHTML = user.address;

            }
            if(user.email==null){
                document.getElementById('email').innerHTML = '-';

            }
else {
document.getElementById('email').innerHTML = user.email;

            }
            if(user.userName==null){
                document.getElementById('userName').innerHTML = '-';

            }
else {
document.getElementById('userName').innerHTML = user.userName;
document.getElementById('name').innerHTML = user.userName;


            }



        }
    })


    $.ajax({
        type : 'GET',
        url : 'http://localhost:8080/usermanagement/userLogin/'+localStorage.getItem('token'),
        dataType : 'json',
        success : function(userLogin)
        {
            console.log(userLogin);
            
            for (let index = 0; index < userLogin.length; index++) {
            //    document.getElementById('lastLoginStamp').innerHTML=userLogin[index].lastLoginStamp;
            console.log(userLogin[index].lastLoginStamp);
            
           // document.getElementById("lastLoginStamp").innerHTML = userLogin[index].lastLoginStamp;
           $("#lastLoginStamp").append('> ' + userLogin[index].lastLoginStamp + '<br>');
            }
        }
    })
}
