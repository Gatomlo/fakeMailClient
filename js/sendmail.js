$(document).ready(function(){
  var unreadMail = 0;
  $("#sendMailButton").click(function(){

    var dest = $("#newMailModal #dest").val();
    var object = $("#newMailModal #object").val();
    var mail = $("#newMailModal #mail").val();

    var receiveMailSend = 'Dominique Lacroix';
    var receiceMailObject ='Demande d\'accès au site du CRP';
    var receiveMailDate ='25 février';

    if(dest=="d.lacroix@cfwb.be"){
      if(object.toLowerCase().indexOf("découvrir le récit policier") >= 0){
        var newMail ='<tr class="newMail" data-read=0 data-toggle="modal" data-target="#bravoMailModal">'+
            '<td><i class="fas fa-envelope"></i> <i class="far fa-star"></i></td>'+
            '<td>'+receiveMailSend+'</td>'+
            '<td>'+receiceMailObject+'</td>'+
            '<td>'+moment().locale('fr').format('LLL')+'</td>'+
            '</tr>'
        $('#newMailModal').modal('hide');
        setTimeout(function(){
          $('#mailList').prepend(newMail);
          unreadMail+=1;
          if(unreadMail == 1){
            $('#unreadMailCategory').append('<span id="unreadMailBadge" class="badge badge-dark"></span>');
          }
          $('#unreadMailBadge').html(unreadMail);
        },5000)
      }else{
        var newMail ='<tr class="newMail" data-read=0 data-toggle="modal" data-target="#failMailModal">'+
            '<td><i class="fas fa-envelope"></i> <i class="far fa-star"></i></td>'+
            '<td>'+receiveMailSend+'</td>'+
            '<td>'+receiceMailObject+'</td>'+
            '<td>'+moment().locale('fr').format('LLL')+'</td>'+
            '</tr>'
        $('#newMailModal').modal('hide');
        setTimeout(function(){
          $('#mailList').prepend(newMail);
          unreadMail+=1;
          if(unreadMail == 1){
            $('#unreadMailCategory').append('<span id="unreadMailBadge" class="badge badge-dark"></span>');
          }
          $('#unreadMailBadge').html(unreadMail);
        },5000)
      }
    }
    else{
      var newMail ='<tr class="newMail" data-read=0 data-toggle="modal" data-target="#errorMailModal">'+
          '<td><i class="fas fa-envelope"></i> <i class="far fa-star"></i></td>'+
          '<td>'+'Inconnu'+'</td>'+
          '<td>'+'Erreur sur la personne'+'</td>'+
          '<td>'+moment().locale('fr').format('LLL')+'</td>'+
          '</tr>'
      $('#newMailModal').modal('hide');
      setTimeout(function(){
        $('#mailList').prepend(newMail);
        unreadMail+=1;
        if(unreadMail == 1){
          $('#unreadMailCategory').append('<span id="unreadMailBadge" class="badge badge-dark"></span>');
        }
        $('#unreadMailBadge').html(unreadMail);
      },5000)
    };
    $("#newMailModal #dest").val('');
    $("#newMailModal #object").val('');
    $("#newMailModal #mail").val('');
  });

  $(document).on('click','.newMail',function(){
    if($(this).data('read')==0){
      $(this).find('.fa-envelope').addClass('fa-envelope-open').removeClass('fa-envelope')
      unreadMail-=1;
      if(unreadMail <= 0){
        $('#unreadMailBadge').remove();
      }
      else{
        $('#unreadMailBadge').html(unreadMail);
      }
      $(this).data('read',1)
    }
  })
});
