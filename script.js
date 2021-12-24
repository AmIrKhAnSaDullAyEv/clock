const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');
    
    // let date = new Date();
    
    // console.log(date.getDate());
    // console.log(date.getDay());
    // console.log(date.getFullYear());
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getMonth());
    // console.log(date.getSeconds());
    
    
function clock() {
    
    
    let time = new Date(),
        hours = time.getHours() * 30,
        minutes = time.getMinutes() * 6,
        second = time.getSeconds() * 6;
        
    
        hour.style = `transform: rotate(${hours}deg)`;
        min.style = `transform: rotate(${minutes}deg)`;
        sec.style = `transform: rotate(${second}deg)`;
        
        // hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        // minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        if (time.getHours() < 10) {
            hoursNum.innerHTML = '0' + time.getHours();
        }else {
            hoursNum.innerHTML = time.getHours();
        }
        
        
        if (time.getMinutes() < 10) {
            minNum.innerHTML = '0' + time.getMinutes();
        }else {
            minNum.innerHTML = time.getMinutes();
        }
            
        
        
        setTimeout(() => clock(), 1000);
        
}

clock()



// setTimeout(() => {
    
// }, 5000);

// setInterval(() => {
    
// }, 2000);


const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContent = document.querySelectorAll('.tabsContentItem');
    
    
tabsItem.forEach((item, i) => {
    item.addEventListener('click', function () {
        removeActiveClass()
        this.classList.add('active');
        tabsContent[i].classList.add('active');
    })
})


function removeActiveClass() {
    tabsItem.forEach((item, i) => {
        item.classList.remove('active');
        tabsContent[i].classList.remove('active');
    })
}

/* Homework */


const hourElement = document.querySelector('.stopwatch__hours'),
    minuteElement = document.querySelector('.stopwatch__minutes'),
    secondElement = document.querySelector('.stopwatch__seconds'),
    button = document.querySelector('.stopwatch__btn');

button.addEventListener('click', () => {
    if(button.innerHTML == 'start') {
        clearInterval(interval);
        interval = setInterval(startTimer, 1000);
        button.innerHTML = 'stop';
    }else if(button.innerHTML == 'stop') {
        clearInterval(interval);
        button.innerHTML = 'reset';
    }else if(button.innerHTML == 'reset') {
        resetTimer()
    }
})



let hour2 = 0,
    minute = 0,
    secound = 0,
    interval;

function startTimer() {
    secound++
    secondElement.innerHTML = secound;
    if(secound > 59) {
        minute++
        minuteElement.innerHTML = minute;
        secound = 0;
        secondElement.innerHTML = secound;
    }else if(minute > 59) {
        hour2++
        hourElement.innerHTML = hour2;
        minute = 0;
        minuteElement.innerHTML = minute;
    }else if(hour2 > 99) {
        hour2 = 0;
        hourElement.innerHTML = hour2;
    }
}

function resetTimer() {
    hourElement.innerHTML = 0;
    minuteElement.innerHTML = 0;
    secondElement.innerHTML = 0;
    button.innerHTML = 'start'
}