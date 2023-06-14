$(function(){

    $('.works a').lightBox({

        overlayBgColor:'#000',
        overlayOpacity:0.8,

        imageBtnClose:"./images/close.png",
    
        txtImage:"WORKS",

        containerResizeSpeed:500,
    })


    $(window).scroll(function(){
        let num = $(document).scrollTop()
        console.log(num)

        // 스크롤바의 위치가 보다 크면 header 고정
        // 스크롤바의 위치가 보다 작으면 header 원래대로
        if(num>800){
            $('header .gnb').addClass('on')
        }else{
            $('header .gnb').removeClass('on')
        }
    })

})