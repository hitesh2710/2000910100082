const express=require('express')
const axios=require('axios')
const app=express();

app.get('/')
app.listen(3000);

let detail;
app.post('/makingReq',async function(req,res){
    const response = await axios.post('http://20.244.56.144/train/register', req.body);
    const responseData = response.data;
    detail=responseData;
    console.log(responseData);
    res.send(detail);

})
console.log(detail.companyName)