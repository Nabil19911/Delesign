// Disable browser default
window.oncontextmenu = e => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

const slider = document.querySelector(".testimonial");
let isDown = false,
  startX,
  scrollLeft;

// Prevent Image drags
const imgs = slider.querySelectorAll("img");
imgs.forEach(item => {
  item.addEventListener("dragstart", e => {
    e.preventDefault();
  });
});

const getX = index => {
  return index.pageX - slider.offsetLeft;
};
const mouseEvents = () => {
  isDown = false;
  slider.style.cursor = "grab";
};
slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.style.cursor = "grabbing";
  startX = getX(e);
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  mouseEvents();
});
slider.addEventListener("mouseup", () => {
  mouseEvents();
});
slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = getX(e);
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
