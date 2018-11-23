$(function(){
    slide();
});
function slide(){
    var isTop = true;
    var timer = null;
    var isSpeed = 3;
    var isTop_value = null;
    var toggle = -1;
    var ul = $("#miaovSlide ul");
    var up = getClass("up");
    var down = getClass("down");
    var str = ul.html()+ul.html();
    ul.html(str);
    $(up).click(function(){
        toggle = -1;
        doMove(toggle); 
    }).mouseover(function(){
        $(this).css({"filter":"alpha(opacity:100)","opacity":"1"});
    }).mouseout(function(){
        $(this).css({"filter":"alpha(opacity:60)","opacity":"0.6"});
    });
    $(down).click(function(){
        toggle = 1;
        doMove(toggle); 
     }).mouseover(function(){
        $(this).css({"filter":"alpha(opacity:100)","opacity":"1"});
    }).mouseout(function(){
        $(this).css({"filter":"alpha(opacity:60)","opacity":"0.6"});
    });
    
    doMove(toggle);

    function doMove(toggle){
        if(timer){
            clearInterval(timer);
        }
        timer = setInterval(function(){
            isSpeed +=2*toggle;
            var lis = $("#miaovSlide li");
            if(isSpeed >= 0){
                isSpeed = -lis.length*$(lis[0]).height()/2;
            } 
            if(Math.abs(isSpeed)>lis.length*$(lis[0]).height()/2){
                isSpeed = 0;
            }
            $("#miaovSlide ul").css("top",isSpeed+"px");
        },30);
    }
    getClass("down")
    function getClass(className){
        var allDiv = $("#miaovSlide div");
        for(var i = 0;i < allDiv.length;i++){
            if($(allDiv[i]).hasClass(className)){
                return allDiv[i];
            }
        }
    }
}