var dou1=JSON.parse(localStorage.getItem("res"))
console.log(dou1)
var abc=document.querySelector("#name")
abc.append(dou1[dou1.length-1].Fn)
document.querySelector("#shopnow").addEventListener("click",shownow)
function shownow(){
   window.location.href="manish.html";
}
document.querySelector("button").addEventListener("click",next)
function next(){
   window.location.href="manish.html";

}