let hrs = document.getElementById("hrs");
let sec = document.getElementById("sec");
let min = document.getElementById("min");
let day = document.getElementById("Day");
setInterval(()=>{
    let currenTime = new Date();
    hrs.innerHTML = currenTime.getHours();
    day.innerHTML = currenTime.getDay();
    min.innerHTML = currenTime.getMinutes();
    sec.innerHTML = currenTime.getSeconds();

},1000)