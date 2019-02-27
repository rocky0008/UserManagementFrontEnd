
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

$('#logout').click(function (e)
{
    localStorage.removeItem('token')
});

$('#profilePage').click(function (e)
{
console.log('hihihihi');

location.href="file:///home/bridgelabz/userManagement/html/profile.html?id="+localStorage.getItem('token')
})

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


function myFunction() {
    console.log(localStorage.getItem('token'));
    $.ajax({
        type: 'get',
        url: "http://localhost:8080/usermanagement/user/" + localStorage.getItem('token'),
        dataType: 'json',
        success: function (user) {
            console.log(user);
            document.getElementById('date').innerHTML = user.lastLoginStamp;
            document.getElementById('userName').innerHTML = user.userName;

        }
    })
    $.ajax({
        type:'get',
        url : 'http://localhost:8080/usermanagement/userCount/'+localStorage.getItem('token'),
        dataType : 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            // HttpServletRequest.setRequestHeader ;
        
        },
        success : function (countUser)
        {
            console.log(countUser);
            document.getElementById('active').innerHTML = countUser.active;
            document.getElementById('inActive').innerHTML = countUser.inActive ;
            document.getElementById('total').innerHTML = countUser.active + countUser.inActive;
        }
    });
}