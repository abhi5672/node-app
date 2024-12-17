const express = require(`express`)

const app = express()


app.get(`/`,(req,res)=>{
    res.send(`This is node app version 1.1`)
})


app.listen(4000,`0.0.0.0`,()=>{
    console.log(`server started at 4000`);
    
})