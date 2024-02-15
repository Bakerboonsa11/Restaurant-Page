import './style.css';
import {menu_creater} from './menu.js';
let  body;
let header;
let  nav
 let btn_home
 let btn_about
 let btn_menu
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
     div_container = document.createElement("div");
    body.appendChild(div_container)
    div_container.classList.add("div_container");
}
global_fun()

// create div here 


 const menu = document.querySelector(".btn_menu")
 const home = document.querySelector(".btn_home")
//
menu.addEventListener("click" ,function(){
  
   body.removeChild(div_container);
    menu_creater()

})
home.addEventListener("click",function(){
    window.location.reload();
})