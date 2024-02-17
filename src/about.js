let  About_container
let  body
let remove_btns 
const text =`Welcome to [Your Restaurant Name]! We are a cozy and vibrant restaurant located in the heart of [Your City]. Our passion is to serve delicious and mouth-watering dishes that will tantalize your taste buds and leave you wanting more.

At [Your Restaurant Name], we take pride in using only the freshest ingredients sourced locally to create our culinary masterpieces. Our talented team of chefs combines traditional recipes with innovative techniques to bring you a unique dining experience that celebrates both classic and contemporary flavors.

Whether you're looking for a romantic dinner for two, a family gathering, or a special occasion, our warm and inviting atmosphere provides the perfect backdrop for any dining experience. Our friendly and attentive staff is dedicated to ensuring that your visit is exceptional from start to finish.

Indulge in our diverse menu, featuring a wide range of culinary delights. From savory appetizers to delectable main courses and tempting desserts, there's something to satisfy every palate. Pair your meal with a selection from our carefully curated wine list or enjoy one of our handcrafted cocktails expertly prepared by our skilled mixologists.

At [Your Restaurant Name], we believe that dining is not just about the food; it's about creating memories. We strive to make every visit a memorable one, providing exceptional service and a culinary journey that will leave you with a smile.

Join us at [Your Restaurant Name] and experience the perfect blend of flavors, ambiance, and hospitality. We look forward to welcoming you and making your dining experience truly unforgettable.

Bon appétit!`
export function about_create_content(){
   
    body= document.querySelector("body")
     About_container = document.createElement("div")
    About_container.classList.add("about_container")
    body.appendChild(About_container)
    remove_btn(About_container)
}
export function remove_btn(about_container){
    remove_btns= document.createElement("span")
    remove_btns.textContent="X"
    remove_btns.classList.add("remove_btn")
    about_container.appendChild(remove_btns)
     const my_text=document.createElement("p")
     my_text.textContent=text
    about_container.appendChild(my_text)
    
   
    remove_btns.addEventListener("click", () => delete_btn(about_container));
  
}
export function delete_btn(about_container){
     about_container.style.zIndex = '1000000000';
      about_container.remove();

}