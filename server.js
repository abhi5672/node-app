const express = require(`express`)

const app = express()


app.get(`/`,(req,res)=>{
    res.send(`This is node app`)
})


app.listen(4000,`0.0.0.0`,()=>{
    console.log(`server started at 4000`);
    
})