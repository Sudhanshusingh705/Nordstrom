var dou=JSON.parse(localStorage.getItem("data"))
var abc=document.querySelector("#abc")
abc.append(dou[dou.length-1].emailAdd)
localStorage.setItem("umail",JSON.stringify(dou[dou.length-1].emailAdd))

document.querySelector("#crAcc").addEventListener("click",crAcc)
var arr2=JSON.parse(localStorage.getItem("res"))||[];
function crAcc(){
var firstname=document.querySelector("#firstname").value;
var lastname=document.querySelector("#lastname").value;
var creatpassword=document.querySelector("#creatpassword").value;

var obj2={
    Fn:firstname,
    Ln:lastname,
    CP:creatpassword,
   pmail:dou[dou.length-1].emailAdd
}
console.log(obj2)
arr2.push(obj2)
localStorage.setItem("res",JSON.stringify(arr2))

if(firstname!="" && lastname!="" && creatpassword!="")
{
window.location.href="welcome_page.html";
}

else
{
alert("Enter your Detailes and creat password")

}
}
