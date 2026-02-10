
// const  express = require('express');

// const app = express();

// app.use(express.json());

// app.get('/',(res,req)=>{
//     res.send('api chal rhi hai')
  
// })

// app.get('/user',(res,req)=>{
//     res.json({
//         name:'aarti',
//         role:'developer'
//     })
// })

// app.listen(3000,()=>{console.log('Server runing on port 3000')})

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/user',require('./routes/userRoute'))
app.use('/api/class',require('./routes/class.routes'))
app.use('/api/mocktest',require('./routes/mocktest.routes'))
app.use('/api/pdf',require('./routes/pdf.routes'))
app.use('/api/notes',require('./routes/notes.routes'))
app.use('/api/video',require('./routes/video.routes'))

app.get('/',(req,res)=>{
    res.send('server runing')
})

app.listen(process.env.PORT,()=>{
    console.log('Server started on port',process.env.PORT)
})

