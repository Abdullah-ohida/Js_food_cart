const menu = [
    {
        id: 1,
        title: 'rosted meat',
        category: 'breakfast',
        price: 20,
        img: "/img/img.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis accusantium accusamus cumque
        quae quidem quia, ratione officiis soluta quo.`
    },
    {
        id: 2,
        title: 'pork',
        category: 'breakfast',
        price: 20,
        img: "/img/img10.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis accusantium accusamus cumque
        quae quidem quia, ratione officiis soluta quo.`
    },
    {
        id: 3,
        title: 'chicken and chipes',
        category: 'lunch',
        price: 100,
        img: "/img/img7.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis accusantium accusamus cumque
        quae quidem quia, ratione officiis soluta quo.`
    },
    {
        id: 3,
        title: 'chicken salad',
        category: 'breakfast',
        price: 50,
        img: "/img/img1.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis accusantium accusamus cumque
        quae quidem quia, ratione officiis soluta quo.`
    },
    {
        id: 4,
        title: 'pancake',
        category: 'dinner',
        price: 80,
        img: "/img/img2.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis accusantium accusamus cumque
        quae quidem quia, ratione officiis soluta quo.`
    },
    {
        id: 5,
        title: 'dinner',
        category: '',
        price: 50,
        img: "/img/img3.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis accusantium accusamus cumque
        quae quidem quia, ratione officiis soluta quo.`
    },

    {
        id: 6,
        title: 'Rosted Pork',
        category: 'breakfast',
        price: 45.99,
        img: "/img/img4.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis accusantium accusamus cumque
        quae quidem quia, ratione officiis soluta quo.`
    },
    {
        id: 7,
        title: 'Cake',
        category: 'lunch',
        price: 10,
        img: "/img/img5.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis accusantium accusamus cumque
        quae quidem quia, ratione officiis soluta quo.`
    },
    
    {
        id: 8,
        title: 'hot dog',
        category: 'dinner',
        price: 15.67,
        img: "/img/img11.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis accusantium accusamus cumque
        quae quidem quia, ratione officiis soluta quo.`
    },
    {
        id: 9,
        title: 'Vegetable',
        category: 'breakfast',
        price: 30,
        img: "/img/img8.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis accusantium accusamus cumque
        quae quidem quia, ratione officiis soluta quo.`
    },
    
    
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
   displayMenuItems(menu)
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return ` <article class="menu-item">
        <div class="img">
            <img src=${item.img} alt=${item.title} class="photo">
        </div>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="para">${item.desc}</p>
        </div>
    </article>`
    })
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu;
}