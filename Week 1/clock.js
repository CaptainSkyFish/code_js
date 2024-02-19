function showClock(){
    console.clear();
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
  
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    console.log(timeString);
    setTimeout(showClock, 1000);
  }
  
  showClock();