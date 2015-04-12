 $(document).ready(function(){
    $('.message_post').on('ajax:success',function(e, data, status, xhr){
		console.log("success");
    }).on('ajax:error',function(e, xhr, status, error){
		console.log("failed");
    });
  });
