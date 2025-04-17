document.addEventListener("DOMContentLoaded", () => {
  const rotatingImages = document.querySelectorAll(".rotating-image");

  rotatingImages.forEach((img) => {
    const imageList = JSON.parse(img.getAttribute("data-images"));
    let index = 0;
    let interval;

    img.addEventListener("mouseover", () => {
      interval = setInterval(() => {
        index = (index + 1) % imageList.length;
        img.src = imageList[index];
      }, 500);
    });

    img.addEventListener("mouseout", () => {
      clearInterval(interval);
      img.src = imageList[0];
      index = 0;
    });
  });
});

function searchProduct() {
  const input = document.getElementById("searchInput").value;
  alert("Search: " + input);
}

function toggleMenu() {
  const menu = document.getElementById("categoryMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}