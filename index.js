

var x,y;
x=randi();

$(".img1").attr("src","images/dice"+x+".png");


y=randi();
$(".img2").attr("src","images/dice"+y+".png");

if(x>y){
    $("h1").text("🚩Player 1 has WON");
}
else if(y>x){
    $("h1").text("Player 2 has WON🚩");
}
else{
    $("h1").css("fontSize", "2.68rem");
    $("h1").text("🚩DRAW, Refresh again🚩");

}

$("body").click(function(){window.location.reload(true);});

function randi(){

    return(Math.floor(Math.random()*6)+1);
}
