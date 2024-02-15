 export function menu_creater(){
    const body = document.querySelector("body");
    const menu_container = document.createElement("div");
   body.appendChild(menu_container);
    menu_container.classList.add("menu_creater_box")


}