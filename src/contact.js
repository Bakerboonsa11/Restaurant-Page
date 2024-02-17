
 export function create_contact(logo,backgroundc){
    const menu =document.querySelector(".btn_menu");
  
    menu.disabled= true ;
   
    const about =document.querySelector(".btn_about").disabled= true 
  
  
    const body = document.querySelector("body")
    const contct_diplayer = document.createElement("div")
    contct_diplayer.classList.add("cantact_container")
    body.appendChild(contct_diplayer)
     header_and_logo_contact(contct_diplayer,logo,backgroundc)
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
function info_creator(){

}