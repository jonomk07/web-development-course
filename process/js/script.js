$(function(){
    $('.load-info').on('click',function(){
       $.ajax({
           method: 'GET',
           url: 'js/data_artists.json',
           dataType: 'json'
       }).done(function(data){
          $.each(data.artists, function(key,val){
              $('.info-artists')
              .append('<li>' + val.name + '<li>')
          }) //Each
       });//ajax Done
    });// Click Event
});// jQuery Ready