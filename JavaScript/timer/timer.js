// 시간 관련 객체
const timeboxSelector = document.querySelector(".main-time");
const hoursEl = timeboxSelector.querySelector("#hour");
const minutesEl = timeboxSelector.querySelector("#minute");
const secondsEl = timeboxSelector.querySelector("#second");
const inputEl = timeboxSelector.querySelectorAll(".box");

// 실행버튼 관련 객체
const btnSelector = document.querySelector(".main-button");
const btnStartDisable = btnSelector.querySelector(".start-disable");
const btnResetDisable = btnSelector.querySelector(".reset-disable");
const btnStartActive = btnSelector.querySelector(".start-active");
const btnPauseActive = btnSelector.querySelector(".pause-active");
const btnResetActive = btnSelector.querySelector(".reset-active");

// 반복적인 실행함수 선언
let interval;

// 일시정지 상태 초기값 false로 선언
let pause = false;

// 입력된 타이머 시간 초기값 0으로 선언
let totalSeconds = 0;

// 초기상태 실행
init();

/** 초기상태 함수 */ 
function init(){
    btnStartActive.style.display = "none";
    btnPauseActive.style.display = "none";
    btnResetActive.style.display = "none";
    btnStartDisable.style.display = "block";
    btnResetDisable.style.display = "block";
}

// 시작활성버튼 클릭시 실행
btnStartActive.addEventListener('click', ()=>{

    const hours = parseInt(hoursEl.value);
    const minutes = parseInt(minutesEl.value);
    const seconds = parseInt(secondsEl.value);

    const totalSeconds = hours*60*60 + minutes*60 + seconds;

    startTimer(totalSeconds);

    pause = false;

    btnStartActive.style.display = "none";
    btnPauseActive.style.display = "block";
    
})

// 일시정지버튼 클릭시 실행
btnPauseActive.addEventListener('click', ()=>{
    pause = true;

    btnPauseActive.style.display = "none";
    btnStartActive.style.display = "block";

})

// 리셋활성버튼 클릭시 실행
btnResetActive.addEventListener('click', ()=>{
    
    init();
    stopTimer();
    updateInput(0);

})

/** 타이머 실행 함수 */
function startTimer(totalSeconds){

    interval = setInterval(()=> {

        if(!pause){
            if(totalSeconds > 0){
                totalSeconds--;
                updateInput(totalSeconds);
                
                if(totalSeconds <= 0){

                    alert("타이머로 설정한 시간을 모두 사용하셨습니다.");
                    init();
                    stopTimer();
                    updateInput(0);

                }
            }
        }

    }, 1000);
    
}

/** 타이머 실행정지 함수 */
function stopTimer(){

    interval = clearInterval(interval);

}

/** 타이머 시간 업데이트 함수(입력된 타이머 시간) */
function updateInput(totalSeconds){

    const hours = Math.floor(totalSeconds / 60 / 60);
    const minutes = Math.floor(totalSeconds / 60) - 60 * hours;
    const seconds = totalSeconds % 60;

    hours < 10 ? hoursEl.value = hours.toString().padStart(2,"0") : hoursEl.value = hours;
    minutes < 10 ? minutesEl.value = minutes.toString().padStart(2,"0") : minutesEl.value = minutes;
    seconds < 10 ? secondsEl.value = seconds.toString().padStart(2,"0") : secondsEl.value = seconds;

}

// 시간 value 변화에 따른 버튼 활성상태
inputEl.forEach(i => i.onchange = function(){

    if (i.value > 0) {

        btnStartDisable.style.display = "none";
        btnResetDisable.style.display = "none";
        btnStartActive.style.display = "block";
        btnResetActive.style.display = "block";
        
    } else if((i.value == 0)) {

        init();

    }

})