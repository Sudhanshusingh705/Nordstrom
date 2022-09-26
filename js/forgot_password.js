document.querySelector("button").addEventListener("click",PW)
var dou1=JSON.parse(localStorage.getItem("res"))
function PW(){
    var email=document.querySelector("#email").value;
    for(var i=0;i<dou1.length;i++)
    {
        if(dou1[i].pmail===email&&email!="")
        {
            alert(dou1[i].CP)
        }
      
    }
   
   
}