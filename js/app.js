$(document).ready(function(){
    popup()
    menu()
    init_slide()
    slide()
    tab()
})
function popup(){//팝업
    $(".pop").click(function(){
        $("#popup").show()
    })
    $("#closeBtn").click(function(){
        $("#popup").hide()

    })
}
function menu(){//메뉴
    var idx=0
    $(".gnb>li").hover(
        function(){
            idx=$(this).index()//이벤트 발생한곳의 index번호 가져옴
            //즉, li의 index값을 가져옴 (몇번째 li인가?)
            console.log(idx)//0,1,2,3...
            //idx번째에 해당하는 lnb만 내린다.
            $(".gnb>li").eq(idx).find(".lnb").slideDown(500)
            //gnb하위 li idx번째 내부에서 lnb를 찾아 slideDown
        },
        function(){
            $(".lnb").stop().slideUp(500)
        }
    )
}
function init_slide(){
    for(var i=0; i<=2; i++){
        $("slide_contents>img").eq(i).hide()
    }
    $("#slide_contents>img").eq(0).show()
}

function slide(){//슬라이드
    setInterval(slide_fade,3000)
}
var slideIndex=0
function slide_fade(){
    //시작하기전에 이미지는 다 숨기고
    //0번째 이미지만 보여준 상태에서 시작

    //0번째 fadeOut-스르륵 사라진다.
    //1번째 fadeIn-스르륵 보여준다.

    //1번째 fadeOut
    //2번째 fadeIn

    //2번째 fadeOut
    //0번째 fadeIn
    $("#slide_contents>img").eq(slideIndex).fadeOut(1000)
    if(slideIndex==2){
        $("#slide_contents>img").eq(0).fadeIn(1000)
        slideIndex=0
    }else{
        $("#slide_contents>img").eq(slideIndex+1).fadeIn(1000)
        slideIndex++
    }
    /*
    $("#slide_contents>img").eq(0).fadeOut(1000)
    $("#slide_contents>img").eq(1).fadeIn(1000)

    $("#slide_contents>img").eq(1).fadeOut(1000)
    $("#slide_contents>img").eq(2).fadeIn(1000)

    $("#slide_contents>img").eq(2).fadeOut(1000)
    $("#slide_contents>img").eq(0).fadeIn(1000)

    $("#slide_contents>img").eq(0).fadeOut(1000)
    $("#slide_contents>img").eq(1).fadeIn(1000)
    */ 
}
function tab(){//탭
    var idx=0
    $(".tab_btn>a").click(function(){
        idx=$(this).index()
        //0,1
        $(".tab_contents>div").hide()
        $(".tab_contents>div").eq(idx).hide()
    })
}