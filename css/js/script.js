const text = [
"Full Stack Developer",
"Laravel Developer",
"React Learner",
"Web Designer"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=text[i];

if(!isDeleting){
document.getElementById("typing").textContent=
current.substring(0,j++);
}else{
document.getElementById("typing").textContent=
current.substring(0,j--);
}

if(j===current.length+1){
isDeleting=true;
setTimeout(type,1000);
return;
}

if(j===0){
isDeleting=false;
i=(i+1)%text.length;
}

setTimeout(type,isDeleting?50:120);
}

type();