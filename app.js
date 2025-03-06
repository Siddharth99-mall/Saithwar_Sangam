let express=require("express");
let app =express();
let port =3000;

app.listen(port,(req,res)=>{
     console.log("Request recieved");
});
let button=document.createElement("button");
let body=document.querySelector("body");
button.innerText="Male SignIn";
body.append(button);
app.get("/",(req,res)=>{
    res.send("Hello");
});
app.get("/maleSignin",(req,res)=>{
    res.send("Male Sign in form");
});
app.get("/femaleSignin",(req,res)=>{
    res.send("Female Sign in form");
});