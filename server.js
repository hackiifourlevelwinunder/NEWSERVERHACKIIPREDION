
const express = require('express');
const path = require('path');
const crypto = require('crypto');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

function getDigit(seedStr){
  const hash = crypto.createHash('sha256').update(seedStr).digest('hex');
  return parseInt(hash.slice(0,2),16)%10;
}

app.get('/result',(req,res)=>{
  const now = new Date();
  const minuteStr = now.getUTCFullYear()+"-"+(now.getUTCMonth()+1)+"-"+now.getUTCDate()+"-"+now.getUTCHours()+"-"+now.getUTCMinutes();
  const digit = getDigit(minuteStr);
  res.json({digit});
});

app.listen(3000,()=>console.log("Server running on 3000"));
