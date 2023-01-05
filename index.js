$(document).ready(function(){
    $(".sk-cube-grid").fadeOut(1000,function(){
        $("#loding").remove()
        $("body").css("overflow-y","auto")
    })
})

$("nav-item a").click(function(e){
    let clickItem = $(e.target).attr("href")
    console.log(clickItem);
    let aboutSection = $(clickItem).offset().top;
    $("html,body").animate({scrollTop: aboutSection} ,3000);
});



















//let aboutSection =$("#About").offset().top
//$(window).scroll(function(){
  //  let windowScroll=$(window).scrollTop();
    //if(windowScroll> aboutSection -50){
      //  $("navbar").css({"backgraound-coler":"rgba(0,0,0,0.7)",padding:'10px 50px'});
//}else{
  //      $("navbar").css({"backgraound-coler":"transparent",padding:'10px'});
    //}
//})