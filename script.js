document.addEventListener("DOMContentLoaded", function () {
    const circle = document.getElementById("circle");
    const colorPicker = document.getElementById("colorPicker");
    const sizeRange = document.getElementById("sizeRange");

    colorPicker.addEventListener("input", function () {
      circle.style.backgroundColor = colorPicker.value;
    });

    sizeRange.addEventListener("input", function () {
      const newSize = sizeRange.value + "px";
      circle.style.width = newSize;
      circle.style.height = newSize;
    });

    circle.addEventListener("click", function () {
      const randomColor = getRandomColor();
      circle.style.backgroundColor = randomColor;
      colorPicker.value = randomColor;
    });

    circle.addEventListener("dblclick", function () {
      circle.style.display = (circle.style.display === "none") ? "block" : "none";
    });

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });

  function desaparecerAparecer() {
    var circle = document.getElementById('circle');
    circle.style.display = (circle.style.display === 'none' || circle.style.display === '') ? 'block' : 'none';
  }
