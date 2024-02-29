
let todos = [
    {
        title:"hyper text",
        status: false
    },
    {
        title:"react",
        status: false
    },
    {
        title:"express",
        status: false
    },
]

/* todo stautents.. shcholorship ... */

if( todos[0].status ){  
    console.log(`${todos[0].title}  is compolted`)
}else{
    console.log(`${todos[0].title}  is pending`)
}


if( todos[1].status ){  
    console.log(`${todos[1].title}  is compolted`)
}else{
    console.log(`${todos[1].title}  is pending`)
}

if( todos[2].status ){  
    console.log(`${todos[2].title}  is compolted`)
}else{
    console.log(`${todos[2].title}  is pending`)
}

function checkTodoStatus(){

}



let students = [
    {
        name:"ram",
        hasPaid:false,
        hasScholorship:true,
    },
    {
        name:"hari",
        hasPaid:false,
        hasScholorship:false,
    },
    {
        name:"shyam",
        hasPaid:true,
        hasScholorship:false,
    },
]

/*  ram can give exam  */
/*  hari cannot give exam  */
/*  shyam can give exam  */




/* 
    conditional statements
    if - else

    research: ternary operator
    research: OR operator

*/

let willRain = true
let hasProbablity = true
let isVerySunny = true


if( willRain ){
    console.log("take umbrealla");
}else if( hasProbablity ) {
    console.log("you may need take umbrealla");
}else if( isVerySunny  ){
    console.log("you may need take umbrealla");
}else {
    console.log("no need to take umbrealla");
}



if(willRain){
    console.log("take umbrealla");
}else{
    if(hasProbablity){
        console.log("you may need take umbrealla");
    }
    else{
        if(isVerySunny){
            console.log("you may need take umbrealla");
        }else{
            console.log("NO need take umbrealla");
        }
    }
}

