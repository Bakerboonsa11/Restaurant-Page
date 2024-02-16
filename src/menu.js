let  body
let  container
let  each_element_coniner
const dolar = ["1$","3$","5$","6$","4.4$","5.3%","2.4$","1.3$","9$"]
let counter = 0
 export function container_creater( tag, clas){
    
    body = document.querySelector("body")
    container = document.createElement(tag)
    container.classList.add(clas)

    body.appendChild(container)

}
 export function element_creater(tag, heading,img){
   
     each_element_coniner = document.createElement(tag)
     each_element_coniner.classList.add("each_element")
 
     container.appendChild(each_element_coniner)
     container.appendChild(each_element_coniner)
     content_creater(heading,img)
}
export function content_creater(headding ,img){
  const header = document.createElement("span")
  header.textContent=headding;
  header.classList.add("header_of_elemnt")
  each_element_coniner.appendChild(header)
  const myimg = new Image()
  myimg.src=img
  myimg.classList.add("each_img")
  each_element_coniner.appendChild(myimg)
   button_creator()
}
function button_creator (){
  const btn = document.createElement("button")
  btn.textContent= `Price:${dolar[counter]}`
  each_element_coniner.appendChild(btn)
  btn.classList.add("each_btn")
  counter++
}