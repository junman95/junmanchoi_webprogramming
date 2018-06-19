//Jquery 동작 확인
$(document).ready(function () {
    alert('JQuery 활용 웹 사이트 입니다!');

});

// 배너 지워주기
$(document).ready(function () {
    $('#close_btn').click(function () {
        $('#banner').fadeOut("slow");

    });
});

// 좌측 사이드메뉴 아코디언
$(function () {
    $("#menu_accordion").accordion();
});

// 배열로 정보 띄우기
$(document).ready(function () {
    var info = [
        { name: '최준만', region: '서울특별시 성북구 길음동' },
        { name: 'Junman Choi', region: 'Gireum Dong, Sungbuk-Gu, Seoul' }
    ];
    $('#footer').on('click', function () {
        $('.info').append(function (index) {
            var item = info[index];
            var output = '';
            output += '</br>' + item.name + '</br>';
            output += item.region + '</br>';
            return output;
        });
        $(this).off();
    });
});

// 이미지 슬라이더
$(document).ready(function () {
    // 슬라이더를 움직여주는 함수
    function moveSlider(index) {
        // 슬라이더를 이동한다.
        var willMoveLeft = -(index * $('.slider_image').width());
        $('.slider_panel').animate({ left: willMoveLeft }, 'slow');
        // control_button 에 active 클래스를 부여/제거한다.
        $('.control_button[data-index=' + index + ']').addClass('active');
        $('.control_button[data-index=' + index + ']').removeClass('active');
        // 글자를 이동한다.
        $('.slider_text[data-index=' + index + ']').show().animate({ left: 0 }, 'slow');
        $('.slider_text[data-index!=' + index + ']').hide(0, function () {
            $(this).css('left', -300);
        });
    }
    // 초기 텍스트 위치 지정 및 data-index 할당
    $('slider_text').css('left', -300).each(function (index) {
        $(this).attr('data-index', index);
    });
    // 컨트롤 패널의 위치를 지정해준다 ( 이미지하단 중앙부 )
    $('.control_panel').css('top', $('.slider_image').height() + 10);
    $('.control_panel').css('left', $('.slider_image').width() / 2 - 30);


    // 컨트롤 버튼의 클릭 리스너 지정 및 data-index 할당
    $('.control_button').each(function (index) {
        $(this).attr('data-index', index);
        //첫버튼 채워진버튼으로 넣어줌
        $('.control_button[data-index=0]').attr('src', 'https://kr.seaicons.com/wp-content/uploads/2015/07/playstation-circle-black-and-white-icon.png');
    }).click(function () {
        //채워져있는 버튼 비어있는 버튼으로 교체
        $('.control_button').attr('src', 'http://g90179.com/data/file/GICOM/1982194151_9FGsVmDw_0b15c3654019ca17a4ef67694a53d143b6c491d6.png');
        //클릭된 버튼 채워진버튼으로 교체
        $(this).attr('src', 'https://kr.seaicons.com/wp-content/uploads/2015/07/playstation-circle-black-and-white-icon.png');

        var index = $(this).attr('data-index');
        moveSlider(index);
    });
    // 텍스트 data-index 할당으로 변경하기
    $('.slider_text').each(function (index) {
        $(this).attr('data-index', index);
        $('.slider_text[data-index!=0]').hide(0);
    }).click(function () {

        var index = $(this).attr('data-index');
        moveSlider(index);
    });
});

//헤더이미지 변경
$(document).ready(function () {
    var img_idx = [
        { src: 'http://img2.sbs.co.kr/img/sbs_cms/PG/2016/09/06/PG81882750_w1280_h720.jpg' },
        { src: 'https://i.ytimg.com/vi/8UFoTRyv8Bw/maxresdefault.jpg' },
        { src: 'http://www.kleague.com/sites/all/modules/board_common_content_type_module/js/naver_smart_editor/upload/201801261002021628081298.jpg' }
    ]
    var num = 0;
    setInterval(function () {
        
        $('#header').fadeOut('slow', function () {
            $(this).each(function (index) {
                index = num % 3;
                var item = img_idx[index];

                $(this).css('background-image', 'url(' + item.src + ')');
                $(this).css('background-size', '100%');
                $(this).css('background-position-y', '10%');

            });
            num++;
        }).fadeIn('slow');//체이닝 사용.
        
    }, 5000);
    
});
