$(document).ready(function(){
    if($(".body").css("width","60%")){
        $("#share").click(function(){
            $(".share-tag").css("display","flex")
        });
    }
    if($(".body").css("width","90%")===false){
        $("#share").click(function(){
            $(".share-tag").css("display","none")
            $(".share-tag").css("top","87%")
            $(".share-tag").css("left","105%")
            $(".share-tag").css("padding","20px 30px")
            $(".share-tag").css("width","70%")
            $(".tag").css("display","none");
            $(".footer").css("background","hsl(217, 19%, 35%)")
        });
    }
})