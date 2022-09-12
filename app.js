const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "SUITS",
        price: 2599,
        Colors: [
            {
                code: "green",
                img: "./img/suit.jpg",
            },
            {
                code: "blue",
                img: "./img/suit2.jpg",
            },
        ],
    },
    {
        id: 2,
        title: "ETHNIC",
        price: 899,
        Colors: [
            {
                code: "brown",
                img: "./img/salwar3.jpg",
            },
        ],
    },
    {
        id: 3,
        title: "CASUAL",
        price: 1069,
        Colors: [
            {
                code: "blue",
                img: "./img/casualdress.jpg",
            },
        ],
    },
    {
        id: 4,
        title: "CHIC",
        price: 1069,
        Colors: [
            {
                code: "grey",
                img: "./img/flannel2.jpg",
            },
        ],
    },
    {
        id: 5,
        title: "JORDAN",
        price: 2039,
        Colors: [
            {
                code: "grey",
                img: "./img/jordan.png",
            },
        ],
    },
    {
        id: 6,
        title: "BLAZER",
        price: 799,
        Colors: [
            {
                code: "green",
                img: "./img/blazer.png",
            },
        ],
    },
    {
        id: 7,
        title: "DRESS",
        price: 1669,
        Colors: [
            {
                code: "yellow",
                img: "./img/dress.jpg",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", () => {
       wrapper.style.transform = `translateX(${-100 * index}vw)`;

       choosenProduct = products[index];

       currentProductTitle.textContent = choosenProduct.title;
       currentProductPrice.textContent = "$" + choosenProduct.price;
       currentProductImg.src = choosenProduct.colors[0].img;

       currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
    });
  });

  currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });

  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

  const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
