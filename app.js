const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const app=express();
const port=3000;
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
