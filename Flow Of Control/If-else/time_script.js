let timeBtn = document.querySelector('button');
timeBtn.addEventListener('click',inputMsg);


function inputMsg(){
var time = prompt("Insert the time and get the greetings");
        if (time>5 && time<12){
            alert("Good Morning!!!");
        }
        else if(time>12 && time<17){
            alert("Good Afternoon!!!");
        }
        else if(time>17 && time<21){
            alert("Good Evening!!!");
        }
        else{
            alert("Good Night!!!");
        }
      timeBtn.textContent= time + " " +"hrs";
    }