$('.popup').hide()
$('.bg').hide()
$('.web1').on('click',function(e){
    
    e.preventDefault()
    $('.bg').fadeIn()
    $('.web_p_1').fadeIn()
})
$('.web2').on('click',function(e){
    
    e.preventDefault()
    $('.bg').fadeIn()
    $('.web_p_2').fadeIn()
})
$('.web3').on('click',function(e){
    
    e.preventDefault()
    $('.bg').fadeIn()
    $('.web_p_3').fadeIn()
})
$('.close').on('click',function(e){
    $('.popup').fadeOut()
    $('.bg').fadeOut()
})

$(document).ready(function(){
    lightbox.option({
        'maxWidth':1000
    })
})

// let full = new fullpage('#wrap')

const h_bg = document.querySelector('.h_bg')
const body = document.querySelector('body,html')
//1. header /scroll/window/scrollTop/style/
h_bg.style.transition = 'height 1s'
window.addEventListener('scroll',function(){
    //�덈룄��(�밸툕�쇱슦��) �ㅽ겕濡� �덉쓣 ��
    if(body.scrollTop > 50){
        h_bg.style.height = '0'
    }else {
        h_bg.style.height = '77px'
    }
})
