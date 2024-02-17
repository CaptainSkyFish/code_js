const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`the sum is: ${sum(10)}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function sum(counter){
    var i = 0; var sum = 0;
    while(i <= counter){
        sum += i;
        i++;
    }
    return sum;
}