const currentDate=new Date();

console.log(currentDate);

const targetDate = new Date('2024-03-19T12:00:00'); // Replace with targets
console.log(targetDate);

const difference=targetDate - currentDate;
console.log(difference);

function updateCountdown(){
    const currentTime=new Date();
    const difference=targetDate-currentTime;

    const days=Math.floor(difference/(1000 * 60 * 60 * 24));
    const hours=Math.floor((difference%(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes=Math.floor((difference%(1000 * 60 * 60)) / (1000 * 60));
    const seconds=Math.floor((difference%(1000* 60 ))/(1000));

    document.getElementById("days").innerHTML=days;
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;
    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerText = "The event has started!";
    }
}
const interval = setInterval(updateCountdown, 1000);
console.log(interval)
