 let total = 0;
let count = 0;




function addTotal(a){
    const buttonValue = a.querySelector("p").textContent;
    const  text =a.querySelector("h1").textContent;
   
   
    count++
    const e = document.getElementById("elements");
    const pp = document.createElement("p");
    pp.innerHTML = count+" "+ text;
    e.appendChild(pp)
    total +=parseFloat(buttonValue);
   const totalvv =  document.getElementById("totalValue").innerText ="Total " + total.toFixed(2) + " TK"; 
   

 
   const make =  document.getElementById("make");
 
   
 
   
 
  
 

   if(total>0){
    make.disabled = false;
    make.style.color= 'red'
   }
  if(total>200){
    p.disabled = false;
    p.style.color = 'red'
  }


  

  const modalclose = document.getElementById("modalbutton");
  modalclose.addEventListener('click',function(){
    pp.innerHTML = '';
    dis.innerText = '';
  
    text.innerText = '';
 
    totalvv.innerText = ''


    totalpay.innerText = '';

     totalvv.innerText= ''


   
    document.getElementById("totalValue").textContent= '' 
  
 });
  

};

let  p =  document.getElementById("apply");
let  dis = document.getElementById("discount");
let  totalpay = document.getElementById("totalpay");


p.addEventListener('click',function(){

  let  input =  document.getElementById("inputid");
  let  inputvalue = input.value ;

  

  if(total>200 && inputvalue==='SELL200'){
    const discount = (total*20)/100
    dis.innerText ="Discount :" + discount + "TK";
    const pay = total - discount;
   totalpay.innerText = "Total pay " + pay + "TK"

   
  }






  
});