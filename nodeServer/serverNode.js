const express = require('express');
// const axios = require('axios');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api', (req, res) => {
  if(req.method=='POST'){
    res.send({'我是工区电脑':'端口是3000,方法是Post'})
  }else{
    res.send({'我是工区电脑':'端口是3000,方法是Get'})
  }
});



app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});