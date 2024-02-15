
import icon1 from './food1.jpg';
import icon2 from './food2.jpg';
import icon3 from './food3.jpg';
import icon4 from './food4.jpg';
import icon5 from './food5.jpg';
import icon6 from './food6.jpg';
import icon7 from './food7.jpg';
import icon8 from './food8.jpg';
const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];
 export let  menu_container 
// Rest of your code...
export function menu_creater(){
    const body = document.querySelector("body");
   menu_container = document.createElement("div");
   body.appendChild(menu_container);
    menu_container.classList.add("menu_creater_box")
    const menu_heder = document.createElement("h1")
    menu_heder.textContent="OUR DELIVERIES"
   menu_heder.classList.add("menu_header")
    menu_container.appendChild(menu_heder)
    const iner_box_menu = document.createElement("div")
    iner_box_menu.classList.add("iner_box_menu")
    menu_container.appendChild(iner_box_menu)
  
    create_menu_content(iner_box_menu )
    
}
export function create_menu_content(container ){
    for(let i = 1;i<=8;i++){
     
      
        const img_container = document.createElement("div")
        img_container.classList.add("img_container");
        container.appendChild(img_container)
        // const myIcon = document.createElement("img")
        // myIcon.classList.add("img")
        // myIcon.src = icons[i]
        // container.appendChild(myIcon)
      
    }
       
}