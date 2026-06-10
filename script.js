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
    nameErr.style.color = "red";
    nameInput.style.borderColor = "red";
    nameInput.style.borderWidth = "2px";
    nameInput.style.borderStyle = "solid";
    isValid = false;
  } else {
    nameErr.textContent = "";
  }

  if (emailInput.value.trim() === "") {
    emailErr.textContent = "Email cannot be empty.";
    emailErr.style.color = "red";
    emailInput.style.borderColor = "red";
    emailInput.style.borderWidth = "2px";
    emailInput.style.borderStyle = "solid";
    isValid = false;
  } else {
    emailErr.textContent = "";
  }

  if (messageInput.value.trim() === "") {
    messageInput.style.borderColor = "red";
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

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 2000);

function setandshowindex(i) {
  index = i;
  showSlide(index);
}
function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("dot-active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("dot-active");
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

function next() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");


  button.addEventListener("click", () => {
    // faqItems.forEach((f) => {
    //   if (f !== item) {
    //     f.classList.remove("active");
    //   }
    // });
    item.classList.toggle("active");
  });
});

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
const gridImages = document.querySelectorAll(".grid-imgs");

gridImages.forEach((img) => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const lightboxImg = document.createElement("img");
    lightboxImg.src = img.src;

    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.classList.add("close-btn");

    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    closeBtn.addEventListener("click", () => {
      lightbox.remove();
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImg) {
        lightbox.remove();
      }
    });

    document.addEventListener("keydown", function escClose(e) {
      if (e.key === "Escape") {
        lightbox.remove();
        document.removeEventListener("keydown", escClose);
      }
    });
  });
});
