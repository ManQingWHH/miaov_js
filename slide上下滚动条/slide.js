var isTop = true;
var timer = null;
var isSpeed = 3;
var isTop_value = null;
$(function(){
   var ul = $("#miaovSlide ul");
   var str =  ul.html() + ul.html();
   var ulH = ul.html(str);
   var lis = $("#miaovSlide li");
   var as = $("#miaovSlide .common");
   ulH.css("height",lis.length*$(lis[0]).height());
   $.each(lis,function(i,item){
        $(item).mouseover(function(){
            removeMove();
        });
        $(item).mouseout(function(){
            startMove(isTop);
        });
   });
   $(as[0]).mouseover(function(){
        startMove(true);
   });
   $(as[1]).mouseover(function(){
        startMove(false);
   });
   startMove(isTop);
});
function startMove(isTop){
    isTop_value = isTop;
    if(timer){
        clearInterval(timer);
    }
    timer = setInterval(doMove,30);
}
function removeMove(){
    clearInterval(timer);
    timer = null;
}
function doMove(){
    var ul = $("#miaovSlide ul");
    var h = ul.position().top;
    if (isTop_value){
        h -= isSpeed;
        if (h <= -ul.height()/2){
            h += ul.height()/2;
        }
    } else {
        h += isSpeed;
        if (h >= 0){
            h -= ul.height()/2;
        }
    }
    ul.css("top",h+"px");
}