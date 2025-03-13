// header 시작
$("#banner_wrap .img_box li").hide();
$("#banner_wrap .img_box li:nth-child(1)").show();
setInterval(function(){
    $("#banner_wrap .img_box li:nth-child(1)").fadeOut(2000).next().fadeIn(2000).end().appendTo("#banner_wrap .img_box")
},4000);
// header 끝

// top 시작
$(".top_button").click(function(){
    $("body,html").animate({
        scrollTop: 0
    },1000)
});
// top 끝

// 공연예매
$(".gnb li:nth-child(1)").click(function(){
    $("body,html").animate({
        scrollTop: 910
    },500)
});

// NEWS
$(".gnb li:nth-child(2)").click(function(){
    $("body,html").animate({
        scrollTop: 3400
    },1000)
});
// Library
$(".gnb li:nth-child(3)").click(function(){
    $("body,html").animate({
        scrollTop: 4300
    },1000)
});
// The Wave Hall
$(".gnb li:nth-child(4)").click(function(){
    $("body,html").animate({
        scrollTop: 5050
    },1000)
});

// section1 slider1 시작
$(document).on('ready', function () {
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 7,
        speed: 1000,
        cssEase: 'linear',
        autoplay: true,
        slidesToScroll: 1
    });
});
// section1 slider1 끝

// section4 slider2 시작
$(document).on('ready', function () {
    $(".regular").slick({
      infinite: true, /* 맨끝이미지에서 끝나지 않고 다시 맨앞으로 이동 */
      slidesToShow: 3, /* 화면에 보여질 이미지 갯수*/
      slidesToScroll: 1,  /* 스크롤시 이동할 이미지 갯수 */
      autoplay: true, /* 자동으로 다음이미지 보여주기 */
      /*arrows: true,  화살표 */
      dots:false, /*아래점*/
      cssEase: 'linear',  /* 등속 */
      autoplaySpeed: 0,/* 다음이미지로 넘어갈 시간 */
      speed: 7000, /* 다음이미지로 넘겨질때 걸리는 시간 */
      /*pauseOnHover: true,  마우스 호버시 슬라이드 이동 멈춤 */        
      //vertical:true,/* 세로방향으로 슬라이드를 원하면 추가하기// 기본값 가로방향 슬라이드*/ 
      draggable : true, 	//드래그 가능 여부 
      pauseOnHover: true,  //마우스 호버 시 슬라이드 멈춤 -default:true	
    });

  });
//   section4 slider2 끝

//  section5 slider3 시작
document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer 설정
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.1 // 요소의 10%가 보일 때 애니메이션 실행
    });

    // 애니메이션을 적용할 요소
    const section1 = document.querySelector('.slider3 .s5_banner1');
    if (section1) {
        observer.observe(section1);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer 설정
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.1 // 요소의 10%가 보일 때 애니메이션 실행
    });

    // 애니메이션을 적용할 요소
    const section1 = document.querySelector('.slider3 .s5_banner2');
    if (section1) {
        observer.observe(section1);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer 설정
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.1 // 요소의 10%가 보일 때 애니메이션 실행
    });

    // 애니메이션을 적용할 요소
    const section1 = document.querySelector('.slider3 .s5_banner3');
    if (section1) {
        observer.observe(section1);
    }
});

// section5 aos 시작
AOS.init();
// section5 aos 끝
