//console.log('Hellow World...!');
"use strict"
    //Variable declaration
//a=0; 
//var b=10;    //ES5 Scope specific
let c=10;    //ES6 Block specific
const e=10;  //fixed value

      //Array

/* let student=[1,3,4,'Rasel'];
console.log(student[1]); */ 

      // Function
 /*function sum(a,b)  //ES5 sintex
{
    return a+b;
} */

/* const sum=function (a,b){
    return a+b;
} */

/* const sum=(a,b)=>{                //arrow function ES6
    return a+b;
} */

// const sum=(a,b)=>a+b;   //For single statement
//console.log(sum(4,3)); 

//console.log(`this is test value:${c==="10" ? 'true':'false'} `); //backtick oparator
/*const student={
    id:1,
    name:'Rasel',
    dept:'CSE',
    getName:function(){
        return this.name;
    },
    getObj:function()
    {
        return{
            version:'1.0',
            getVersion:function()
            {
                return this.version;
            }
        }
    }
}
student.name='xyz'; //name change
//console.log(student.name);
//console.log(student.getName());
//console.log(student['dept']);
//console.log(student['getName']());//function calling

//console.log(student.getObj().getVersion());
console.log(student['getObj']()['getVersion']());

const student=()=>{
    return{
        id:1,
        name:'Rasel',
        dept:'CSE'
    }
}
const s1=student();
const s2=student();
const s3 =student();*/

/* let student=['Rasel','Mobarak','Nafis','Atanu'];
let numbers=[1,10,20,30,40]; */

/* let newarray=student.filter(function(std){
    return std[1]=='a';
}); */
//Another sentex
/* let newarray=student.filter((std)=>std[1]=='a');
console.log(newarray); */

//Join Method
/* let newarray=student.join('-');
console.log(newarray);
 */

//Map method
/* let newarray=student.map((value)=>{
    return value + "ABC";
});
console.log(newarray); */

/* let newarray=numbers.map((value)=>{
    return value+5;
});
let newarray1=newarray.filter((num)=>num > 20)
console.log(newarray1); */

//Object Destructuring
/* const student={id:1, name:'Rasel', email:'rasel@gmail.com'};
//let {id,name}=student;
let {id,name:myname}=student;
console.log(myname); */

//Concate (sprade oparetor)
/* const newarray=[...student, '|', ...numbers];
console.log(newarray); 
 */
/*const student=require('./student');
 student.myname="ABC";//name change
console.log(student.myname); */
//console.log(student());
/* const s1=student();
const s2=student();
console.log(s1.name);
 */


//Call back

/* const f1 = (sum) =>{
     //needs 10s time;
    console.log(`the value is:${sum}`);
}
const f2 = (f) =>{
    //needs 10s time;
    console.log("this is f2 function");
    let sum=10;
    f(sum);
}
f2(f1);
console.log('Another task') */
/* function setTimeout(f,time){
    if(time==3000){
        f();
    }
}  */
//console.log('before settimeout func...')
/* setTimeout(function(){
    console.log('after 3s....')
},3000);
//console.log('after settimeout func...')
setTimeout(function(){
    console.log('after 5s....')
},5000);
setTimeout(function(){
    console.log('after 2s....')
},2000);
setTimeout(function(){
    console.log('after 1s....')
},1000);
setTimeout(function(){
    console.log('after 4s....')
},4000); */

//Promise Basic
/* const p=new Promise((resolve,reject)=>{
    if(40+10==50)
    {
        resolve('task done');
    }
    else{
        reject('error....')
    }
});

p.then(msg=>{
    console.log(msg);
}).catch(error=>{
    console.log(error);
})
 */
/* function sum(a,b){
    return new Promise((resolve,reject)=>{
        if(a+b==50){
            setTimeout(()=>{
                resolve('done...');
            },3000)
           
        }else{
            reject('error...');
        }
    })
}
sum(30,20).then(msg=>{
    console.log(msg);
}).catch(err=>{
    console.log(err);
})
console.log('Another task') */


//async or await
/* function sum(a,b){
    return new Promise((resolve,reject)=>{
        if(a+b==50){
            setTimeout(()=>{
                resolve(a+b);
            },3000)
           
        }else{
            reject('error...');
        }
    })
}
async function processmytask(a,b){
    console.log('processing started....')
    try{
        const total= await sum(a,b);
        console.log(`My total value:${total}`);
    }catch{
        console.log('error.....')
    }
    
}
processmytask(30,20);
console.log('test this line'); */

//synchronous

/* function sum2(a,b){
    
        if(a+b==50){
            setTimeout(()=>{
                return a+b;
            },3000)
           
        }else{
            return 'error';
        }
}
function processmytask2(a,b){
    const total= sum2(a,b);
    console.log(`My total value:${total}`);
}
processmytask2(30,20);
console.log('test this line'); */

//Class
 class Student{
    constructor(id,name,email){
        this.id=id;
        this.name=name;
        this.email=email;
    }
    getName()
    {
        return this.name;
    }
}
 

const s1=new Student(1,'Rasel','rasel@gamil.com');
console.log(s1.name);
console.log(s1.getName());

 