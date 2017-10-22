var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  var resp = {
    "name":"shiva",
    "Answer":"get answer",
    "app":"100",
    "description":"cucumber http post",
    "Type":"get"
  }
  response.end(JSON.stringify(resp));
})

app.post('/',function(req,res){
  var param1=req.body.param1;
  var param2=req.body.param2;
  console.log("param1 = "+param1+", param2 is "+param2);
  var resp = {
    "name":"shiva",
    "answer":"post answer",
    "app":"100",
    "description":"cucumber http post",
    "type":"post"
  }
  if(param1){
    resp.answer = param1;
  }
  res.end(JSON.stringify(resp));
});

app.listen(port,function(){
  console.log("Started on PORT - "+ port);
})
