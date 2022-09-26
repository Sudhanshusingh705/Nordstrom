document.querySelector(".continue").addEventListener("click",hide)
function hide(){
   
    //getting name
   
   

    if(document.querySelector(".bottomvar>input").value==""){
        alert("Please Enter All Data")
    }
    else{
        document.querySelector(".bottomvar").style.display="none";
        document.querySelector(".continue").style.display="none";
        document.querySelector(".topfixed>button").style.background="white"
        document.querySelector(".topfixed>button").style.color="black"
        document.querySelector(".deliveryMain").style.display="block"
        var name=document.querySelector("#Fname").value+" "+document.querySelector("#Lname").value
        console.log(name)
        document.querySelector("#del_name").textContent=name

        var add=document.querySelector("#Address").value
        document.querySelector("#del_add").textContent=add

        var city=document.querySelector("#City").value+" "+document.querySelector("#Region").value+" "+document.querySelector("#PC").value
        document.querySelector("#del_city").textContent=city

        var country=document.querySelector("#Location").value
        document.querySelector("#del_country").textContent=country

        document.querySelector(".paymentHidden").style.display="block"
   
    }
}

var totalbefore=localStorage.getItem("addition")
console.log(totalbefore)

document.querySelector("#itemtotal").textContent=totalbefore
document.querySelector("#TOT").textContent=totalbefore

document.querySelector("#promo").addEventListener("click",function(){
    if(document.querySelector("#promoid").value=="masai30"){
        document.querySelector("#itemtotal").textContent=Math.floor(totalbefore*0.7)
        document.querySelector("#TOT").textContent=Math.floor(totalbefore*0.7)
        
    }
    else{
        alert("Wrong code")
    }
    

})
document.querySelector("#saytq").addEventListener("click",function(){
    window.location.href="thank_you.html"
})
document.querySelector("#Porder").addEventListener("click",function(){
    if(document.querySelector("#card>input").value==""){
        alert("Please fill card details")
    }
    else{
        alert("card added succesfully")

    }

})
