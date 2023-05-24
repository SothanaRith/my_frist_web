$(document).ready(function(){
    const date = new Date();
    const hour = date.getHours();
    console.log(hour);
    let message= "";
    if (hour <= 12){
        message= "Good morning";
    }
    if(hour >12 ){
        message= "Good afternoon";
    }
    if(hour >= 17){
        message= "Good evening";
    }
    if(hour >= 20){
        message= "Good night";
    }
  $('#heading').empty().append(message + " from");
})

