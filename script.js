let acc = document.getElementsByClassName("expandable");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor link
    this.classList.toggle("active");

    let panel = this.nextElementSibling; // Get the panel related to the clicked anchor
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
      panel.style.maxHeight = null;
    } else {
      panel.style.display = "block";
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}