

const  express = require('express');

const app = express();

app.use(express.json());

app.get('/',(res,req)=>{
    res.send('api chal rhi hai')
  
})

app.get('/user',(res,req)=>{
    res.json({
        name:'aarti',
        role:'developer'
    })
})



app.listen(3000,()=>{console.log('Server runing on port 3000')})
