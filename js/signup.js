
    document.querySelector("#next").addEventListener("click",next)
    var arr=JSON.parse(localStorage.getItem("data"))||[];
    function next(){
        var email=document.querySelector("#mail").value;
        var obj={
            emailAdd:email
        }
        
        arr.push(obj)
        localStorage.setItem("data",JSON.stringify(arr))
        if(email!=""){
        window.location.href="create_account.html";
    }
    else{
        alert("Enter your Email ID")
        
    }
}
