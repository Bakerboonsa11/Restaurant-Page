let  body
let  container
let  each_element_coniner
 export function container_creater( tag, clas){
    
    body = document.querySelector("body")
    container = document.createElement(tag)
    container.classList.add(clas)

    body.appendChild(container)

}
 export function element_creater(tag, heading,paragraph){
   
     each_element_coniner = document.createElement(tag)
     each_element_coniner.classList.add("each_element")
 
     container.appendChild(each_element_coniner)
     container.appendChild(each_element_coniner)
     content_creater(heading,paragraph)
}
export function content_creater(headding ,paragraph){
  const header = document.createElement("h1")
  const paragraph = document.createElement("p")

}