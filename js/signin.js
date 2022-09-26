document.querySelector("#sinin").addEventListener("click",SignIn)
var dou1=JSON.parse(localStorage.getItem("res"))
    function SignIn(){
        var email=document.querySelector("#input-box").value;
        var pass=document.querySelector("#input-pass").value;
console.log(dou1.length)
        for(var i=0;i<dou1.length;i++)
    {
        if(dou1[i].pmail==email && dou1[i].CP==pass && email!="" && pass!="")
        {
            window.location.href="index.html"
        }  
    }  
    }
    document.querySelector("#un").addEventListener("click",crAcc)
    function crAcc(){
        
        window.location.href="signup.html";
    }
    document.querySelector("#un1").addEventListener("click",Frpass)
    function Frpass(){
        
        window.location.href="forgot_password.html";
    }
    document.querySelector("#icon").addEventListener("click",close)
    function close(){
        
        window.location.href="index.html"
    }
