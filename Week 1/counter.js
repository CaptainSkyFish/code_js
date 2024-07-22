var i = 1;
var limit = 10;
const counter = () => {
        console.clear();
        console.log(i++);
}

const printCounter = setInterval(counter, 1000);

setTimeout(() => {
    clearInterval(printCounter);
}, limit*1000+1000);


// counter without setInterval

function printCounter2(){
    console.clear();
    console.log(count++);
    if(count <= limit){
        setTimeout(printCounter, 1000);
    }
}

printCounter2();