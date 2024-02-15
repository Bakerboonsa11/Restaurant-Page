import './style.css';
import {menu_creater} from './menu.js';


const body = document.querySelector("body");
const header = document.createElement("header");

body.appendChild(header)
header.classList.add("header")
const nav= document.createElement("nav");
nav.classList.add("nav")
header.appendChild(nav)
const btn_home = document.createElement("button");
btn_home.classList.add("btn")
btn_home.classList.add("btn_home")
btn_home.textContent="Home"
nav.appendChild(btn_home)
const btn_menu = document.createElement("button");
btn_menu.classList.add("btn")
btn_menu.classList.add("btn_menu")
btn_menu.textContent= "Menu"
nav.appendChild(btn_menu)
const btn_about = document.createElement("button");
btn_about.classList.add("btn")
btn_about.classList.add("btn_about")
nav.appendChild(btn_about)
btn_about.textContent= "About"

// create div here 
const div_container = document.createElement("div");
body.appendChild(div_container)
div_container.classList.add("div_container");

 const menu = document.querySelector(".btn_menu")
//
menu.addEventListener("click" ,function(){
   alert("im alerted")
    menu_creater()

})