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

  const firstNameInput = document.getElementById("first_name");
  const lastNameInput = document.getElementById("last_name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const firstNameErr = document.getElementById("first_name-err");
  const lastNameErr = document.getElementById("last_name-err");
  const emailErr = document.getElementById("email-err");
  const subjectErr = document.getElementById("subject-err");

  let isValid = true;

  if (firstNameInput.value.trim() === "") {
    firstNameErr.textContent = "First Name cannot be empty.";
    firstNameErr.style.color = "var(--error-color)";
    firstNameInput.style.borderColor = "var(--error-color)";
    firstNameInput.style.borderWidth = "2px";
    firstNameInput.style.borderStyle = "solid";
    isValid = false;
  } else {
    firstNameErr.textContent = "";
    firstNameInput.style.borderColor = "";
  }

  if (lastNameInput.value.trim() === "") {
    lastNameErr.textContent = "Last Name cannot be empty.";
    lastNameErr.style.color = "var(--error-color)";
    lastNameInput.style.borderColor = "var(--error-color)";
    lastNameInput.style.borderWidth = "2px";
    lastNameInput.style.borderStyle = "solid";
    isValid = false;
  } else {
    lastNameErr.textContent = "";
    lastNameInput.style.borderColor = "";
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

  if (subjectInput.value.trim() === "") {
    subjectErr.textContent = "Subject cannot be empty.";
    subjectErr.style.color = "var(--error-color)";
    subjectInput.style.borderColor = "var(--error-color)";
    subjectInput.style.borderWidth = "2px";
    subjectInput.style.borderStyle = "solid";
    isValid = false;
  } else {
    subjectErr.textContent = "";
    subjectInput.style.borderColor = "";
  }

  if (isValid) {
    alert("All fields filled! Form submitted.");
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    subjectInput.value = "";
  }
}
const renderCarouselDots = () => {
  const dotsContainer = document.querySelector(".dots-container");

  const totalSlides =
    document.querySelector(".track").getElementsByTagName("img").length;

  for (let i = 0; i < totalSlides; i++) {
    const button = document.createElement("button");

    button.className = "dot ";
    if (i == 0) {
      button.className += "dot-active"
    }

    button.addEventListener("click", () => {
      index = i;
      updateSlider();
      restartAutoSlide();
    });

    dotsContainer.appendChild(button);
  }
};

// Carousel Logic
const track = document.querySelector(".track");
const slides = document.querySelectorAll(".track img");

let index = 0;

let startX = 0;
let currentX = 0;
let isDragging = false;

let autoSlide;

const slideWidth = () => {
  const slide = slides[0];
  const gap = track.offsetWidth * 0.02;
  return slide.offsetWidth + gap;
};

function updateSlider(animated = true) {
  track.style.transition = animated
    ? "transform .4s ease"
    : "none";

  track.style.transform = `translateX(-${index * slideWidth()}px)`;

  const dots = document.querySelectorAll(".dot");

  if (dots.length) {
    dots.forEach(dot => {
      dot.classList.remove("dot-active");
    });

    dots[index].classList.add("dot-active");
  }
}

function next() {
  index = (index + 1) % slides.length;
  updateSlider();
  restartAutoSlide();
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
  restartAutoSlide();
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    next();
  }, 5000);
}

function restartAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

track.addEventListener("pointerdown", (e) => {
  startX = e.clientX;
  isDragging = true;

  track.style.transition = "none";
});

window.addEventListener("pointermove", (e) => {
  if (!isDragging) return;

  currentX = e.clientX;
  const diff = currentX - startX;
  track.style.transform = `translateX(${-index * slideWidth() + diff}px)`;
});

window.addEventListener("pointerup", (e) => {
  if (!isDragging) return;

  isDragging = false;

  const diff = e.clientX - startX;

  if (diff < -100) {
    index = (index + 1) % slides.length;
  } else if (diff > 100) {
    index = (index - 1 + slides.length) % slides.length;
  }

  updateSlider();
  restartAutoSlide();
});

updateSlider(false);
startAutoSlide();

// Mobile Menu
const menuBtn = document.getElementById("link-btn");
const links = document.getElementById("links");

menuBtn.addEventListener("click", () => {
  links.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (
    links.contains(e.target) &&
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

function openLightbox(startIndex) {
  let currentIndex = startIndex;
  const totalCount = document.getElementById("gal-grid").getElementsByTagName("img").length;

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
  document.body.style.overflow = "hidden";

  function updateLightbox() {
    mainImg.src = document.getElementById("gal-grid").getElementsByTagName("img")[currentIndex].src;
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
  const gridImages = [...document.getElementById("gal-grid").getElementsByTagName("img")];

  gridImages.forEach((img, i) => {
    const thumb = document.createElement("img");
    thumb.src = img.src;
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
      document.body.style.overflow = "";
    }
  });

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      lightbox.remove();
      document.body.style.overflow = "";
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
    document.body.style.overflow = "";
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

  const galleryGrid = document.querySelector(".gal-grid");

  galleryGrid.addEventListener("click", (e) => {
    const img = e.target.closest(".grid-imgs");
    if (!img) return;
    const startIndex = parseInt(img.dataset.index || "0", 10);
    openLightbox(startIndex);
  });

  const menuCategory = document.querySelectorAll(".menu-category");

  menuCategory.forEach((menuCat) => {
    menuCat.addEventListener("click", (e) => {
      const item = e.target.closest(".item-cont");
      if (!item) return;
      modalDisplay(item);
    });
  });

  function modalDisplay(item) {
    const imgSrc = item.querySelector(".item-img").src;
    const name = item.querySelector(".item-name").textContent;
    const desc = item.querySelector(".item-desc").textContent;
    const price = item.querySelector(".price").textContent;

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
    document.body.style.overflow = "hidden"

    modal.querySelector(".close-modal").addEventListener("click", () => {
      modal.remove();
      document.body.style.overflow = ""
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.remove();
        document.body.style.overflow = ""
      }
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
        document.body.style.overflow = ""
      }
    });

    modal.querySelector(".confirm-order-btn").addEventListener("click", () => {
      alert("Order placed for " + name);
      modal.remove();
      document.body.style.overflow = ""
    });
  }
}



document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  if (document.getElementById("carousel").dataset.dots === "true") {
    renderCarouselDots();
  }
  renderFAQ();
  attachDynamicEventListeners();
});
