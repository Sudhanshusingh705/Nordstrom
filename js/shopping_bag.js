obj={}; //this object for calcuation of total price
objQty={}


var bagc=JSON.parse(localStorage.getItem("bag")) 
console.log(bagc)


document.querySelector("#TotalItem").textContent=bagc.length

function displaycontent(bagc){

bagc.map(function(elem,index){
    var maindiv=document.createElement("div")
    maindiv.className="maindiv";
    var imgdiv=document.createElement("div")
    imgdiv.className="imgdiv";
    var contentdiv=document.createElement("div");
    contentdiv.className="contentdiv"
    var qtydiv=document.createElement("div")
    qtydiv.className="qtydiv"
    var pricediv=document.createElement("div")
    pricediv.className="pricediv"            //all divs created


    var img=document.createElement("img")
    img.setAttribute("src",elem.image)
    imgdiv.append(img)                       //img added

    //content box start  
            //namedetails
    var namedetail=document.createElement("div")
    namedetail.className="namedetaildiv"
    var arrival=document.createElement("h3")
    arrival.textContent="Arrives before Christmas"
    
    var brandname=document.createElement("p")
    brandname.textContent=elem.brand
    
    var prodname=document.createElement("p")
    prodname.innerHTML=elem.name
    
    namedetail.append(arrival,brandname,prodname)
              //namedetaails end

              //sizedetails 
    var sizediv=document.createElement("div")
    sizediv.className="sizediv"

    var prodsize=document.createElement("p")
    prodsize.textContent="Size: "+elem.size
    
    var prodcolor=document.createElement("p")
    prodcolor.innerHTML="Color: "+elem.color

    var itemno=document.createElement("p")
    itemno.innerHTML="Item: 5923178"
    
    sizediv.append(prodsize,prodcolor,itemno)
    

               //sizedetails end
                //delhivery details
    var delhiverydiv=document.createElement("div")
    delhiverydiv.id="helldiv"
    delhiverydetails=document.createElement("p")
    var h3=document.createElement("h3")
    h3.textContent="Delivery"
    delhiverydetails.textContent="International orders usually arrive within 5-13 business days. We'll give you delivery dates in checkout."
    delhiverydetails.id="hell"
    delhiverydiv.append(h3,delhiverydetails)

    
               // delhvery end

               //remove button
    var buttondiv=document.createElement("div")  
    buttondiv.className="buttondiv"         
    var buttonR=document.createElement("button")     
    buttonR.textContent="Remove"   
    
    buttondiv.append(buttonR)
             //button done
    //removing item from bag ///////////////////////////////////////////////////////////////
   




    contentdiv.append(namedetail,sizediv,delhiverydiv,buttondiv)
    
    //content box end
    var quantity=document.createElement("span")
    quantity.textContent="Qty"


    //Create array of options to be added
    var array = [1,2,3,4,5,6,7,8,9,10];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "mySelect";
    qtydiv.append(quantity,selectList);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
    selectList.addEventListener("change",function(){
        
        pricediv.textContent=""
        console.log(selectList.value)
        price.textContent=Math.floor(elem.price*selectList.value)
       
        var priceEachdiv=document.createElement("div")
        var priceEach=document.createElement("span")

        var Each=document.createElement("span")
        Each.textContent="(each"
        Each.style.marginRight="5px"
        
        var Eachend=document.createElement("span")
        Eachend.textContent=")"
        
        priceEachdiv.append(Each,priceEach,Eachend)

        priceEach.textContent=Math.floor(elem.price)
        pricediv.append(rupees,price,priceEachdiv)

        objQty[index]=selectList.value //////////////////////qtyobj
        console.log(objQty,"gsgajgajg")
        localStorage.setItem("qtyobj",JSON.stringify(objQty))

        obj[index]=elem.price*selectList.value
        console.log(obj)
        var addition=0
        for(i in obj){
            addition+=obj[i]
        }
        console.log(addition)
        localStorage.setItem("addition",Math.floor(addition))
        document.querySelector("#subtotal>p").textContent="Rs "+Math.floor(addition)

    })
    //quantity dropdown option
    obj[index]=elem.price*selectList.value
    objQty[index]=selectList.value

    buttonR.addEventListener("click",function(){///////////////////////////////////////////////////////////
        document.querySelector("#product").textContent=""
        
        
        bagc.splice(index,1)
        console.log("here",index)
        displaycontent(bagc)
        document.querySelector("#TotalItem").textContent=bagc.length

        obj[index]=elem.price*selectList.value
        
        
        
        console.log("addition",addition)
        addition=0
        for(i in obj){
            addition+=obj[i]
        }
        addition-=elem.price*selectList.value
    

        
        localStorage.setItem("addition",Math.floor(addition))
        document.querySelector("#subtotal>p").textContent="Rs "+Math.floor(addition)
        localStorage.setItem("bag",JSON.stringify(bagc))

    })

    
    

    
    var price=document.createElement("span")
    var rupees=document.createElement("span")
    rupees.textContent="Rs"
    
    price.textContent=Math.floor(elem.price)
    pricediv.append(rupees,price)                    //price added


    var hr=document.createElement("hr")
    

    
    maindiv.append(imgdiv,contentdiv,qtydiv,pricediv)
    
    document.querySelector("#product").append(maindiv,hr)
})
}

displaycontent(bagc)

//total price calulation
console.log(obj)
var addition=0
for(i in obj){
    addition+=obj[i]
}
localStorage.setItem("addition",Math.floor(addition))
console.log(objQty,"gsgajgajg")


document.querySelector("#subtotal>p").textContent="Rs "+Math.floor(addition)

document.querySelector("#gotopay").addEventListener("click",function(){
    window.location.href="checkout.html"
})