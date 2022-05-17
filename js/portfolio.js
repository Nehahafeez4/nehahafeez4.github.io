/*let change=document.querySelector(".menu");
let bars=document.querySelector(".fa fa-bars")
bars.addEventListener("click",function(){
    change.classList.toggle("active")
})*/
$(".menu-btn").click(function(){
    $(".navBar .menu").toggleClass("active")
})