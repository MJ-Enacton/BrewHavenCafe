const menuData = [
  {
    category: "Hot Coffee",
    items: [
      { name: "Espresso", desc: "Rich and bold espresso shot with intense aroma.", price: "₹110", img: "./assets/coffee1.jpg" },
      { name: "Cappuccino", desc: "Creamy milk foam with rich espresso blend.", price: "₹160", img: "./assets/coffee1.jpg" }
    ]
  },
  {
    category: "Cold Coffee",
    items: [
      { name: "Classic Cold Coffee", desc: "Chilled coffee blended with milk and ice cream.", price: "₹180", img: "./assets/cold_coffee.jpg" },
      { name: "Chocolate Frappe", desc: "Chocolate blended frappe topped with whipped cream.", price: "₹220", img: "./assets/cold_coffee.jpg" }
    ]
  },
  {
    category: "Signature Specials",
    items: [
      { name: "Hazelnut Latte", desc: "Smooth latte infused with roasted hazelnut flavor.", price: "₹240", img: "./assets/Coffee-header.png" },
      { name: "Mocha Delight", desc: "Espresso mixed with dark chocolate and steamed milk.", price: "₹260", img: "./assets/Coffee-header.png" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Brownie", desc: "Warm fudgy brownie served with chocolate drizzle.", price: "₹140", img: "./assets/coffee1.jpg" },
      { name: "Blueberry Cheesecake", desc: "Creamy cheesecake topped with blueberry sauce.", price: "₹210", img: "./assets/coffee1.jpg" }
    ]
  }
];

const galleryGridData = [
  "./assets/gettyimages-1467739359-612x612.jpg",
  "./assets/a-black-and-white-sign-that-says-cafe-photo.jpg",
  "./assets/Ambiance.jpg",
  "./assets/cafe-interior-design.jpg",
  "./assets/Coffee-food.jpg",
  "./assets/coffee_shop.jpg"
];

const faqData = [
  {
    question: "What is the difference between an espresso, a latte, and a cappuccino?",
    answer: "An espresso is a concentrated shot of pure coffee. A latte has a high ratio of steamed milk to espresso, while a cappuccino features equal parts espresso, steamed milk, and airy milk foam."
  },
  {
    question: "Do you sell whole beans for home brewing?",
    answer: "Yes, we sell our freshly roasted coffee beans in-store. Ask your barista for grind-size recommendations depending on your home brewing equipment."
  },
  {
    question: "Can I customize the sweetness of my coffee?",
    answer: "Absolutely. You can request half the amount of syrup, specify the number of pumps, or ask for entirely sugar-free syrup alternatives."
  },
  {
    question: "Where do your coffee beans come from?",
    answer: "We source our specialty-grade Arabica coffee beans directly from ethical farms in regions like Karnataka (India), Colombia, and Ethiopia."
  },
  {
    question: "Do you sell whole-bean coffee for home brewing?",
    answer: "Absolutely! We sell bags of our freshly roasted whole beans. If you have a preferred brewing method (e.g., French press, pour-over, espresso), our baristas can grin"
  }
];

function validate(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameErr = document.getElementById("name-err");
  const emailErr = document.getElementById("email-err");

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameErr.textContent = "Name cannot be empty.";
    nameErr.style.color = "var(--error-color)";
    nameInput.style.borderColor = "var(--error-color)";
    nameInput.style.borderWidth = "2px";
    nameInput.style.borderStyle = "solid";
    isValid = false;
  } else {
    nameErr.textContent = "";
    nameInput.style.borderColor = "";
  }

  if (emailInput.value.trim() === "") {
    emailErr.textContent = "Email cannot be empty.";
    emailErr.style.color = "var(--error-color)";
    emailInput.style.borderColor = "var(--error-color)";
    emailInput.style.borderWidth = "2px";
    emailInput.style.borderStyle = "solid";
    isValid = false;
  } else {
    emailErr.textContent = "";
    emailInput.style.borderColor = "";
  }

  if (messageInput.value.trim() === "") {
    messageInput.style.borderColor = "var(--error-color)";
    messageInput.style.borderWidth = "2px";
    messageInput.style.borderStyle = "solid";
    isValid = false;
  } else {
    messageInput.style.borderColor = "";
  }

  if (isValid) {
    alert("All fields filled! Form submitted.");
  }
}

// Carousel Logic
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slide.classList.remove("next-slide");
  });

  dots.forEach((dot) => {
    dot.classList.remove("dot-active");
  });

  if (slides.length > 0) {
    slides[index].classList.add("active");
    dots[index].classList.add("dot-active");

    let nextIndex = (index + 1) % slides.length;
    slides[nextIndex].classList.add("next-slide");
  }
}

if (slides.length > 0) {
  showSlide(index);
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 2000);
}

