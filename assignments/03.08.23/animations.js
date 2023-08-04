
var a=0;
var id= setInterval(Anim,1000);
function Anim(){
    a=a+10;
    if(a==800){
        clearInterval(id);
    }else{
        var target = document.getElementById("test");
        target.style.marginLeft = a + 'px';
    }
}
