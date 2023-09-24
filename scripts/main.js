const generateBackground = () => {
  const backgroundElement = document.getElementById("background");
  const TextArray = ["Mothership", "will", "take", "you", "on", "Higher"];
  for (i = 0; i < TextArray.length; i++) {
    const wrapper = spanElement(TextArray[i].toUpperCase());
    if (i % 2 === 0) {
      wrapper.setAttribute("data-speed", 1 + 0.1 * i);
    } else {
      wrapper.setAttribute("data-speed", 1.7 + 0.1 * i);
    }

    backgroundElement.appendChild(wrapper);
  }
};

// function that return 100 of span elements
const spanElement = (text) => {
  const wrapper = document.createElement("div");
  for (let i = 0; i < 100; i++) {
    let span = document.createElement("span");
    let spanNode = document.createTextNode(text);
    span.appendChild(spanNode);
    wrapper.appendChild(span);
  }

  return wrapper;
};

// group parallax functions
function parallax(e) {
  let _mouseY = e.clientY;
  let _mouseX = e.clientX;
  translateText(_mouseY);
  translateImages(_mouseY);
  moveBodyBG(_mouseX);
}

// group parallax functions
function parallaxMobile(e) {
  let _mouseY = e.touches[0].clientY * -2;
  translateText(_mouseY);
  translateImages(_mouseY);
  moveBodyBG(_mouseY);
}

const translateText = (x) => {
  const _depth1 = x * -0.5;
  const getTextElement = document.querySelectorAll("#background > div");
  [...getTextElement].forEach((element) => {
    let speed = element.getAttribute("data-speed");
    element.style.transform = `translateY(${speed * _depth1}px)`;
  });
};

const translateImages = (x) => {
  const _depth1 = x * 0.05;
  const getImageElement = document.querySelectorAll(".assets");
  [...getImageElement].forEach((element) => {
    let speed = element.getAttribute("data-speed");
    element.style.transform = `translateY(${speed * _depth1}px)`;
  });

  // also play with margin
  const getTextElement = document.getElementById("background");
  getTextElement.style.marginTop = `${70 + _depth1}px`;
};

const moveBodyBG = (x) => {
  const _depth1 = x * -0.05;
  const body = document.querySelector("body");
  console.log("_depth1", _depth1);
  body.style.backgroundPositionX = `${_depth1}px`;
};

generateBackground();

window.addEventListener("mousemove", parallax);
window.addEventListener("touchmove", parallaxMobile);
