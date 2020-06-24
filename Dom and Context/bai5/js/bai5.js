let typing;
$("#user-input").on('keyup', function() {
    clearTimeout(typing);
    typing = setTimeout(function(){
        console.log($("#user-input").val());
    }, 1000)
});