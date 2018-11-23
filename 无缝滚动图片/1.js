var isLeft = true;
var timer = null;
var speed = 3;
var pause = 30;
$(()=>{
    var ul = $(".roll ul");
    var as = $(".roll>a");
    var str = ul.html()+ul.html();
    var ulHtml = ul.html(str);
    var ali = $(".roll li");
    ulHtml.css("width",$(".roll li").width()*ali.length+"px");
    for(var i = 0;i<ali.length;i++){
        $(ali[i]).mouseover(function(){
            stopMove();
        });
        $(ali[i]).mouseout(function(){
            startMove(isLeft);
        });
    }
    $(as[0]).mouseover(function(){
        startMove(true);
    });
    $(as[1]).mouseover(function(){
        startMove(false);
    });
    setInterval(function(){
        speed= parseInt($("#sel_speed").val());
        pause = $("#pause_time").val();
    },5);
    startMove(true);
});
function startMove(move){
    isLeft = move;
    //想开启一个定时器，如果前面已经有一个定时器了，一定要先关闭后，才能开启
    if(timer){
        clearInterval(timer);
        timer = null;
    }
    timer = setInterval(doMove,parseInt(pause));
}
function stopMove(){
    clearInterval(timer);
    timer = null;
}
function doMove(){
    var ul = $(".roll ul");
    var l = ul.css("left");
    l = parseInt(l.split("px")[0]);    
    if(isLeft){
        l-= speed;
        if(l <= -ul.width()/2){
            l += ul.width()/2;
        }
    }else{
        l += speed;
        if(l >= 0){
            l -= ul.width()/2;
        }
    }
    ul.css("left",l+"px");
}