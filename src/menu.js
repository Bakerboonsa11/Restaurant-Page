 export function menu_creater(){
    const body = document.querySelector("body");
    const menu_container = document.createElement("div");
   body.appendChild(menu_container);
    menu_container.classList.add("menu_creater_box")
    const menu_heder = document.createElement("h1")
    menu_heder.textContent="OUR DELIVERIES"
   menu_heder.classList.add("menu_header")
    menu_container.appendChild(menu_heder)
    const iner_box_menu = document.createElement("div")
    iner_box_menu.classList.add("iner_box_menu")
    menu_container.appendChild(iner_box_menu)
  
      create_menu_content(iner_box_menu)
    
}
export function create_menu_content(container ){
    for(let i = 0;i<=10;i++){
        const img_container = document.createElement("div")
        img_container.classList.add("img_container");
        container.appendChild(img_container)
    }
       
}