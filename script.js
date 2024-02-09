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
      circle.style.display = (circle.style.display === "none") ? "block" : "none";
    });

});

  function desaparecerAparecer() {
    var circle = document.getElementById('circle');
    circle.style.display = (circle.style.display === 'none' || circle.style.display === '') ? 'block' : 'none';
  }
