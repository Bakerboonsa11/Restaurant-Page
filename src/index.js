import myimage1 from './espreso.jpg'
import myimage2 from './captino.jpg'
import myimage3 from './latte.jpg'
import myimage4 from './americano.jpg'
import myimage5 from './machiato.jpg'
import myimage6 from './mocho.jpg'
import myimage7 from './espreso.jpg'
import myimage10 from './flatwhite.jpg'
import myimage8 from './turkish.jpg'
import myimage9 from './Frappuccino:.jpg'
import './style.css';
import { container_creater ,element_creater, container} from './menu.js';
import { about_create_content,delete_btn, remove_btn} from './about.js';
let  body;
let header;
let  nav
 let btn_home
 let btn_about
 let btn_menu
 let btn_contact
 let div_container
 

function global_fun(){
     body = document.querySelector("body");
    header = document.createElement("header");
    
    body.appendChild(header)
    header.classList.add("header")
    nav= document.createElement("nav");
    nav.classList.add("nav")
    header.appendChild(nav)
   btn_home = document.createElement("button");
    btn_home.classList.add("btn")
    btn_home.classList.add("btn_home")
    btn_home.textContent="Home"
    nav.appendChild(btn_home)
   btn_menu = document.createElement("button");
    btn_menu.classList.add("btn")
    btn_menu.classList.add("btn_menu")
    btn_menu.textContent= "Menu"
    nav.appendChild(btn_menu)
   btn_about = document.createElement("button");
    btn_about.classList.add("btn")
    btn_about.classList.add("btn_about")
    nav.appendChild(btn_about)
    btn_about.textContent= "About"

    btn_contact = document.createElement("button");
    btn_contact.classList.add("btn")
    btn_contact.classList.add("btn_contact")
    btn_contact.textContent= "Menu"
    nav.appendChild(btn_menu)

     div_container = document.createElement("div");
    body.appendChild(div_container)
    div_container.classList.add("div_container");
}
global_fun()

// create div here 


 const menu = document.querySelector(".btn_menu")
 const home = document.querySelector(".btn_home")
 const about = document.querySelector(".btn_about")
//
menu.addEventListener("click" ,function(){
  
   body.removeChild(div_container);
   container_creater("div","clas");
   element_creater("div","Espresso:",myimage1)
   element_creater("div","Cappuccino:",myimage2)
   element_creater("div","Latte:",myimage3)
   element_creater("div","Americano:",myimage4)
   element_creater("div","Macchiato:",myimage5)
   element_creater("div","Mocha:",myimage6)
   element_creater("div","Flat White:",myimage7)
   element_creater("div","Turkish ",myimage8)
   element_creater("div","Frappuccino:",myimage9)


})
home.addEventListener("click",function(){
    window.location.reload();
})
about.addEventListener("click",function(){
     
    about_create_content()
})