function setandshowindex(i) {
  index = i;
  showSlide(index);
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

function next() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

// Mobile Menu
const menuBtn = document.getElementById("link-btn");
const links = document.getElementById("links");

menuBtn.addEventListener("click", () => {
  links.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (
    !links.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    links.classList.remove("show");
  }
});

// Render Functions
function renderMenu() {
  const menuContainer = document.getElementById("menu-main-cont");
  menuContainer.innerHTML = "";
  menuData.forEach(cat => {
    const catDiv = document.createElement("div");
    catDiv.className = "menu-category";

    const title = document.createElement("h2");
    title.className = "category-title";
    title.textContent = cat.category;
    catDiv.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "category-grid";

    cat.items.forEach(item => {
      const itemHTML = `
        <div class="item-cont">
          <img class="item-img" src="${item.img}" alt="${item.name}" />
          <div class="content">
            <p class="item-name">${item.name}</p>
            <p class="item-desc">${item.desc}</p>
            <div class="bottom-row">
              <p class="price">${item.price}</p>
              <button class="order-btn">Order</button>
            </div>
          </div>
        </div>
      `;
      grid.insertAdjacentHTML('beforeend', itemHTML);
    });
    catDiv.appendChild(grid);
    menuContainer.appendChild(catDiv);
  });
}

function renderGallery() {
  const galContainer = document.getElementById("gal-grid");
  galContainer.innerHTML = "";
  galleryGridData.forEach((imgSrc, index) => {
    const imgHTML = `<img class="grid-imgs" src="${imgSrc}" data-index="${index}" />`;
    galContainer.insertAdjacentHTML('beforeend', imgHTML);
  });
}

function openLightbox(startIndex) {
  let currentIndex = startIndex;
  const totalCount = galleryGridData.length;

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";

  const container = document.createElement("div");
  container.className = "lightbox-container";

  const topRow = document.createElement("div");
  topRow.className = "lightbox-header";

  const counter = document.createElement("div");
  counter.className = "lightbox-counter";

  const closeBtn = document.createElement("span");
  closeBtn.innerHTML = "&times;";
  closeBtn.className = "lightbox-close";

  topRow.appendChild(counter);
  topRow.appendChild(closeBtn);
  container.appendChild(topRow);

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "lightbox-img-wrapper";

  const mainImg = document.createElement("img");
  mainImg.className = "lightbox-img";
  imgWrapper.appendChild(mainImg);
  container.appendChild(imgWrapper);

  const thumbsContainer = document.createElement("div");
  thumbsContainer.className = "lightbox-thumbnails";
  container.appendChild(thumbsContainer);

  lightbox.appendChild(container);
  document.body.appendChild(lightbox);

  function updateLightbox() {
    mainImg.src = galleryGridData[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${totalCount}`;

    const thumbnails = thumbsContainer.querySelectorAll(".lightbox-thumb");
    thumbnails.forEach((thumb, i) => {
      if (i === currentIndex) {
        thumb.classList.add("active-thumb");
      } else {
        thumb.classList.remove("active-thumb");
      }
    });
  }

  galleryGridData.forEach((imgSrc, i) => {
    const thumb = document.createElement("img");
    thumb.src = imgSrc;
    thumb.className = "lightbox-thumb";
    thumb.addEventListener("click", (e) => {
      e.stopPropagation();
      currentIndex = i;
      updateLightbox();
    });
    thumbsContainer.appendChild(thumb);
  });

  updateLightbox();

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    lightbox.remove();
  });

  lightbox.addEventListener("click", (e) => {
    if (!container.contains(e.target) || e.target === lightbox) {
      lightbox.remove();
    }
  });

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      lightbox.remove();
    } else if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % totalCount;
      updateLightbox();
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + totalCount) % totalCount;
      updateLightbox();
    }
  }
  document.addEventListener("keydown", handleKeyDown);

  const originalRemove = lightbox.remove;
  lightbox.remove = function () {
    document.removeEventListener("keydown", handleKeyDown);
    originalRemove.call(lightbox);
  };
}

function renderFAQ() {
  const faqContainer = document.getElementById("faq-container");
  faqContainer.innerHTML = "";
  faqData.forEach(faq => {
    const faqHTML = `
      <div class="faq-item">
        <button class="faq-question">
          ${faq.question}
          <span class="icon">+</span>
        </button>
        <div class="faq-answer">
          <p>${faq.answer}</p>
        </div>
      </div>
    `;
    faqContainer.insertAdjacentHTML('beforeend', faqHTML);
  });
}

function attachDynamicEventListeners() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    button.addEventListener("click", () => {
      item.classList.toggle("active-faq");
    });
  });

  const gridImages = document.querySelectorAll(".grid-imgs");
  gridImages.forEach((img) => {
    img.addEventListener("click", () => {
      const startIndex = parseInt(img.getAttribute("data-index") || "0", 10);
      openLightbox(startIndex);
    });
  });

  const orderBtns = document.querySelectorAll(".order-btn");
  orderBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const itemCont = e.target.closest(".item-cont");
      const imgSrc = itemCont.querySelector(".item-img").src;
      const name = itemCont.querySelector(".item-name").textContent;
      const desc = itemCont.querySelector(".item-desc").textContent;
      const price = itemCont.querySelector(".price").textContent;

      const modal = document.createElement("div");
      modal.classList.add("order-modal");

      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <img src="${imgSrc}" alt="${name}" />
          <div class="modal-info">
            <h3>${name}</h3>
            <p>${desc}</p>
            <p class="modal-price">${price}</p>
            <button class="confirm-order-btn">Order Now</button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      modal.querySelector(".close-modal").addEventListener("click", () => {
        modal.remove();
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.remove();
        }
      });

      modal.querySelector(".confirm-order-btn").addEventListener("click", () => {
        alert("Order placed for " + name);
        modal.remove();
      });
    });
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderGallery();
  renderFAQ();
  attachDynamicEventListeners();
});
