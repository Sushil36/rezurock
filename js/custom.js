$(document).on("click", ".expand", function () {
    $("#faq_section .detail").not($(this).next()).hide(),
    $("#faq_section .expand .right-arrow .fa").not($(this).children().children(".fa")).removeClass("fa-angle-up").addClass("fa-angle-down"),
    $(this).next().slideToggle(200),
    ($expand = $(this).find(">:first-child")),
    $expand.children().hasClass("fa-angle-up") ? $expand.html("<i class='fa fa-angle-down fa-2x'></i>") : $expand.html("<i class='fa fa-angle-up fa-2x'></i>");
}),
    
    
    
//Menu js start here*//
$(document).on('click', '#toggle_menu', function () {
    $('body').addClass('menu_visible');
    var me = $(this);
    me.addClass('animate_menu');

    if (me.hasClass('open_menu')) {
        me.removeClass('open_menu').addClass('close_menu');
        $('body').removeClass('menu_visible');
    } else {
        me.removeClass('close_menu').addClass('open_menu');
    }

    setTimeout(function () {
        me.removeClass('animate_menu');
    }, 1000);
});

$(document).on('click', '#toggle_menu1', function () {
    $('body').removeClass('menu_visible');
});
//Menu js start here*//
$('.carousel').carousel({
    interval: 3000
    
}); 

$(document).ready(function () {
  $('.see_how').click(function() {
  $('html, body').animate({
    scrollTop: $(".see_how_people").offset().top-0
  }, 1000)
}), 
  $('.download_link').click(function (){
    $('html, body').animate({
      scrollTop: $(".faq_download ").offset().top-0
    }, 1000)
  }),
  $('.information_link').click(function (){
    $('html, body').animate({
      scrollTop: $(".visit_outer ").offset().top-60
    }, 1000)
  });


  $("#submit").click(function(){
     var first_name = $('#first_name').val();
     var last_name = $('#last_name').val();
     var email = $('#email').val();
     var allfield = 0;
     if(first_name == '')
     {
        $('#first_name_error').addClass('fild_error');
        allfield = 1;
     }
     else
     {
        $('#first_name_error').removeClass('fild_error');
     }

     if(last_name == '')
     {
        $('#last_name_error').addClass('fild_error');
        allfield = 1;
     }
     else
     {
        $('#last_name_error').removeClass('fild_error');
     }
    var emailcheck = 0;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat))
    {
      emailcheck = 1;
    }
    else{
      emailcheck = 0;
    }

     if(email == '' || emailcheck == 0)
     {
        $('#email_error').addClass('fild_error');
        allfield = 1;
     }
     else
     {
        $('#email_error').removeClass('fild_error');
     }

     if(allfield == 0)
     {
      $('.error_text').hide();
      window.location = "thank-you.html";
        // $.post("test.asp",
        // {
        //   first_name: first_name,
        //   last_name: last_name,
        //   email: email,
        // },
        // function(data, status){
        //   alert("Data: " + data + "\nStatus: " + status);
        // });
     }
     else
     {
      $('.error_text').show();
     }


  });
  
});