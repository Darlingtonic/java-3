const menu =[
 { id: 1,
    title: "Bread and egg sauce",
    category: "Breakfast",
    price: 10.99,
    img: "/menu images/bread and egg.png",
    description: `I love bread and egg sauce for breakfast`,
 },
 {
    id: 2,
    title: "Instant noodles",
    category: "Breakfast",
    price: 8.99,
    img: "menu images/instant noodles.png",
    description: `This breakfast meal is mind blowing. Please give me more`,   
 },
 {
    id: 3,
    title: "Moi Moi with Custard",
    category: "Breakfast",
    price: 7.99,
    img: "/menu images/moi and custard.png",
    description: `This is a favourite for breakfast in Nigeria`,
 },
 {
   id: 4,
    title: "Efo riro",
    category: "Lunch",
    price: 12.99,
    img: "/menu images/efo-riro-vegetable-soup-recipe-main-photo.webp",
    description:  `Favourite yoruba delicacy`,
         
 },
{
   id: 5,
    title: "Egusi soup",
    category: "Lunch",
    price: 11.99,
    img: "/menu images/egusi soup.jpg",
    description: `Delicious meal for everyone`, 
},
{
   id: 6,
    title: "Afang soup",
    category: "Lunch",
    price: 15.99,
    img: "/menu images/afang soup.jpg",
    description: `South South most important menu`,
},
{
   id: 7,
    title: "Porridge beans",
    category: "Dinner",
    price: 8.99,
    img: "/menu images/porridge beans.jpg",
    description: `Dinner delight`,
},
{
   id: 8,
   title: "Yam Porridge",
   category: "Dinner",
   price: 9.99,
   img: "/menu images/porridge yam.jpg",
   description:  `Favourites of foodies`,  
},
{
   id: 9,
   title: "Jollof rice",
   category: "Dinner",
   price: 10.99,
   img: "/menu images/jollof rice.jpg",
   description:`Tasty meal for everyone`,  
},
{
   id: 10,
   title: "Suya",
   category: "Snacks",
   price: 5.99,
   img: "/menu images/suya.jpg",
   description: `Fan favourites`, 
},
];


// Function to generate menu items HTML string
 const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll('.filter-btn');

// load items
window.addEventListener( "DOMContentLoaded", function(){
 displayMenuItems(menu);
});
// filter items
filterBtns.forEach(function(btn){
btn.addEventListener( "click" , function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category === category){
        return menuItem;
        };
    });
    if(category === 'All' ) {
        displayMenuItems(menu)
    } else{
        displayMenuItems(menuCategory);
    };
});
});
// Filtering the menu by categories
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){ 

        return `<article class="menu-item border border-1 col-5 row ">
        <img src="${item.img}" class ="photo col-6" alt=${item.title} />
        <div class="item-info col">
            <header class="d-flex justify-content-between">
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.description}
            </p>
        </div>
        </article>`;
        });
        displayMenu = displayMenu.join("");
        sectionCenter.innerHTML = displayMenu;
};