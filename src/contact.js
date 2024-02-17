const symbols = [
    "\u26D4\ufe0f\ufe0e", // Phone symbol
    "\uD83C\uDFE2", // Address symbol
    "\uD83D\uDD17", // Website symbol
    "📧",// Email symbol
   
  ];
  const contacts =[
    "+251-9-49-30-38-25",
    "Ethio-Haramay",
    "press coffee ",
    "Bakerboonsa11@gmail.com"
  ]
  let counter = 0
 export function create_contact(logo,backgroundc){
    const menu =document.querySelector(".btn_menu");
  
    menu.disabled= true ;
   
    const about =document.querySelector(".btn_about").disabled= true 
  
  
    const body = document.querySelector("body")
    const contct_diplayer = document.createElement("div")
    contct_diplayer.classList.add("cantact_container")
    body.appendChild(contct_diplayer)
     header_and_logo_contact(contct_diplayer,logo,backgroundc)
     info_creator(contct_diplayer)
     info_creator(contct_diplayer)
     info_creator(contct_diplayer)
     info_creator(contct_diplayer)
     cancle_contact(contct_diplayer)
}
function header_and_logo_contact(contct_diplayer ,logoUrl,backgroundc){
    const body = document.querySelector("body")
    const logo = new Image();
    logo.src=logoUrl
    contct_diplayer.appendChild(logo); 
    logo.classList.add("logo")
    const smal_head=document.createElement("h3")
    smal_head.classList.add("small_head")
    smal_head.textContent= " always Prefer us "
    contct_diplayer.appendChild(smal_head)
     const big_head= document.createElement("h1")
     big_head.classList.add("big_head")
    big_head.textContent= " CONTACT US "
    contct_diplayer.appendChild(big_head)
   

 
}
function info_creator( contct_diplayer ){
   const flex_container = document.createElement("div");
   flex_container.classList.add("flex_container")
   contct_diplayer.appendChild(flex_container)
   const logo_div = document.createElement("div")
   logo_div.textContent=symbols[counter]
   logo_div.classList.add("logo_div")
   flex_container.appendChild(logo_div)
   const text_container_div = document.createElement("div")
   text_container_div.classList.add("text_container")
   flex_container.appendChild(text_container_div)
   text_container_div.textContent=contacts[counter]
   counter++
}
function cancle_contact(contct_diplayer) {
  const cancel = document.createElement("button");
  cancel.classList.add("cancel");
  cancel.textContent = "X";
  contct_diplayer.appendChild(cancel);
  cancel.addEventListener("click",function(){
    add_event_to_cancel()
  })
}
function add_event_to_cancel(){
 
  const container = document.querySelector(".cantact_container")
  container.remove()
  const menu =document.querySelector(".btn_menu");
  
  menu.disabled= false ;
 
  const about =document.querySelector(".btn_about").disabled= false 
}