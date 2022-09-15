/** 목표와 1만 시간을 위해 하루에 투자할 시간을 입력하면 목표와 1만 시간을 채울 일수를 계산하여 전달하는 함수 */
function result(){
    var goalinput = document.getElementById("goalInput");
    var timeinput = document.getElementById("timeInput");
    var goal = document.getElementById("goal");
    var time = document.getElementById("time");

    var regex = /[^0-9]/g;
    var timeInt = timeinput.value.replace(regex, "");
    
    console.log(timeInt);
    if(timeInt != ""){
        var timeresult = 10000/timeInt;
        time.innerText = timeresult;
    }else{
            alert("시간을 입력해주세요");
    }

    if(goalinput.value != ""){
        goal.innerText = goalinput.value;
    }else{
        alert("목표를 입력해주세요");
    }

}

/** 모달을 여는 함수 */
function openmodal(){
    var modal = document.getElementsByClassName("modal");

    Array.from(modal).forEach((x) => {
        if(x.style.display == "none"){
            x.style.display = "block";
        }else {
            x.style.display = "none";
        }
    })
}

/** 모달을 닫는 함수 */
function closemodal(){
    var modal = document.getElementsByClassName("modal");

    Array.from(modal).forEach((x) => {
        if(x.style.display == "block"){
            x.style.display = "none";
        }else {
            x.style.display = "block";
        }
    })
}

/** 현재 URL을 복사하는 함수 */
function share(){

    var url = '';
    var textarea = document.createElement("textarea");  

    document.body.appendChild(textarea); 
    url = window.document.location.href;  
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("현재 URL이 복사되었습니다.")
}