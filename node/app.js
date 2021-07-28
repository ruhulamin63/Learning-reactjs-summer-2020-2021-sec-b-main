// const id= require('./User');
// const path=require('path');
// const fs = require('fs');
// const http =require('http');
import path from 'path';
import fs from 'fs';
import http from 'http';
//import {User,id} from './User.js';//name export
import User from './User.js';//For single module
import Button from './Button.js';
import Index from './Index.js';
import UserList from './UserList.js';

//const u1=new User('Rasel','18-37990-2');


/* const add="c:/windows/sdsdf\\asdasd\\\asd/asd///asd/asd.js";
console.log(path.dirname(add));
console.log(path.extname(add));
console.log(path.normalize(add)); */
const users=[
    {id:1,name:'Rasel',dept:'CSE'},
    {id:2,name:'Alamin',dept:'SE'},
    {id:3,name:'Risa',dept:'EEE'}
]
const createOnClick=()=>{return `alert('this is create button')`};
const updateOnClick=()=>{return `alert('this is update button')`};


const server=http.createServer(function(req,res){
   // console.log(req.url);
    //console.log(req.method);
    if(req.url =='/style.css'){
        fs.createReadStream('style.css').pipe(res); 

    }
    if(req.url =='/home')
    {
        /* res.write(`<h1>Welcome, 
        ${Button('Create',createOnClick)} 
        ${Button('Update',updateOnClick)}</h1>`);
        res.end(); */
        //res.write(Index('home',Button('Create',createOnClick)));
        res.write(Index('home',UserList(users)));
        res.end();
    }
    if(req.url =='/login')
    {
        // res.writeHead(200,{'content-type':'text/html'});
        // res.write('<h1>Login page</h1>');
        // res.end();
        fs.createReadStream('login.html').pipe(res); 
    }
                    
});

server.listen(3000);
console.log('node server started at 3000');                