const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); 

app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req,res) =>{

    res.send('Hello Myfriend');
})

app.listen(port, ()=>{
    console.log("Listening on port %d", port);
})