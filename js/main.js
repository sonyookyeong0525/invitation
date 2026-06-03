
document.addEventListener("DOMContentLoaded", function() {
    // 목표 날짜 설정 (2026년 6월 27일 13시 00분 00초)
    const targetDate = new Date("June 27, 2026 12:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        // 시간 계산 공식
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        // 잔치 당일이거나 지났을 때 처리
        if (difference < 0) {
            clearInterval(timerInterval);
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            document.querySelector(".dday_message").innerHTML = "오늘이 고희연 <span>당일</span>입니다!";
            return;
        }

        // 화면에 2자리 숫자로 밀리초 반영해서 표시
        document.getElementById("days").innerText = d < 10 ? '0' + d : d;
        document.getElementById("hours").innerText = h < 10 ? '0' + h : h;
        document.getElementById("minutes").innerText = m < 10 ? '0' + m : m;
        document.getElementById("seconds").innerText = s < 10 ? '0' + s : s;
        // 하단 문구의 남은 일수 업데이트 (소수점 없이 당일 기준 일수 표시)
        document.getElementById("text_dday").innerText = d + 1; 
    }

    // 1초마다 함수를 실행하여 타이머 갱신
    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);

    var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
    };

    var map = new naver.maps.Map('map', mapOptions);

});
