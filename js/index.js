let aboutOffset = $("#about").offset().top;

$(window).scroll(function()
    {
        let wScroll = $(window).scrollTop();
        if(wScroll > aboutOffset -20)
        {
            $("#main-nav").css("backgroundColor","rgba(0,0,0,0.8)");
            $("#main-nav").css("padding","0px 60px");
        }
        else
        {
            $("#main-nav").css("backgroundColor","transparent");
            $("#main-nav").css("padding","0px 0px");
        }
    }
)

//Eltn2ol ben el sections
$("a[href^='#']").click(function(eventInfo){
    let aHref = $(eventInfo.target).attr("href");//Ro7 L link ely dost 3leh>>el attribut(href)bta3oh w7to fe Let(aHref)
    let sectionOffset = $(aHref).offset().top;//hat bo3doh 3n Top w7toh fe Let(sectionOffset)
    $("html,body").animate({scrollTop:sectionOffset} , 2000);//ab3d 3n scrollTop 3la 2d bo3doh

})

// //Loading Screen
// $(document).ready(function(){
//     $("#loading").fadeOut(1000,function(){
//         $("body").css("overflow" , "auto");
//     })
// })