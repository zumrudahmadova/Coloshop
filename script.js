//open and close menu
const openMenu= document.querySelector('.open-nav-menu')
const closeMenu =document.querySelector('.close-nav-menu')
const hamburgerMenu =document.querySelector('.hamburgermenu')

openMenu.addEventListener('click',function(){
   hamburgerMenu.classList.remove('hidden')
})
closeMenu.addEventListener('click',function(){
    hamburgerMenu.classList.add('hidden')
})
//accordion js
let acc = document.getElementsByClassName("accordion-box");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//product filter gallery
const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
     filterContainer.querySelector(".active").classList.remove("active");
     event.target.classList.add("active");
     const filterValue = event.target.getAttribute("data-filter");
     galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
      }
      else{
        item.classList.remove("show");
        item.classList.add("hide");
      }
     });
  }
});

