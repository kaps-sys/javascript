// primitive

// 7 types:string,int,null,object,undefined,symbol,bigint


const score=100
const isloggedin=true
const temp=null
let x
const id=Symbol('123')
const newid=Symbol('123')
//console.log(id==newid)

// non primitive(reference )
// array,objects,function

let fruits=['apple','mango']
let obj={
    name:'kapil',
    age:22
}
const myfunction=function(){
    console.log('helo word')
}

//datatype return type
//int number
//boolean true or false
//bigint undefined
//null object
//string string
//undefined undeined 
//symbol symbl
//object object
//array obj


//console.log(typeof fruits)

//js is dynamically typed language bcz datatype is automatically assigned at compilation or execution of  code 

//###########################################

//Stack(primitive),Heap(non primitive)
let myname='kapil gehlot'
newname=myname
newname='ram'
//console.log(newname)
//console.log(newname)
//in stack copy of variable value is stored in an another variable

let user1={
    name:'kapil',
    id:101
}
let user2=user1
user2.name='ram';
console.log(user1)
console.log(user2)
//in heap sort 2nd variable takes reference of 1st variable and only value changes in 1st variable
